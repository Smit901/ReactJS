import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";

const ACCESS_KEY = "S3Vl3noauzyNpQBxwhCSpPi61VLTs-NFYZYIOdiDmnc";

const SearchUnsplash = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  useEffect(() => {
    const searchImages = async (query) => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              client_id: ACCESS_KEY,
              query: search,
              per_page: 30, // Number of images per page
            },
          }
        );

        const images = response.data.results;
        // Process and use the returned images
        setImages(images);
        setLoading(false);
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
          !loading ? (
            images.map((photo) => (
              <img
                key={photo.id}
                src={photo.urls.small}
                alt={photo.alt_description}
                className="photo-item"
                onClick={() => openImageInNewTab(photo.urls.regular)}
              />
            ))
          ) : (
            <center>Loading...</center>
          )
        ) : (
          <center>data not found...</center>
        )}
      </div>
    </div>
  );
};

export default SearchUnsplash;
