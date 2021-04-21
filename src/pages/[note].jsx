import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { __notes } from "../store/note/state";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

// styles
let TextBoard = styled.div((props) => ({
  backgroundColor: "rgb(25, 39, 52)",
  padding: 10,
  borderRadius: 8,
  border: "1px solid rgb(28 47 60 / 35%)",
  color: "#f3f5f7",
  textAlign: "left",
  marginTop: props.body ? 30 : null,
  minHeight: props.body ? "calc(100vh / 2)" : null,
}));

export function Note() {
  const { id } = useParams();
  const [currentNote, setCurrentNote] = useState({});

  const [notes] = useRecoilState(__notes);

  const findCurrentNote = () => {
    let currentNote =
      notes.length > 0
        ? notes.find((val, indx) => {
            return val.id === id;
          })
        : null;
    // set current note
    setCurrentNote(currentNote);
  };
  useEffect(() => {
    findCurrentNote();
  });
  return (
    <div
      className={css`
        padding: 10px;
      `}
    >
      <TextBoard>{currentNote.title}</TextBoard>
      <TextBoard body>{currentNote.message}</TextBoard>
    </div>
  );
}

export default Note;
