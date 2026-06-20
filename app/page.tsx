"use client";

import { useMemo, useState } from "react";
import { UrlCaptureForm } from "../components/UrlCaptureForm";
import { SurfacePanel } from "../components/SurfacePanel";
import { starterPanels } from "../lib/starter-data";
import { selectById } from "../lib/selectById";

const stats = [
  { label: "Preview mode", value: "Tactile" },
  { label: "Panels", value: "03" },
  { label: "Motion bias", value: "Soft bend" }
];

export default function HomePage() {
  const [url, setUrl] = useState("https://stripe.com");
  const [activePanel, setActivePanel] = useState<string | null>(starterPanels[0]?.id ?? null);

  const selected = useMemo(
    () => selectById(starterPanels, activePanel, starterPanels[0]),
    [activePanel]
  );

  return (
    <main className="shell">
      <section className="heroBlock">
        <div className="heroCopy">
          <p className="eyebrow">Living Interfaces</p>
          <h1>SurfaceBend</h1>
          <p className="lede">
            Turn a flat website into a tactile scene with motion, weight, and response.
            This demo focuses on the emotional feel of the interface before the heavier
            capture and rendering layers arrive.
          </p>

          <div className="heroActions">
            <a className="primaryAction" href="#preview">
              Explore preview
            </a>
            <span className="secondaryAction">Concept-first. Demo-ready. Product-shaped.</span>
          </div>
        </div>

        <aside className="heroPreview">
          <div className="previewGlass">
            <div className="previewChrome">
              <span />
              <span />
              <span />
            </div>
            <div className="previewCanvas">
              <div className="previewCard previewCardLarge" />
              <div className="previewRow">
                <div className="previewCard previewCardSmall" />
                <div className="previewCard previewCardTall" />
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="statsRow">
        {stats.map((stat) => (
          <article key={stat.label} className="statCard">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section id="preview" className="workspace">
        <div className="workspaceTop">
          <div>
            <span className="label">Target URL</span>
            <h2>Choose the surface behavior</h2>
            <p>
              Start from a URL, then decide what kind of motion language that page should
              inherit when it becomes alive.
            </p>
          </div>
          <UrlCaptureForm url={url} onChange={setUrl} />
        </div>

        <div className="urlRibbon">
          <span className="urlDot" />
          <strong>{url}</strong>
        </div>

        <div className="workspaceGrid">
          <section className="panelGrid">
            {starterPanels.map((panel, index) => (
              <SurfacePanel
                key={panel.id}
                panel={panel}
                index={index}
                active={panel.id === activePanel}
                onSelect={setActivePanel}
              />
            ))}
          </section>

          <aside className="detailCard">
            <span className="label">Selected Motion</span>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>

            <div className="detailPreview">
              <div className="detailOrb" />
              <div className="detailSurface">
                <span />
                <span />
                <span />
              </div>
            </div>

            <ul>
              {selected.effects.map((effect) => (
                <li key={effect}>{effect}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
