import { useState } from "react";
import "./banner.css"

export default function Banner({ onImageClick }) {
  // Template image Sẵn có 
  const templates = Array.from({length:10}, (_,i) =>
     `/templates/template${i+ 1}.jpg`
  );

  // mảng marquee ( có thể lặp lại templates)

  const rows = [
    templates,
    [...templates].reverse(),
  ];


  return (
    <section className="banner">
      {/* <div className="banner-content">
        <h1>Company Name</h1>
        <p>Điền thông tin liên hệ và chọn mẫu — xem trước thẻ có gắn QR lưu danh bạ.</p>
      </div> */}

      {/* Hàng ảnh 1 */}
        <div className="marquee marquee-left">
          <div className="marquee-content">
            {templates.map((img, idx) => (
              <img
                key={`row1-${idx}`}
                src={img}
                alt={`Template ${idx + 1}`}
                onClick={() => onImageClick(img)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

      {/* Hàng ảnh 2 */}
      <div className="marquee marquee-right">
        <div className="marquee-content">
            {templates.map((img, idx) => (
              <img
                key={`row1-${idx}`}
                src={img}
                alt={`Template ${idx + 1}`}
                onClick={() => onImageClick(img)}
                style={{ cursor: "pointer" }}
              />
            ))}
        </div>
      </div>

            {/* Hàng ảnh 3 */}
      <div className="marquee marquee-left">
        <div className="marquee-content">
            {templates.map((img, idx) => (
              <img
                key={`row1-${idx}`}
                src={img}
                alt={`Template ${idx + 1}`}
                onClick={() => onImageClick(img)}
                style={{ cursor: "pointer" }}
              />
            ))}
        </div>
      </div>

            {/* Hàng ảnh 4 */}
      <div className="marquee marquee-right">
        <div className="marquee-content">
            {templates.map((img, idx) => (
              <img
                key={`row1-${idx}`}
                src={img}
                alt={`Template ${idx + 1}`}
                onClick={() => onImageClick(img)}
                style={{ cursor: "pointer" }}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
