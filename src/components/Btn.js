import React from "react";
import { Button } from "react-bootstrap";
export default function Btn(props) {
  let { title1, title2 } = props;
  return (
    <div className="profile-custom-btn">
      <Button className="blue-linkedin m-2">{title1}</Button>
      <Button variant="outline-secondary m-2">{title2}</Button>
    </div>
  );
}
