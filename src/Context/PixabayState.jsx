import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
  const [imgData, setImgData] = useState([]);
  const [query,setQuery]=useState('london');

  const api_key = "49828126-a8bc78ba392294ce41724fc10";

  useEffect(() => {
    const fetch_data = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true`
      );
      const data = await api.json();
      console.log(data);
      setImgData(data.hits)
    };
    fetch_data();
  }, [query]);
  const fetchImageByCategory=async(cat)=>{
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${(cat)}&image_type=photo&pretty=true`
    );
    const data = await api.json();
    console.log(data);
    setImgData(data.hits)

  }
  return (
    <PixabayContext.Provider value={{imgData,fetchImageByCategory ,setQuery}}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
