import React from "react";
import { string } from "prop-types";
import classNames from "classnames";
import "./Button.scss";
var propTypes = {
  text: string.isRequired,
  className: string
};
var defaultProps = {
  element: "button",
  type: "button"
};

var Button = function Button(_ref) {
  var text = _ref.text,
      className = _ref.className;
  var componentClassNames = classNames("rs-btn", className);
  return React.createElement("button", {
    className: componentClassNames
  }, text);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;