import styled from "@emotion/styled";
import { css } from "@emotion/css";

import { Component } from "react";
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
class Note extends Component {
  render() {
    return (
      <div
        className={css`
          padding: 10px;
        `}
      >
        <TextBoard>good morning everybody</TextBoard>
        <TextBoard body>good morning everybody</TextBoard>
      </div>
    );
  }
}

export default Note;
