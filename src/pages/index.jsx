// import React from "react";
import { css } from "@emotion/css";
import Card from "../components/Card";

export default function LandingPage() {
  return (
    <div
      className={css`
        padding: 0 12px;
      `}
    >
      {[...Array(10).keys()].map((i, val) => {
        return (
          <div
            className={css`
              margin-bottom: 10px;
            `}
            key={i}
          >
            <Card />
          </div>
        );
      })}
    </div>
  );
}

// LandingPage.DefualtLayout = DefualtLayout;
