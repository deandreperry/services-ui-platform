import { createIcon } from "./Icon";

export type { IconProps } from "./Icon";

export const CheckIcon = createIcon(<path d="m5 12 4 4L19 6" />, "CheckIcon");
export const ChevronDownIcon = createIcon(<path d="m6 9 6 6 6-6" />, "ChevronDownIcon");
export const CloseIcon = createIcon(
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>,
  "CloseIcon"
);
export const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="m16.5 16.5 4 4" />
  </>,
  "SearchIcon"
);
export const SettingsIcon = createIcon(
  <>
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .32 1.76l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.6 1.6 0 0 0 15.13 19a1.6 1.6 0 0 0-1 .24 1.6 1.6 0 0 0-.77 1.38V21a2 2 0 1 1-4 0v-.09a1.6 1.6 0 0 0-.77-1.38 1.6 1.6 0 0 0-1-.24 1.6 1.6 0 0 0-1.76.32l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.6 1.6 0 0 0 4.6 15a1.6 1.6 0 0 0-.24-1A1.6 1.6 0 0 0 3 13.25H3a2 2 0 1 1 0-4h.09a1.6 1.6 0 0 0 1.38-.77 1.6 1.6 0 0 0 .24-1A1.6 1.6 0 0 0 4.39 5.7l-.06-.06A2 2 0 1 1 7.16 2.8l.06.06A1.6 1.6 0 0 0 9 3.18a1.6 1.6 0 0 0 1-.24A1.6 1.6 0 0 0 10.75 1.6V1.5a2 2 0 1 1 4 0v.09a1.6 1.6 0 0 0 .77 1.38 1.6 1.6 0 0 0 1 .24 1.6 1.6 0 0 0 1.76-.32l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.6 1.6 0 0 0 19.4 7a1.6 1.6 0 0 0 .24 1A1.6 1.6 0 0 0 21 8.75h.09a2 2 0 1 1 0 4H21a1.6 1.6 0 0 0-1.38.77 1.6 1.6 0 0 0-.22 1.48Z" />
  </>,
  "SettingsIcon"
);
export const PlayCircleIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m10 8 6 4-6 4V8Z" />
  </>,
  "PlayCircleIcon"
);
export const BellIcon = createIcon(
  <>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" />
    <path d="M10 21h4" />
  </>,
  "BellIcon"
);
