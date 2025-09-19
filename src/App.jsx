import { useState } from "react";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import MakeCard from "./components/MakeCard/MakeCard";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Header />
      <Banner onImageClick={() => setShowPopup(true)} />
      <Footer />

      {showPopup && (
        <div className="popup-overlay"s>
          <div className="popup-content">
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ✖
            </button>
            <MakeCard />
          </div>
        </div>
      )}
    </>
  );
}
