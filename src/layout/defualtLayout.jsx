import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
// import { mdiPlus } from "@mdi/font/css/materialdesignicons.min.css";

let AppHeader = styled.header({
  position: "fixed",
  width: "100%",
  padding: "10px",
  color: "white",
  fontWeight: 800,
  fontSize: 30,
  backgroundColor: "rgb(21, 32, 43)",
});
class Layout extends Component {
  render() {
    return (
      <div>
        <AppHeader>Notepad</AppHeader>
        <div
          className={css`
            padding-top: 60px;
          `}
        >
          {this.props.children}
        </div>
        <div>{/*  */}</div>
      </div>
    );
  }
}

export default Layout;
