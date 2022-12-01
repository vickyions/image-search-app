import ImageWrap from "./ImageWrap";
import "./RenderImages.css";


export default function RenderBookmark(props) {
  const {bookmark} = props;

  const arr = bookmark;
  
  return (
    <div className="main-image-container">
    <div className="image-container2">
      {arr.map(image => {
        return (
          <ImageWrap image={image} key={image.id}/>
        );
      })}
    </div>
    </div>
  );
}
