import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  fontSize: "30px",
  border: "1px solid blue",
  borderWidth: "10px"
}

customStyle.color = "red";

ReactDOM.render(<h1 style={customStyle}>Hello World!</h1>, document.getElementById("root"));
