import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import html2canvas from "html2canvas";
import "./makecard.css"


const MakeCard = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [qrValue, setQrValue] = useState("");
  const COMPANY_EMAIL = "dungbede@gmail.com";
  // Tạo 20 template từ picsum
  const templates = Array.from({ length: 20 }, (_, i) =>
    `/templates/template${i+1}.JPG`
  );

  const handleChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);

    // QR hiện tại chỉ encode chuỗi ngắn gọn (sẽ thay bằng link sau này)
    const shortLink = `https://mycard.app/u/${btoa(
      newForm.phone || "guest"
    )}`;
    setQrValue(shortLink);
  };

  // Hàm tải card về PNG
  const downloadCard = async () => {
    const card = document.querySelector(".preview-card"); // chọn element
    if (!card) return;

    // lưu các style
// const oldStyles = {
//   background: card.style.background,
//   color: card.style.color,
// };

// // override tạm thời
// card.style.background = "#fff";
// card.style.color = "#000";

// // nếu có overlay, shadow, filter, disable tạm
// const overlays = card.querySelectorAll("*");
// overlays.forEach(el => {
//   el.dataset.oldStyle = el.style.cssText; // lưu lại
//   el.style.filter = "none";
//   el.style.background = el.style.backgroundColor || "#fff";
//   el.style.color = el.style.color || "#000";
//   el.style.boxShadow = "none";
//   el.style.textShadow = "none";
// });

// render
const canvas = await html2canvas(card, { useCORS: true });
const dataURL = canvas.toDataURL("image/png");

// // restore lại style cũ
// card.style.background = oldStyles.background;
// card.style.color = oldStyles.color;
// overlays.forEach(el => el.style.cssText = el.dataset.oldStyle);

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `${form.name || "namecard"}.png`;
    link.click();
  };

  return (
    <div className="make-card">
      <h2>Tự Thiết Kế Danh Thiếp</h2>
      <div className="make-card-container">
        {/* Form bên trái */}
        <div className="left">
          <form className="info-form" onSubmit={(e) => e.preventDefault()}>
            <label>Tên</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nhập tên khách hàng"
            />

            <label>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="0123 456 789"
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email || COMPANY_EMAIL}
              onChange={handleChange}
              placeholder="email@example.com"
              
            />
          </form>
        </div>

        {/* Preview bên phải */}
        <div className="right">
          <div className="preview-area">
            <h3>Preview Namecard</h3>
            <div className="preview-card">
              {selectedImage && (
                <img
                    src={selectedImage}
                    alt="Template"
                    className="show"
                    crossOrigin="anonymous"
                  />

              )}

              {/* Overlay text */}
              <div className="card-overlay">
                <h4>{form.name || "Tên Khách Hàng"}</h4>
                <p>{form.phone || "0123 456 789"}</p>
              </div>

              {/* QR code */}
              <div className="qr-box">
                {qrValue ? (
                  <QRCodeCanvas value={qrValue} size={160} />
                ) : (
                  <span className="qr-placeholder">QR sẽ hiển thị ở đây</span>
                )}
              </div>
            </div>

            {/* Template buttons */}
            <div className="template-buttons">
              <h4>Chọn mẫu</h4>
              <div className="btn-list">
                {templates.map((img, idx) => (
                  <button
                    type="button"
                    key={idx}
                    className={selectedImage === img ? "active" : ""}
                    onClick={() => setSelectedImage(img)}
                  >
                    Mẫu {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Download button */}
            <div className="download-btn">
              <button type="button" onClick={downloadCard}>
                📥 Tải Namecard
              </button>
            </div>

            {/* CTA */}
            <div className="contact-cta">
              <p className="lead">
                Để sở hữu chiếc namecard trọn vẹn, hãy liên hệ với chúng tôi
                ngay.
              </p>
              <div className="contact-actions">
                <a href="tel:0123456789" className="btn cta">
                  Gọi: 0123 456 789
                </a>
                <a href="mailto:hello@yourbrand.com" className="btn ghost">
                  Email: hello@yourbrand.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeCard;
