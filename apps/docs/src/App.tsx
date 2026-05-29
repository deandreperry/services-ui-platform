import { tokens } from "@services-ui/tokens";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Tabs,
  TextField,
  Tooltip
} from "@services-ui/ui";
import { useMemo, useState, type ReactNode } from "react";

type PageId =
  | "overview"
  | "getting-started"
  | "tokens"
  | "components"
  | "accessibility"
  | "theming"
  | "contributing";

interface Page {
  id: PageId;
  title: string;
  summary: string;
  content: ReactNode;
}

const packages = [
  ["@services-ui/ui", "Accessible React components with tested APIs and Storybook coverage."],
  ["@services-ui/tokens", "Typed design tokens, CSS variables, and light/dark themes."],
  ["@services-ui/a11y", "Shared focus, keyboard, ID, and ARIA utilities."],
  ["@services-ui/icons", "Small React SVG icon set for product examples."]
];

function CodeBlock({ children }: { children: ReactNode }) {
  return <pre className="docs-code">{children}</pre>;
}

function OverviewPage({ onOpenComponents }: { onOpenComponents: () => void }) {
  return (
    <div className="docs-stack">
      <section className="docs-callout">
        <div>
          <Badge variant="accent">Platform foundation</Badge>
          <h2>Shared UI infrastructure for product teams</h2>
          <p>
            Services UI Platform packages the common decisions that slow product delivery:
            tokens, theming, accessibility behavior, component APIs, tests, docs, and release
            workflows.
          </p>
        </div>
        <Button onClick={onOpenComponents}>View component catalog</Button>
      </section>

      <div className="docs-grid">
        {packages.map(([name, description]) => (
          <Card key={name} interactive>
            <CardHeader>
              <CardTitle>{name}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

function GettingStartedPage() {
  return (
    <div className="docs-stack">
      <p>
        The repo uses pnpm workspaces and Turborepo so package builds, tests, and docs remain fast as
        the platform grows.
      </p>
      <CodeBlock>{`pnpm install
pnpm dev
pnpm test
pnpm build`}</CodeBlock>
      <div className="docs-grid docs-grid--two">
        <Card>
          <CardHeader>
            <CardTitle>Develop components</CardTitle>
            <CardDescription>
              Run Storybook while editing UI APIs, states, and accessibility behavior.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>pnpm storybook</CodeBlock>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Validate changes</CardTitle>
            <CardDescription>
              CI runs lint, typecheck, tests, and builds across every workspace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock>pnpm lint && pnpm typecheck && pnpm test</CodeBlock>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function TokensPage() {
  const tokenRows = useMemo(
    () => [
      ["Colors", Object.keys(tokens.colors).join(", ")],
      ["Typography", Object.keys(tokens.typography.fontSize).join(", ")],
      ["Spacing", Object.keys(tokens.spacing).join(", ")],
      ["Radius", Object.keys(tokens.radius).join(", ")],
      ["Motion", Object.keys(tokens.motion.duration).join(", ")],
      ["Themes", Object.keys(tokens.themes).join(", ")]
    ],
    []
  );

  return (
    <div className="docs-stack">
      <p>
        Tokens are authored once as TypeScript objects and distributed as CSS custom properties.
        Product surfaces consume semantic variables, while platform packages keep the raw scales
        typed and inspectable.
      </p>
      <div className="docs-token-swatches">
        {Object.entries(tokens.colors).map(([scale, values]) => (
          <Card key={scale}>
            <CardHeader>
              <CardTitle>{scale}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="docs-swatches">
                {Object.entries(values).slice(0, 8).map(([step, color]) => (
                  <span key={step} title={`${scale}.${step}: ${color}`} style={{ background: color }} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <table className="docs-table">
        <tbody>
          {tokenRows.map(([name, values]) => (
            <tr key={name}>
              <th>{name}</th>
              <td>{values}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ComponentsPage() {
  return (
    <div className="docs-stack">
      <Tabs
        aria-label="Component examples"
        items={[
          {
            value: "inputs",
            label: "Inputs",
            content: (
              <div className="docs-component-row">
                <TextField label="Campaign name" placeholder="Spring launch" helperText="Visible in reports." />
                <Checkbox
                  label="Require approval before publishing"
                  description="Applies to all media assets in this campaign."
                />
              </div>
            )
          },
          {
            value: "feedback",
            label: "Feedback",
            content: (
              <div className="docs-component-row">
                <Badge variant="success">Live</Badge>
                <Badge variant="warning">Needs review</Badge>
                <Tooltip content="Tooltips are focusable through their trigger." delay={0}>
                  <Button variant="secondary">Inspect tooltip</Button>
                </Tooltip>
              </div>
            )
          },
          {
            value: "surfaces",
            label: "Surfaces",
            content: (
              <Card style={{ maxWidth: 460 }}>
                <CardHeader>
                  <CardTitle>Component contract</CardTitle>
                  <CardDescription>
                    Components expose explicit props, native behavior, and CSS-variable styling.
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          }
        ]}
      />
    </div>
  );
}

function AccessibilityPage() {
  return (
    <div className="docs-stack">
      <p>
        Accessibility is treated as a product contract, not a pass at the end. Components ship with
        keyboard behavior, ARIA relationships, semantic markup, and tests around critical paths.
      </p>
      <div className="docs-grid docs-grid--two">
        {[
          "Native controls before custom widgets",
          "Visible focus indicators on every interactive element",
          "ARIA names and descriptions connected by default",
          "Keyboard support documented in Storybook",
          "Dialog focus is trapped and restored",
          "Reduced motion and theme contrast stay token-driven"
        ].map((standard) => (
          <Card key={standard}>
            <CardContent>
              <Badge variant="success">Standard</Badge>
              <p className="docs-card-copy">{standard}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ThemingPage() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="docs-stack" data-theme={theme}>
      <div className="docs-theme-toolbar">
        <Button variant={theme === "light" ? "primary" : "secondary"} onClick={() => setTheme("light")}>
          Light
        </Button>
        <Button variant={theme === "dark" ? "primary" : "secondary"} onClick={() => setTheme("dark")}>
          Dark
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Theme preview</CardTitle>
          <CardDescription>
            Product teams switch themes by setting <code>data-theme</code> and consuming semantic
            CSS variables.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="docs-theme-preview">
            <Badge variant="accent">Theme aware</Badge>
            <TextField label="Workspace display name" defaultValue="Media Operations" />
            <Button>Save preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ContributingPage() {
  return (
    <div className="docs-stack">
      <p>
        Contributions should improve shared leverage. New APIs need a documented use case, accessible
        behavior, tests, stories, and a changeset when package consumers are affected.
      </p>
      <ol className="docs-steps">
        <li>Open a platform proposal for new shared patterns.</li>
        <li>Prototype the API in Storybook with realistic product states.</li>
        <li>Add focused tests for keyboard, disabled, loading, and validation behavior.</li>
        <li>Document migration notes and release impact through Changesets.</li>
      </ol>
    </div>
  );
}

export function App() {
  const [activePageId, setActivePageId] = useState<PageId>("overview");
  const pages: Page[] = [
    {
      id: "overview",
      title: "Overview",
      summary: "How the platform creates leverage across product teams.",
      content: <OverviewPage onOpenComponents={() => setActivePageId("components")} />
    },
    {
      id: "getting-started",
      title: "Getting Started",
      summary: "Install, run, and validate the monorepo locally.",
      content: <GettingStartedPage />
    },
    {
      id: "tokens",
      title: "Design Tokens",
      summary: "Typed token scales, CSS variables, and semantic themes.",
      content: <TokensPage />
    },
    {
      id: "components",
      title: "Components",
      summary: "Reusable primitives with scalable APIs and accessibility defaults.",
      content: <ComponentsPage />
    },
    {
      id: "accessibility",
      title: "Accessibility",
      summary: "Standards for keyboard support, ARIA, focus, and validation.",
      content: <AccessibilityPage />
    },
    {
      id: "theming",
      title: "Theming",
      summary: "Light and dark modes powered by semantic CSS variables.",
      content: <ThemingPage />
    },
    {
      id: "contributing",
      title: "Contribution Guide",
      summary: "How product teams add, change, and release platform code.",
      content: <ContributingPage />
    }
  ];
  const activePage = pages.find((page) => page.id === activePageId) ?? pages[0];

  return (
    <div className="docs-shell">
      <aside className="docs-sidebar">
        <div className="docs-brand">
          <span className="docs-brand__mark">SUI</span>
          <div>
            <strong>Services UI</strong>
            <span>Platform docs</span>
          </div>
        </div>
        <nav aria-label="Documentation">
          {pages.map((page) => (
            <button
              key={page.id}
              className="docs-nav-item"
              data-active={activePage.id === page.id ? "true" : undefined}
              type="button"
              onClick={() => setActivePageId(page.id)}
            >
              {page.title}
            </button>
          ))}
        </nav>
      </aside>
      <main className="docs-main">
        <header className="docs-page-header">
          <Badge variant="neutral">Internal platform</Badge>
          <h1>{activePage.title}</h1>
          <p>{activePage.summary}</p>
        </header>
        {activePage.content}
      </main>
    </div>
  );
}
