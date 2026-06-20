import { describe, it, expect } from "vitest";
import { selectById } from "./selectById";
import { starterPanels } from "./starter-data";

type Item = { id: string; name: string };

const items: Item[] = [
  { id: "a", name: "Alpha" },
  { id: "b", name: "Beta" },
];

const fallback: Item = { id: "fallback", name: "Fallback" };

describe("selectById", () => {
  it("returns the matching item", () => {
    expect(selectById(items, "b", fallback)).toEqual(items[1]);
  });

  it("returns the fallback when no item matches", () => {
    expect(selectById(items, "missing", fallback)).toBe(fallback);
  });

  it("returns the fallback when id is null", () => {
    expect(selectById(items, null, fallback)).toBe(fallback);
  });

  it("returns the fallback for an empty list", () => {
    expect(selectById([], "a", fallback)).toBe(fallback);
  });

  it("returns the first match when multiple items share an id (defensive)", () => {
    const dups: Item[] = [
      { id: "x", name: "First" },
      { id: "x", name: "Second" },
    ];
    expect(selectById(dups, "x", fallback).name).toBe("First");
  });
});

describe("starter-data integrity", () => {
  it("starterPanels has unique IDs (regression guard)", () => {
    const ids = starterPanels.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("every starter panel has at least one effect (UI contract)", () => {
    for (const panel of starterPanels) {
      expect(panel.effects.length).toBeGreaterThan(0);
    }
  });
});
