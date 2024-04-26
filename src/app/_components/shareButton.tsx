"use client";
import { useState } from "react";

export default function ShareButton() {
  const [ tooltipText, setTooltipText ] = useState("copy");
  return (
    <div className="tooltip" data-tip={tooltipText}>
      <button className="btn btn-neutral" onClick={async () => {
        await navigator.clipboard.writeText(window.location.href);
        setTooltipText("copied!");
      }}>
        Share
      </button>
    </div>
  );
}