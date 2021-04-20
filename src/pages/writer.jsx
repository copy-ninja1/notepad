import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { __notes, products } from "../store/note/state";
import noteSelector from "../store/note/selector";

// import { Component } from "react";
let TextBoard = styled.div((props) => ({
  backgroundColor: "rgb(25, 39, 52)",
  padding: 5,
  borderRadius: 8,
  border: "1px solid rgb(28 47 60 / 35%)",
  color: "#f3f5f7",
  textAlign: "left",
  marginTop: props.body ? 30 : null,
  minHeight: props.body ? "calc(100vh / 2)" : null,
}));
const Input = styled.input((props) => ({
  minHeight: props.body ? "calc(100vh / 2)" : null,
  backgroundColor: "inherit",
  borderRadius: "inherit",
  outline: "none",
  border: "none",
  width: "100%",
  color: "#f3f5f7",
  "&:focus": {
    border: "1px dashed #364d63",
  },
}));
const TextArea = styled.textarea((props) => ({
  minHeight: "calc(100vh / 2)",
  backgroundColor: "inherit",
  borderRadius: "inherit",
  outline: "none",
  border: "none",
  width: "100%",
  color: "#f3f5f7",
  "&:focus": {
    border: "1px dashed #364d63",
  },
}));
const Button = styled.button({
  padding: 10,
  color: "white",
  backgroundColor: "rgb(25, 39, 52)",
  outline: "none",
  border: "1px solid #4a454538",
  borderRadius: 8,
  margin: 10,
});
export default function NewNote() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const setNewNote = useSetRecoilState(__notes);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const saveNote = () => {
    // let _note = notes;
    // console.log(_note);
    if (title || message) {
      setNewNote((oldList) => {
        // debugger;
        return [...oldList, { title: title, message: message }];
      });
    }
  };

  return (
    <div
      className={css`
        padding: 10px;
      `}
    >
      <TextBoard>
        <Input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleTitleChange}
        />
      </TextBoard>
      <TextBoard body>
        <TextArea
          body
          type="text"
          name="title"
          onChange={handleMessageChange}
        />
      </TextBoard>
      <Button onClick={saveNote}>Save</Button>
    </div>
  );
}
