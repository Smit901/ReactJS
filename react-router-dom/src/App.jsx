import Header from "./components/Header";

import { Routes, Route, Navigate } from "react-router-dom";

// pages
import Unsplash from "./pages/Unsplash/Unsplash";
import Pexels from "./pages/PexelsAPI/Pexels";
import Nasa from "./pages/NasaAPI/Nasa";
import AppLayout from "./AppLayout";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/Unsplash" />} />
          <Route path="Unsplash" element={<Unsplash />} />
          <Route path="Pexels" element={<Pexels />} />
          <Route path="Nasa" element={<Nasa />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
