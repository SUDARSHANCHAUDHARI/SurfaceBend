import type { SurfacePanelRecord } from "../lib/starter-data";

type SurfacePanelProps = {
  panel: SurfacePanelRecord;
  index: number;
  active: boolean;
  onSelect: (id: string) => void;
};

export function SurfacePanel({ panel, index, active, onSelect }: SurfacePanelProps) {
  return (
    <article
      className={`panel ${active ? "active" : ""}`}
      onClick={() => onSelect(panel.id)}
      style={{ transformOrigin: `${20 + index * 18}% 50%` }}
    >
      <div className="panelFrame">
        <div className="panelMini" />
      </div>
      <span className="label">Panel {index + 1}</span>
      <h2>{panel.title}</h2>
      <p>{panel.description}</p>
    </article>
  );
}
