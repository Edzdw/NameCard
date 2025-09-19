import "./banner.css"

export default function Banner({ onImageClick }) {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Company Name</h1>
        <p>Điền thông tin liên hệ và chọn mẫu — xem trước thẻ có gắn QR lưu danh bạ.</p>
      </div>

      {/* Hàng ảnh 1 */}
      <div className="marquee marquee-left">
        <div className="marquee-content">
          {[11, 12, 13, 14, 15, 11, 12, 13, 14, 15].map((n) => (
            <img
              key={`row1-${n}-${Math.random()}`}
              src={`https://picsum.photos/400/220?random=${n}`}
              alt="card"
              onClick={onImageClick}
              style={{ cursor: "pointer" }}
            />          
          ))}
        </div>
      </div>

      {/* Hàng ảnh 2 */}
      <div className="marquee marquee-right">
        <div className="marquee-content">
          {[16, 17, 18, 19, 20, 16, 17, 18, 19, 20].map((n) => (
            <img
              key={`row2-${n}-${Math.random()}`}
              src={`https://picsum.photos/400/220?random=${n}`}
              alt="card"
              onClick={onImageClick}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

            {/* Hàng ảnh 3 */}
      <div className="marquee marquee-left">
        <div className="marquee-content">
          {[11, 12, 13, 14, 15, 11, 12, 13, 14, 15].map((n) => (
            <img
              key={`row1-${n}-${Math.random()}`}
              src={`https://picsum.photos/400/220?random=${n}`}
              alt="card"
              onClick={onImageClick}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>

            {/* Hàng ảnh 4 */}
      <div className="marquee marquee-right">
        <div className="marquee-content">
          {[11, 12, 13, 14, 15, 11, 12, 13, 14, 15].map((n) => (
            <img
              key={`row1-${n}-${Math.random()}`}
              src={`https://picsum.photos/400/220?random=${n}`}
              alt="card"
              onClick={onImageClick}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
