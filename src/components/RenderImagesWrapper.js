import RenderImages from "./RenderImages";

export default function RenderImagesWrapper({response, addBookmark}) {
  return (
    <>
      {response.results !== undefined && <RenderImages response={response} addBookmark={addBookmark} />}
      </>
  );
}
