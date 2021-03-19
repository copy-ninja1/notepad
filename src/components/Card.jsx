import styled from "@emotion/styled";

let CardBox = styled.div({
  //   border: "1px solid red",
  backgroundColor: "rgb(25, 39, 52)",
  minHeight: "20px",
  padding: 10,
  borderRadius: 8,
  color: "#f3f5f7",
  cursor: "pointer",
  textAlign: "left",
});
let CardTitle = styled.div({
  fontSize: "17px",
  fontWeight: "700",
  textTransform: "capitalize",
});
let CardBody = styled.div({
  fontSize: "15px",
  fontWeight: "400",
  padding: "10px 0px",
});
let CardDate = styled.div({
  color: "rgb(136, 153, 166)",
  "font-size": "13px",
});

export default function Card() {
  return (
    <CardBox className="">
      <CardTitle>title</CardTitle>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
      </CardBody>
      <CardDate>19th march, 2021</CardDate>
    </CardBox>
  );
}
