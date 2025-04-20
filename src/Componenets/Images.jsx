import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'
const Images = () => {
   const {imgData}= useContext(PixabayContext);
  return (

    <div className="container my-5">

<div className="flex">
      {
        imgData.map((image)=>
        (<div key={image.id}>
          <div className="item">
        
< img src={image.largeImageURL} alt="Alt Balaji"  / >

          </div>
        </div>)

         ) 
      }
    </div>
    </div>
    
  )
}

export default Images
