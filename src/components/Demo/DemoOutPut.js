import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutPut = (props) => {
  console.log("demoOutPut");
  return <MyParagraph>{props.show ? "this is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutPut);
