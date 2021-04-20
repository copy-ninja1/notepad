// import React from "react";
import { css } from "@emotion/css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import noteSelector from "../store/note/selector";

export default function LandingPage() {
  const notes = useRecoilValue(noteSelector);

  return (
    <div
      className={css`
        padding: 0 12px;
      `}
    >
      {notes.map((val, index) => {
        return (
          <Link key={index} to={`/note/${val.id}`}>
            <div
              className={css`
                margin-bottom: 10px;
              `}
            >
              <Card note={val} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

// LandingPage.DefualtLayout = DefualtLayout;
