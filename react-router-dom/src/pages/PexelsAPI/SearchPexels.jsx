import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";

const ACCESS_KEY = "fV6QGDa6fG3RDakQHzG9rDgM3ERJ6rFMPogZ0G4Jy9pXUcxblon6swa3";

const SearchPexels = () => {
  const [images, setImages] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  useEffect(() => {
    const searchImages = async (query) => {
      try {
        const response = await axios.get("https://api.pexels.com/v1/search", {
          headers: {  
            Authorization: ACCESS_KEY,
          },
          params: {
            query: search,
            per_page: 30, // Number of images per page
          },
        });

        console.log(response);
        const images = response.data.photos;
        // Process and use the returned images
        setImages(images);
        console.log(images);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };

    searchImages();
  }, [search]);


  return (
    <div className="photo-gallery">
      <div className="default__photos">
        {!isEmpty(images) ? (
          images.map((photo) => (
            <img
              key={photo.id}
              src={photo.src.medium}
              alt={photo.alt_description}
              className="photo-item"
              onClick={() => openImageInNewTab(photo.src.original)}
            />
          ))
        ) : (
          <center>data not found...</center>
        )}
      </div>
    </div>
  );
};

export default SearchPexels;
