import styled from "@emotion/styled";
import { css } from "@emotion/css";

import { useState, useEffect, Fragment } from "react";
import { useRecoilState } from "recoil";
import { __notes } from "../store/note/state";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

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
const TextArea = styled.textarea({
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
});
const Button = styled.button({
  padding: 10,
  color: "white",
  background: "#33495d",
  outline: "none",
  border: "1px solid #4a454538",
  borderRadius: 8,
  margin: 10,
});
export default function NewNote() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notes, setNewNote] = useRecoilState(__notes);
  const alert = useAlert();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };
  function getDate() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let today = new Date();
    var day = today.getDate();
    let month = monthNames[today.getMonth()];
    let year = today.getFullYear();

    function ordinalSuffixOfDay(i) {
      var j = i % 10,
        k = i % 100;
      if (j === 1 && k !== 11) {
        return i + "st";
      }
      if (j === 2 && k !== 12) {
        return i + "nd";
      }
      if (j === 3 && k !== 13) {
        return i + "rd";
      }
      return i + "th";
    }

    return `${ordinalSuffixOfDay(day)} ${month}, ${year}`;
  }
  const saveNote = () => {
    // let _note = notes;
    // console.log(_note);
    if (title || message) {
      setNewNote((oldList) => {
        // debugger;
        return [
          {
            id: makeid(5),
            title: title,
            message: message,
            createdAt: getDate(),
          },
          ...oldList,
        ];
      });
      setMessage("");
      setTitle("");
      alert.show("Note saved sucessfully", {
        type: "success",
      });
    } else {
      alert.show("Sorry! can not save empty note", {
        type: "error",
      });
    }
  };
  const editNote = () => {
    if (id && (title || message)) {
      var noteIndex = notes.findIndex((val) => val.id === id);

      // let n = notes;
      var replacedNote = notes;

      var editedNote =
        replacedNote.length > 0
          ? notes.find((val) => {
              return val.id === id;
            })
          : null;

      var newReplacedNote = replacedNote.filter((val, idex) => {
        return idex !== noteIndex;
      });
      newReplacedNote.splice(noteIndex, 0, {
        id: editedNote.id,
        title: title,
        message: message,
      });

      setNewNote(newReplacedNote);
      alert.show("Note edited sucessfully", {
        type: "success",
      });
    } else {
      alert.show("Sorry! an error occured", {
        type: "error",
      });
    }
  };

  const makeid = (length) => {
    var result = [];
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result.push(
        characters.charAt(Math.floor(Math.random() * charactersLength))
      );
    }
    return result.join("");
  };
  function openedForEditing() {
    if (id && notes.length > 0) {
      let foundNote = notes.find((val) => {
        return val.id === id;
      });
      setTitle(foundNote.title);
      setMessage(foundNote.message);
      console.log("foundNote : ", title);
    }
  }
  useEffect(() => {
    openedForEditing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div
        className={css`
          padding: 10px;
        `}
      >
        <TextBoard>
          <Input
            value={title}
            type="text"
            autoComplete="off"
            placeholder="Title"
            name="title"
            onChange={handleTitleChange}
          />
        </TextBoard>
        <TextBoard body>
          <TextArea
            value={message}
            body
            autoComplete="off"
            type="text"
            name="title"
            onChange={handleMessageChange}
          />
        </TextBoard>
        <Button className="btn" onClick={!id ? saveNote : editNote}>
          Save
        </Button>
      </div>
    </Fragment>
  );
}
