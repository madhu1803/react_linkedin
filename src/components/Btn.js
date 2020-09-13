import React from "react";
import { Button } from "react-bootstrap";
export default function Btn(props) {
  let { title } = props;
  return <Button className="profile-custom-btn">{title}</Button>;
}
