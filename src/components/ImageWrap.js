import { useState, useEffect } from "react";

export default function ImageWrap(props) {
  const { image } = props;

  return (
    <div className="image-card-wrapper">
      <div className="image-wrapper">
        <img src={image.urls.small} alt="" />
      </div>
    </div>
  );
}
