export const Keys = {
  ArrowDown: "ArrowDown",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
  ArrowUp: "ArrowUp",
  End: "End",
  Enter: "Enter",
  Escape: "Escape",
  Home: "Home",
  Space: " ",
  Tab: "Tab"
} as const;

export type KeyboardKey = (typeof Keys)[keyof typeof Keys];

export function isActivationKey(event: Pick<KeyboardEvent, "key">): boolean {
  return event.key === Keys.Enter || event.key === Keys.Space;
}

export function isHorizontalNavigationKey(event: Pick<KeyboardEvent, "key">): boolean {
  return event.key === Keys.ArrowLeft || event.key === Keys.ArrowRight;
}

export function isVerticalNavigationKey(event: Pick<KeyboardEvent, "key">): boolean {
  return event.key === Keys.ArrowUp || event.key === Keys.ArrowDown;
}
