import React, { useEffect, useState } from "react";

const App = () => {
  const [images, setImages] = useState(null);
  const [imageNumber, setImageNumber] = useState(0)

  const getData = async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=10",
    );
    const data = await response.json();
    return data;
  };
  useEffect(() => {
    async function fetch() {
      const result = await getData();
      console.log(result);
      setImages(result);
    }
    fetch();
  }, []);

  function forward(){
    if (images.length -1 == imageNumber ) {
      setImageNumber(0)
      return
    }
    else setImageNumber(prev => prev+1)
  }

  function previous(){
    if (imageNumber === 0 ) {
      setImageNumber(images.length - 1)
      return
    }
    else setImageNumber(prev => prev-1)
  }

  return (
    <div>
      <h1>Images Loaded</h1>
      <button onClick={forward}>Next</button>
      <button onClick={previous}>Prev</button>
      {
        images
    ? images.map((data, index) => {
      // console.log(index)
        return <img style={{height:300, display : `${index === imageNumber ? "block" : "none"}`}} key={index} src={`${data.download_url}`} alt="" />;
      })
    : "Loading"
      }
    </div>
  )
};

export default App;
