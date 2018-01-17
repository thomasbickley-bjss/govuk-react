import React from "react";
import ReactDOM from "react-dom";
import Radio from "./";

describe("Radio", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Radio radioName="example">Example</Radio>, div);
  });
});
