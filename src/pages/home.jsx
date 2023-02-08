import React from "react";
import ResponsiveGrid from "../components/grid";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div style={{ margin: "auto 2em" }}>
        <ResponsiveGrid />
      </div>
    </div>
  );
}
