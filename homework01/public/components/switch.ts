import React from "../lib/react.js";
const { createElement: h } = React;

export default function SwitchComponent(): React.ReactElement {
  return h(React.Fragment, null, h("label", { htmlFor: "toggle", className: "sr-only" }, "토글버튼"), h("input", { type: "checkbox", id: "toggle", className: "toggle-button" }));
}
