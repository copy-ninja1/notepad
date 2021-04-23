import React, { Component, Fragment } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import "@mdi/font/css/materialdesignicons.min.css";
import { Link } from "react-router-dom";
import { useParams, useLocation, useHistory } from "react-router-dom";

let AppHeader = styled.div({
  position: "fixed",
  width: "100vw",
  // padding: "10px",
  color: "white",
  fontWeight: 800,
  fontSize: 30,
  backgroundColor: "rgb(21, 32, 43)",
});

function _route(Component) {
  return function WrappedComponent(props) {
    const params = useParams();
    const path = useLocation();
    const history = useHistory();

    return (
      <Component
        {...props}
        id={params.id}
        path={path.pathname}
        history={history}
      />
    );
  };
}
function AppTitle(props) {
  let { path, id } = props;
  return (
    <Link to="/">
      {path !== "/note/new" && !id ? (
        // plaus icon
        <Fragment> NotePad</Fragment>
      ) : id && path !== "/note/new" && path.includes("edit") ? (
        // pen icon
        <Fragment>Edit Note</Fragment>
      ) : path === "/note/new" && !id ? (
        <Fragment> New Note</Fragment>
      ) : (
        <Fragment> NotePad</Fragment>
      )}
    </Link>
  );
}
function BackButton({ path, goBack }) {
  return path !== "/" ? (
    <button
      onClick={goBack}
      className={
        css`
          float: left;
          font-size: 20px;
        ` + " btn btn-shadow"
      }
    >
      <i className="mdi mdi-chevron-left"></i>
    </button>
  ) : (
    <Fragment></Fragment>
  );
}

class Layout extends Component {
  render() {
    let { path, id, history } = this.props;
    // console.log("path : ", path, path != "/note/new");
    const goBack = () => {
      if (path !== "/") {
        history.goBack();
      }
    };

    return (
      <div>
        <AppHeader>
          <div
            className={
              css`
                padding: 10px;
              ` + " wrapper"
            }
          >
            <BackButton path={path} goBack={goBack}></BackButton>
            <AppTitle path={path} id={id}></AppTitle>

            {path !== "/note/new" && !id ? (
              // plaus icon
              <Link to="/note/new">
                <span
                  className={css`
                    float: right;
                    fontsize: 20;
                  `}
                >
                  <i className="mdi mdi-plus"></i>
                </span>
              </Link>
            ) : id && path !== "/note/new" && !path.includes("edit") ? (
              // pen icon
              <Link to={`/note/${id}/edit`}>
                <span
                  className={css`
                    float: right;
                    fontsize: 20;
                  `}
                >
                  <i className="mdi mdi-pen"></i>
                </span>
              </Link>
            ) : (
              <Fragment></Fragment>
            )}
          </div>
        </AppHeader>
        <div
          className={
            css`
              padding-top: 60px;
            ` + " wrapper"
          }
        >
          {this.props.children}
        </div>
        <div>{/*  */}</div>
      </div>
    );
  }
}

export default _route(Layout);
