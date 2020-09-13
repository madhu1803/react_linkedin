import React from "react";

export default function Video(props) {
  let { src, title, viewers } = props;
  return (
    <div className="profile-video-container mb-2 mt-3">
      <div class="embed-responsive embed-responsive-16by9 video-content">
        <iframe
          class="embed-responsive-item"
          src={src}
          allowfullscreen
        ></iframe>
      </div>
      <small className="video-txt ml-2">
        <strong>{title}</strong>
        <br />
        <br />
        <br />
        <small className="text-muted">Viewers {viewers}</small>
      </small>
    </div>
  );
}
