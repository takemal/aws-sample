import React from 'react'

export const ImageGallery = ({ fetchData }) => {
  return (
    <div>
      <div className="pixabay-images-wrapaaper">
        {fetchData.map((data) => (
          <div className="pixabay-image" key={data.id}>
            <a href={data.pageURL} target="blank">
            <img src={data.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
