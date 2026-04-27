export type SurfacePanelRecord = {
  id: string;
  title: string;
  description: string;
  effects: string[];
};

export const starterPanels: SurfacePanelRecord[] = [
  {
    id: "hero",
    title: "Hero Surface",
    description: "A bold landing panel that lifts and bends toward the cursor.",
    effects: ["Soft bend", "Cursor follow", "Depth shadow"]
  },
  {
    id: "feature",
    title: "Feature Stripe",
    description: "A horizontal content band that ripples as the user explores.",
    effects: ["Ripple trail", "Light sweep", "Layered parallax"]
  },
  {
    id: "cta",
    title: "Call To Action",
    description: "A premium action panel with higher tension and stronger response.",
    effects: ["Hover snap", "Glow edge", "Micro lift"]
  }
];
