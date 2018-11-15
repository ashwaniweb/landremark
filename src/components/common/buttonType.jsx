import React from "react";
import { Button } from "react-bootstrap";
const ButtonType = ({ text, ...props }) => {
  return <Button {...props}>{text}</Button>;
};

export default ButtonType;
