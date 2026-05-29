export const colors = {
  neutral: {
    0: "#ffffff",
    50: "#f7f8fa",
    100: "#eef0f3",
    200: "#dfe3e8",
    300: "#c8ced7",
    400: "#9aa3af",
    500: "#6f7784",
    600: "#4e5661",
    700: "#353c45",
    800: "#22272e",
    900: "#15191f",
    950: "#0c0f14"
  },
  blue: {
    50: "#edf6ff",
    100: "#d8ebff",
    200: "#acd6ff",
    300: "#75baff",
    400: "#3c9afe",
    500: "#0f7fea",
    600: "#0067c8",
    700: "#0052a2",
    800: "#064680",
    900: "#0b3c6a"
  },
  green: {
    50: "#ebfbf1",
    100: "#d2f6df",
    200: "#a8eabd",
    300: "#72d993",
    400: "#3fc66d",
    500: "#1da853",
    600: "#128641",
    700: "#116b37",
    800: "#11562f",
    900: "#0f4729"
  },
  amber: {
    50: "#fff8e7",
    100: "#ffedc0",
    200: "#ffda82",
    300: "#ffc24a",
    400: "#f5a623",
    500: "#dc8911",
    600: "#b8680c",
    700: "#934d0f",
    800: "#773d12",
    900: "#663414"
  },
  red: {
    50: "#fff0f0",
    100: "#ffdddd",
    200: "#ffc0c0",
    300: "#ff9494",
    400: "#ff5f5f",
    500: "#ef3d3d",
    600: "#d22424",
    700: "#b11d1d",
    800: "#921d1d",
    900: "#7a1f1f"
  }
} as const;

export const typography = {
  fontFamily: {
    sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    mono: "SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace"
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.5rem"
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeight: {
    tight: 1.15,
    compact: 1.3,
    normal: 1.5,
    relaxed: 1.65
  }
} as const;

export const themes = {
  light: {
    "bg.canvas": colors.neutral[50],
    "bg.surface": colors.neutral[0],
    "bg.subtle": colors.neutral[100],
    "bg.muted": colors.neutral[200],
    "bg.inverse": colors.neutral[900],
    "text.primary": colors.neutral[900],
    "text.secondary": colors.neutral[600],
    "text.muted": colors.neutral[500],
    "text.inverse": colors.neutral[0],
    "text.link": colors.blue[600],
    "border.subtle": colors.neutral[200],
    "border.strong": colors.neutral[300],
    "border.focus": colors.blue[500],
    accent: colors.blue[500],
    success: colors.green[600],
    warning: colors.amber[600],
    danger: colors.red[600]
  },
  dark: {
    "bg.canvas": colors.neutral[950],
    "bg.surface": colors.neutral[900],
    "bg.subtle": colors.neutral[800],
    "bg.muted": colors.neutral[700],
    "bg.inverse": colors.neutral[0],
    "text.primary": colors.neutral[50],
    "text.secondary": colors.neutral[300],
    "text.muted": colors.neutral[400],
    "text.inverse": colors.neutral[900],
    "text.link": colors.blue[300],
    "border.subtle": colors.neutral[700],
    "border.strong": colors.neutral[600],
    "border.focus": colors.blue[300],
    accent: colors.blue[400],
    success: colors.green[400],
    warning: colors.amber[300],
    danger: colors.red[400]
  }
} as const;

export const spacing = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem"
} as const;

export const radius = {
  none: "0",
  xs: "0.25rem",
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "999px"
} as const;

export const shadows = {
  xs: "0 1px 2px rgb(15 23 42 / 0.08)",
  sm: "0 4px 12px rgb(15 23 42 / 0.10)",
  md: "0 10px 30px rgb(15 23 42 / 0.14)",
  lg: "0 22px 60px rgb(15 23 42 / 0.18)",
  focus: "0 0 0 3px rgb(15 127 234 / 0.28)"
} as const;

export const motion = {
  duration: {
    fast: "120ms",
    normal: "180ms",
    slow: "260ms"
  },
  easing: {
    standard: "cubic-bezier(0.2, 0, 0, 1)",
    entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
    exit: "cubic-bezier(0.7, 0, 0.84, 0)"
  }
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
} as const;

export const zIndex = {
  base: 0,
  raised: 10,
  sticky: 100,
  overlay: 1000,
  modal: 1100,
  toast: 1200,
  tooltip: 1300
} as const;

export const tokens = {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  motion,
  breakpoints,
  themes,
  zIndex
} as const;

export type Tokens = typeof tokens;
export type ColorScale = keyof typeof colors;
export type ThemeName = keyof typeof themes;
