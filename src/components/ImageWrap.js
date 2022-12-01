import "./ImageWrap.css";
import { useLocation } from "react-router-dom";

export default function ImageWrap(props) {
  const { image, addBookmark} = props;
  const location = useLocation();

  return (
    <div className="image-card-wrapper">
      <div className="image-wrapper">
        <img src={image.urls.small} alt="" />
      </div>
      {location.pathname !== "/bookmarks" && <div className="bookmarker" onClick={(e) => addBookmark(image)}>B</div>}
    </div>
  );
}
