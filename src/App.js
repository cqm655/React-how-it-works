import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutPut from "./components/Demo/DemoOutPut";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowTogle, setAllowToggle] = useState(false);
  console.log("app running");
  const toggleParagraphHandler = useCallback(() => {
    //store a function and reuse, so React can compare not just props but obj. With these if state doesnt change, function is not executed on re-render
    if (allowTogle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowTogle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutPut show={false} />
      <Button onClick={allowToggleHandler}>Allow</Button>
      <Button onClick={toggleParagraphHandler}>Click Me</Button>
    </div>
  );
}

export default App;
