import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn]= useState(false);

  function handleEvent(){
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  return (<button style={{ background: "red" }}onClick={handleEvent}>{isOn ? "ON": "OFF"}</button>);
}

export default Toggle;
