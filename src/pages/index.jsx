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
        padding: 0;
        height: 100%;
      `}
    >
      {notes.length > 0 ? (
        <>
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
        </>
      ) : (
        <p
          className={css`
            color: #f3f5f7;
          `}
        >
          No note, create one
        </p>
      )}
    </div>
  );
}

// LandingPage.DefualtLayout = DefualtLayout;
