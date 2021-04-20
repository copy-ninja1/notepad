// import React from "react";
import { css } from "@emotion/css";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import noteState from "../store/note/state";
import noteSelector from "../store/note/selector";

export default function LandingPage() {
  // const [notes, setNotes] = useState([]);
  const notes = useRecoilValue(noteSelector);
  // console.log(notes);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   setNotes(genaratefakeNotes());
  // }, []);

  return (
    <div
      className={css`
        padding: 0 12px;
      `}
    >
      {notes.map((val, index) => {
        return (
          <Link key={index} to={`/note/${index}`}>
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
