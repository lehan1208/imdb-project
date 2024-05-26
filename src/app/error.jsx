"use client";

import React, { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("🚀 ~ error ~ error:", error);
  }, [error]);

  return (
    <div className="error-component text-center mt-10">
        <h1>Something went wrong. Please try again</h1>
        <button onClick={() => reset()} className="hover:text-amber-500">Retry</button>
    </div>
  );
}
