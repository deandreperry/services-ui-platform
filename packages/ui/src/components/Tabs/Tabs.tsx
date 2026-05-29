import { Keys, useUniqueId } from "@services-ui/a11y";
import { useRef, useState, type KeyboardEvent, type ReactNode } from "react";

import { cx } from "../../utils";

export interface TabItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  "aria-label": string;
}

export function Tabs({
  "aria-label": ariaLabel,
  className,
  defaultValue,
  items,
  onValueChange,
  orientation = "horizontal",
  value
}: TabsProps) {
  const idPrefix = useUniqueId("tabs");
  const firstEnabledItem = items.find((item) => !item.disabled);
  const [internalValue, setInternalValue] = useState(defaultValue ?? firstEnabledItem?.value);
  const selectedValue = value ?? internalValue;
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const selectedItem = items.find((item) => item.value === selectedValue) ?? firstEnabledItem;

  function activateTab(nextValue: string) {
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue);
    tabRefs.current[nextValue]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, currentValue: string) {
    const enabledItems = items.filter((item) => !item.disabled);
    const currentIndex = enabledItems.findIndex((item) => item.value === currentValue);
    const previousKey = orientation === "vertical" ? Keys.ArrowUp : Keys.ArrowLeft;
    const nextKey = orientation === "vertical" ? Keys.ArrowDown : Keys.ArrowRight;

    if (event.key === Keys.Home) {
      event.preventDefault();
      activateTab(enabledItems[0].value);
    }

    if (event.key === Keys.End) {
      event.preventDefault();
      activateTab(enabledItems[enabledItems.length - 1].value);
    }

    if (event.key === previousKey || event.key === nextKey) {
      event.preventDefault();
      const offset = event.key === nextKey ? 1 : -1;
      const nextIndex = (currentIndex + offset + enabledItems.length) % enabledItems.length;
      activateTab(enabledItems[nextIndex].value);
    }
  }

  if (!selectedItem) {
    return null;
  }

  return (
    <div className={cx("sui-tabs", className)} data-orientation={orientation}>
      <div className="sui-tabs__list" role="tablist" aria-label={ariaLabel} aria-orientation={orientation}>
        {items.map((item) => {
          const tabId = `${idPrefix}-tab-${item.value}`;
          const panelId = `${idPrefix}-panel-${item.value}`;
          const isSelected = item.value === selectedItem.value;

          return (
            <button
              key={item.value}
              ref={(node) => {
                tabRefs.current[item.value] = node;
              }}
              id={tabId}
              className="sui-tabs__tab"
              role="tab"
              type="button"
              disabled={item.disabled}
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => activateTab(item.value)}
              onKeyDown={(event) => handleKeyDown(event, item.value)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {items.map((item) => {
        const isSelected = item.value === selectedItem.value;
        return (
          <div
            key={item.value}
            id={`${idPrefix}-panel-${item.value}`}
            className="sui-tabs__panel"
            role="tabpanel"
            tabIndex={0}
            hidden={!isSelected}
            aria-labelledby={`${idPrefix}-tab-${item.value}`}
          >
            {isSelected ? item.content : null}
          </div>
        );
      })}
    </div>
  );
}
