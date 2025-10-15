import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-2">404</h2>
      <p className="text-white/70 mb-4">That page doesn't exist.</p>
      <Link className="btn btn-primary" to="/">Go Home</Link>
    </section>
  );
}
