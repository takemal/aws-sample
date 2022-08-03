import React, { useState, useRef } from 'react'
import  { ImageGallery } from './subComponent/ImageGallery';

export const Pixabay = () => {
const [fetchData,setFetchData] = useState([]);
const ref = useRef();

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(ref.current.value);
  //API用URL
  const endpointURL = `https://pixabay.com/api/?key=29014366-6abcbed861a43a488ad773570&q=${ref.current.value}&image_type=写真`
  //APIを叩く(データフェッチング)
  fetch(endpointURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.hits)
      setFetchData(data.hits)}
      );
  };

  return (
    <div>
      <div className="pixabay-container">
        <h2>My Pixabay</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="画像を探す" ref={ref} />
        </form>
        <ImageGallery fetchData={fetchData} />
      </div>
    </div>
  )
}
