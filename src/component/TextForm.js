import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("write your text here");
  // text = "hi am there" --this is the wrong syntax to change the text

  const changeToUpper = () => {
    // console.log("change to upper was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
  };

  const changeToLower = () => { //this will help to change to lower case
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => { //this will clear the text
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    //most important concept for event handling
    // console.log("handle on chnage on work")
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label">{props.heading}</label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={changeToUpper}>
        Convert to upper case
      </button>
      <button className="btn btn-primary  mx-2 " onClick={changeToLower}>
        Convert to upper case
      </button>
      <button className="btn btn-primary  mx-2 " onClick={clearText}>
        Clear Text
      </button>
      <div className="conatiner">
        <h3>your text summary</h3>
        <p>{text !== "" ? text.split(" ").length : 0} words</p>
        <p> {text.length} characters</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

TextForm.prototype = {
  heading: PropTypes.string,
};

TextForm.defaultProps = {
  heading: "plz enter text",
};
