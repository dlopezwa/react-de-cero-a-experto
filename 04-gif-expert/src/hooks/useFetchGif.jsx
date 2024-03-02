import { useState } from "react";
import { getGifs } from "../apis/apiGifs";
import { useEffect } from "react";

export const useFetchGif = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        console.log(newImages);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

  return {
    images: images,
    isLoading: isLoading
  };
};
