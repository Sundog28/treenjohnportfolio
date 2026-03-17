import React from "react";

export default function CyberBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="cyber-bg">
        <div className="cyber-noise" />
        <div className="cyber-grid" />
        <div className="cyber-scanlines" />
        <div className="cyber-lines" />
        <div className="cyber-orb one" />
        <div className="cyber-orb two" />
        <div className="cyber-orb three" />
        <div className="cyber-beam hidden md:block" />
        <div className="cyber-ring hidden md:block" />
      </div>
    </div>
  );
}