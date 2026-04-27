"use client";

import { useMemo, useState } from "react";
import { UrlCaptureForm } from "../components/UrlCaptureForm";
import { SurfacePanel } from "../components/SurfacePanel";
import { starterPanels } from "../lib/starter-data";

export default function HomePage() {
  const [url, setUrl] = useState("https://stripe.com");
  const [activePanel, setActivePanel] = useState<string | null>(starterPanels[0]?.id ?? null);

  const selected = useMemo(
    () => starterPanels.find((panel) => panel.id === activePanel) ?? starterPanels[0],
    [activePanel]
  );

  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Living Interfaces</p>
        <h1>SurfaceBend</h1>
        <p className="lede">
          Turn flat web layouts into a tactile scene. This starter focuses on the
          product feel first, then leaves room for later capture and rendering upgrades.
        </p>
      </section>

      <UrlCaptureForm url={url} onChange={setUrl} />

      <section className="stage">
        <div className="stageHeader">
          <div>
            <span className="label">Target URL</span>
            <strong>{url}</strong>
          </div>
          <p>Pick a panel to preview how the surface language could feel.</p>
        </div>

        <div className="panelGrid">
          {starterPanels.map((panel, index) => (
            <SurfacePanel
              key={panel.id}
              panel={panel}
              index={index}
              active={panel.id === activePanel}
              onSelect={setActivePanel}
            />
          ))}
        </div>
      </section>

      <section className="detailCard">
        <span className="label">Selected Motion</span>
        <h2>{selected.title}</h2>
        <p>{selected.description}</p>
        <ul>
          {selected.effects.map((effect) => (
            <li key={effect}>{effect}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
