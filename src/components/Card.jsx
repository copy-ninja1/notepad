import styled from "@emotion/styled";
import { css } from "@emotion/css";

let CardBox = styled.div({
  //   border: "1px solid red",
  backgroundColor: "rgb(25, 39, 52)",
  minHeight: "20px",
  borderRadius: 8,
  color: "#f3f5f7",
  cursor: "pointer",
  textAlign: "left",
  display: "block",
});
let Section = styled.div({
  padding: 10,
});
let CardTitle = styled.div({
  fontSize: "17px",
  fontWeight: "700",
  textTransform: "capitalize",
});
let CardBody = styled.div({
  fontSize: "15px",
  fontWeight: "400",
  padding: "10px 0px 0px 0px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});
let CardDate = styled.div({
  color: "rgb(136, 153, 166)",
  fontSize: "13px",
  paddingTop: 10,
});
let Action = styled.div({
  width: "100%",
});
export default function Card(props) {
  return <CardBox className="">{props.children}</CardBox>;
}

export function CardSection(props) {
  let { title, message, createdAt } = props.note;

  return (
    <Section>
      <CardTitle>{title}</CardTitle>
      <CardBody>{message} </CardBody>

      <CardDate>{createdAt}</CardDate>
    </Section>
  );
}

export function CardAction(props) {
  return (
    <Action>
      <div
        // className={css`
        //   align-content: left;
        // `}
        className={css`
          padding: 10px;
          height: auto;
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          border-top: 1px solid #223242;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
        `}
      >
        {props.children}
      </div>
    </Action>
  );
}
