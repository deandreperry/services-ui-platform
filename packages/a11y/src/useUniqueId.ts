import { useId } from "react";

let idCounter = 0;

export function createUniqueId(prefix = "sui"): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

export function useUniqueId(prefix = "sui", providedId?: string): string {
  const reactId = useId().replace(/:/g, "");
  return providedId ?? `${prefix}-${reactId}`;
}
