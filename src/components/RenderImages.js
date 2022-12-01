import ImageWrap from "./ImageWrap";
import "./RenderImages.css";


export default function RenderImages(props) {
  const {response, addBookmark} = props;

  const arr1 = response.results.slice(0, 9);
  const arr2 = response.results.slice(10,19);
  const arr3 = response.results.slice(20);
  
  return (
    <div className="main-image-container">
    <div className="image-container">
      {arr1.map(image => {
        return (
          <ImageWrap image={image} addBookmark={addBookmark} key={image.id}/>
        );
      })}
    </div>
    <div className="image-container">
      {arr2.map(image => {
        return (
          <ImageWrap image={image} addBookmark={addBookmark} key={image.id}/>
        );
      })}
    </div>
    <div className="image-container">
      {arr3.map(image => {
        return (
          <ImageWrap image={image} addBookmark={addBookmark} key={image.id}/>
        );
      })}
    </div>
    </div>
  );
}
