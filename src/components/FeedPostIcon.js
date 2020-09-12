import React from "react";

export default function FeedPostIcons(props) {
  let { Icon, text } = props;
  return (
    <p className="mr-3">
      <Icon className="mr-1" />
      {text}
    </p>
  );
}
