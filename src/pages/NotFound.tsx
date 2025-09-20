import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-[var(--text)]/80">That page went exploring.</p>
      <Link className="btn btn-primary mt-4" to="/">Go Home</Link>
    </div>
  );
}
