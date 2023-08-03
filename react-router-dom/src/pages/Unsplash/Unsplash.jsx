import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchUnsplash from "./SearchUnsplash";

const ACCESS_KEY = "S3Vl3noauzyNpQBxwhCSpPi61VLTs-NFYZYIOdiDmnc";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchedImages = searchParams.get("search");

  console.log(search);

  useEffect(() => {
    async function getImages() {
      try {
        const response = await axios.get("https://api.unsplash.com/photos", {
          params: {
            client_id: ACCESS_KEY,
            per_page: 30, // Number of images per page
          },
        });

        const images = response.data;
        // Process and use the returned images
        setImages(images);
        console.log(images);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    }
    getImages();
  }, []);

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  const handleSearch = () => {
    if (!search) return;
    setSearch("");
    navigate(`?search=${search}`);
  };

  return (
    <div className="container">
      <header>
        <div>
          <h4>Unsplash</h4>
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

      {!searchedImages ? (
        <div className="photo-gallery">
          <div className="default__photos">
            {images.map((photo) => (
              <img
                key={photo.id}
                src={photo.urls.small}
                alt={photo.alt_description}
                className="photo-item"
                onClick={() => openImageInNewTab(photo.urls.regular)}
              />
            ))}
          </div>
        </div>
      ) : (
        <SearchUnsplash />
      )}
    </div>
  );
};

export default Unsplash;
