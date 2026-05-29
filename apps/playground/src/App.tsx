import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Modal,
  Tabs,
  TextField,
  ToastProvider,
  ToastViewport,
  Tooltip,
  useToast
} from "@services-ui/ui";
import { useState } from "react";

const mediaRows = [
  ["Launch teaser 16x9", "Encoding", "42%", "warning"],
  ["Customer story cutdown", "Live", "1.2M views", "success"],
  ["Product demo carousel", "Needs review", "3 comments", "danger"],
  ["Partner announcement", "Scheduled", "Jun 03", "accent"]
] as const;

const metrics = [
  ["Active campaigns", "28", "+12%"],
  ["Media processed", "18.4k", "+8.7%"],
  ["Approval SLA", "3.2h", "-18%"],
  ["Error rate", "0.04%", "Stable"]
];

function MediaDashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { addToast } = useToast();

  return (
    <div className="play-stack">
      <section className="play-header">
        <div>
          <Badge variant="accent">Media operations</Badge>
          <h1>Campaign media dashboard</h1>
          <p>Monitor creative readiness, transcode health, approvals, and channel delivery.</p>
        </div>
        <div className="play-actions">
          <Tooltip content="Runs queue, CDN, and approval checks." delay={0}>
            <Button
              variant="secondary"
              onClick={() =>
                addToast({
                  title: "Health check started",
                  description: "We will notify the workspace when checks complete.",
                  tone: "success"
                })
              }
            >
              Run health check
            </Button>
          </Tooltip>
          <Button onClick={() => setModalOpen(true)}>Add media</Button>
        </div>
      </section>

      <div className="play-metric-grid">
        {metrics.map(([label, value, delta]) => (
          <Card key={label}>
            <CardContent>
              <span className="play-kicker">{label}</span>
              <strong className="play-metric">{value}</strong>
              <Badge variant={delta.startsWith("-") ? "success" : "neutral"}>{delta}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="play-dashboard-grid">
        <Card>
          <CardHeader>
            <CardTitle>Creative queue</CardTitle>
            <CardDescription>Assets moving through encoding, review, and scheduling.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="play-table" role="list" aria-label="Creative queue">
              {mediaRows.map(([name, status, detail, tone]) => (
                <div className="play-table__row" role="listitem" key={name}>
                  <div>
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </div>
                  <Badge variant={tone}>{status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Channel mix</CardTitle>
            <CardDescription>Live campaign delivery by media destination.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="play-bars" role="list" aria-label="Channel mix">
              {[
                ["CTV", "74%"],
                ["Social", "62%"],
                ["Display", "48%"],
                ["Audio", "31%"]
              ].map(([label, value]) => (
                <div className="play-bar" role="listitem" key={label}>
                  <span>{label}</span>
                  <div>
                    <i style={{ width: value }} />
                  </div>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="secondary"
              size="sm"
              onClick={() =>
                addToast({
                  title: "Report export queued",
                  description: "The channel mix report will be emailed to campaign owners.",
                  tone: "neutral"
                })
              }
            >
              Export report
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Add media asset"
        description="Create a new asset record for review and distribution."
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setModalOpen(false);
                addToast({
                  title: "Asset draft created",
                  description: "The new media asset is ready for metadata.",
                  tone: "success"
                });
              }}
            >
              Create draft
            </Button>
          </>
        }
      >
        <div className="play-form">
          <TextField label="Asset name" placeholder="Q3 product teaser" />
          <TextField label="Owner team" placeholder="Brand Studio" />
          <Checkbox label="Require legal approval" description="Adds legal to the review workflow." />
        </div>
      </Modal>
    </div>
  );
}

function SettingsPage() {
  const { addToast } = useToast();

  return (
    <div className="play-stack">
      <section className="play-header">
        <div>
          <Badge variant="neutral">Workspace settings</Badge>
          <h1>Preferences and governance</h1>
          <p>Configure how teams review assets, receive alerts, and manage publishing controls.</p>
        </div>
        <Button
          onClick={() =>
            addToast({
              title: "Preferences saved",
              description: "Workspace defaults were updated for future campaigns.",
              tone: "success"
            })
          }
        >
          Save changes
        </Button>
      </section>

      <div className="play-settings-grid">
        <Card>
          <CardHeader>
            <CardTitle>Workspace profile</CardTitle>
            <CardDescription>Names and identifiers shown across reporting surfaces.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="play-form">
              <TextField label="Workspace name" defaultValue="Media Operations" />
              <TextField label="Workspace slug" defaultValue="media-ops" />
              <TextField label="Default owner group" defaultValue="Brand Studio" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification preferences</CardTitle>
            <CardDescription>Keep product teams aware without creating alert fatigue.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="play-form">
              <Checkbox label="Encoding failures" description="Notify channel owners immediately." defaultChecked />
              <Checkbox label="Approval SLA risk" description="Warn teams before campaigns miss launch windows." />
              <Checkbox label="Weekly platform digest" description="Summarize reliability and adoption trends." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Publishing guardrails</CardTitle>
            <CardDescription>Governance defaults for campaigns with regulated media.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              aria-label="Publishing policies"
              items={[
                {
                  value: "standard",
                  label: "Standard",
                  content: "Standard campaigns require creative approval and automated metadata checks."
                },
                {
                  value: "regulated",
                  label: "Regulated",
                  content: "Regulated campaigns require legal, brand, and accessibility sign-off."
                },
                {
                  value: "partner",
                  label: "Partner",
                  content: "Partner campaigns add co-marketing review and embargo validation."
                }
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function PlaygroundShell() {
  return (
    <main className="play-shell">
      <Tabs
        aria-label="Playground screens"
        items={[
          {
            value: "media",
            label: "Media dashboard",
            content: <MediaDashboard />
          },
          {
            value: "settings",
            label: "Settings",
            content: <SettingsPage />
          }
        ]}
      />
      <ToastViewport />
    </main>
  );
}

export function App() {
  return (
    <ToastProvider>
      <PlaygroundShell />
    </ToastProvider>
  );
}
