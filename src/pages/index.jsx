// import React from "react";
import DefualtLayout from "../layout/defualtLayout";
import { css } from "@emotion/css";
import Card from "../components/Card";

export default function LandingPage() {
  return (
    <DefualtLayout>
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
    </DefualtLayout>
  );
}

// LandingPage.DefualtLayout = DefualtLayout;
