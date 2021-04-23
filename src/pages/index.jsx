// import React from "react";
import { css } from "@emotion/css";
import Card, { CardAction, CardSection } from "../components/Card";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { __notes } from "../store/note/state";

export default function LandingPage() {
  const [notes, setNewNote] = useRecoilState(__notes);

  function deleteNote(id) {
    let filteredNotes = notes.filter((val) => val.id !== id);
    setNewNote(filteredNotes);
  }
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
              <div
                key={index}
                className={css`
                  margin-bottom: 10px;
                `}
              >
                <Card>
                  <Link
                    className={css`
                      width: 100%;
                    `}
                    to={`/note/${val.id}`}
                  >
                    <CardSection note={val}></CardSection>
                  </Link>
                  <CardAction>
                    <button
                      onClick={(id) => deleteNote(val.id)}
                      className={
                        css`
                          font-size: 14px;
                        ` + " btn"
                      }
                    >
                      <i className="mdi mdi-delete"></i>Delete
                    </button>
                  </CardAction>
                </Card>
              </div>
            );
          })}
        </>
      ) : (
        <div
          className={css`
            color: #f3f5f7;
            padding-top: 30px;
          `}
        >
          <div
            className={css`
              font-size: 50px;
            `}
          >
            <i className="mdi mdi-note"></i>
          </div>
          <div> sorry!</div>
          You have not writen any note
          <p
            className={css`
              color: #e5f2ffc4;
              font-size: 14px;
            `}
          >
            click the plus (+) icon to make a note
          </p>
        </div>
      )}
    </div>
  );
}

// LandingPage.DefualtLayout = DefualtLayout;
