import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "lodash";

const API_KEY = "e8TWKnDPcVJ2OkIMjmAKLKxDzRcU7D3STYyxaECJ";

const Nasa = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchedImages = searchParams.get("search");
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://images-api.nasa.gov/search", {
          params: {
            q: searchedImages,
            // per_page: 30,
          },
          headers: {
            Authorization: API_KEY,
          },
        });

        const items = response.data.collection.items;
        const images = items.map((item) => {
          return {
            title: item.data[0].title,
            description: item.data[0].description,
            imageUrl: item.links?.[0]?.href,
          };
        });

        setImages(images);
        // Process and use the retrieved images
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, [searchedImages]);

  const handleSearch = () => {
    if (!search) return;
    navigate(`?search=${search}`);
    // setSearch("");
  };

  return (
    <div className="container">
      <header>
        <div>
          <h4>Nasa</h4>
        </div>
        <div>
          <input
            type="text"
            placeholder="search images..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          &nbsp;&nbsp;&nbsp;
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </header>

      {searchedImages ? (
        !isEmpty(images) ? (
          <div className="photo-gallery">
            <div className="default__photos">
              {images.map((photo) => (
                <img
                  key={photo.imageUrl}
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="photo-item"
                />
              ))}
            </div>
          </div>
        ) : (
          <center>no images found...</center>
        )
      ) : (
        <center>search for images...</center>
      )}
    </div>
  );
};

export default Nasa;
