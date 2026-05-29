import type { ReactElement, SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  title?: string;
  size?: number | string;
}

export function createIcon(path: ReactElement, displayName: string) {
  function Icon({ title, size = 20, ...props }: IconProps) {
    const ariaProps = title
      ? { role: "img" as const, "aria-label": title }
      : { "aria-hidden": true as const };

    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...ariaProps}
        {...props}
      >
        {path}
      </svg>
    );
  }

  Icon.displayName = displayName;
  return Icon;
}
