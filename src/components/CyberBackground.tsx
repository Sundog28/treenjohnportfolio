import React from "react";

export default function CyberBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="cyber-bg">
        <div className="cyber-stars" />
        <div className="cyber-noise" />
        <div className="cyber-grid" />
        <div className="cyber-scanlines" />
        <div className="cyber-lines" />
        <div className="cyber-data-stream data-stream-1" />
        <div className="cyber-data-stream data-stream-2" />
        <div className="cyber-data-stream data-stream-3" />
        <div className="cyber-orb one" />
        <div className="cyber-orb two" />
        <div className="cyber-orb three" />
        <div className="cyber-beam hidden md:block" />
        <div className="cyber-ring hidden md:block" />
        <div className="cyber-ring small hidden lg:block" />
        <div className="cyber-corner tl hidden md:block" />
        <div className="cyber-corner tr hidden md:block" />
        <div className="cyber-corner bl hidden md:block" />
        <div className="cyber-corner br hidden md:block" />
        <div className="cyber-hud-label hud-1 hidden md:block">SYSTEM ONLINE</div>
        <div className="cyber-hud-label hud-2 hidden md:block">SIGNAL LOCKED</div>
        <div className="cyber-hud-label hud-3 hidden md:block">PORTFOLIO NODE</div>
      </div>
    </div>
  );
}