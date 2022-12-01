import {useState, useEffect} from "react";
import ImageWrap from "./ImageWrap";


export default RenderImages(props) {
  const {response} = props;

  return (
    <div className="image-container">
      {response.results.map(image => {
        return (
          <ImageWrap image={image}/>
        );
      })}
    </div>
  );
}
