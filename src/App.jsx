import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import MakeCard from "./components/MakeCard/makeCard";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleImageClick = (img) => {
    setSelectedTemplate(img);
    setShowPopup(true);
  }

  return (
    <>
    <div className="App">
      
      <Header />
      <Banner onImageClick= {handleImageClick} />
      <Footer />

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ✖
            </button>
            <MakeCard selectedTemplate = {selectedTemplate} />
          </div>
        </div>
      )}
    </div>
    </>
  );
}
