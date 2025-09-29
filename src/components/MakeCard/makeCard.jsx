import React, { use, useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { HexColorPicker } from "react-colorful";
import FormOffline from "./formOffline";
import FormOnline from "./formOnline";
import QrModeToggle from "./qrModeToggle";
import html2canvas from "html2canvas";
import "./makecard.css"


const MakeCard = ({selectedTemplate}) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [qrMode, setQrMode] = useState("offline");
  const [onlineForm, setOnlineForm] = useState({
    name:"",
    phone:"",
  
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [qrValue, setQrValue] = useState("");
  const [textColor, setTextColor] = useState("#fffff");

  
  // Tạo 20 template từ picsum
  const templates = Array.from({ length: 20 }, (_, i) =>
    `/templates/template${i+1}.jpg`
  );

  
  // Khi banner click template => update selected image
  
  useEffect(() => {
    setSelectedImage(selectedTemplate);
  }, [selectedTemplate]);

  const handleChange = (e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };


  // Hàm tải card về PNG
  const downloadCard = async () => {
    const card = document.querySelector(".preview-card"); // chọn element
    if (!card) return;


const canvas = await html2canvas(card, { useCORS: true });
const dataURL = canvas.toDataURL("image/png");

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
              {/* Toggle QR mode */}
              <QrModeToggle qrMode={qrMode} setQrMode={setQrMode} />
              {/* render form*/}
              <div className="form-wrapper">
                  {qrMode === "offline" ? (
                    <FormOffline form={form} handleChange={handleChange} />
                  ) : (
                    <FormOnline onlineForm={onlineForm} setOnlineForm={setOnlineForm} />
                  )}
              </div>

              {/* Color Picker giữ nguyên */}
              <div className="color-picker">
                <label>Chọn màu chữ</label>
                <div className="color-options">
                  {["#000000", "#fbcc16", "#0077ff", "#ff0000", "#00cc88", "#facc15"].map(
                    (c) => (
                      <button
                        key={c}
                        onClick={() => setTextColor(c)}
                        style={{ background: c }}
                        className={`color-swatch ${textColor === c ? "active" : ""}`}
                      />
                    )
                  )}
                </div>
                <HexColorPicker
                  color={textColor}
                  onChange={setTextColor}
                  style={{ width: "100%" }}
                />
              </div>
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
                  <div className="card-overlay" style={{color: textColor}}>
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
                  <div className="template-select">
                    <label htmlFor="template">Chọn mẫu:</label>
                    <select
                      id="template"
                      value={selectedImage || ""}
                      onChange={(e) => setSelectedImage(e.target.value)}
                    >
                      <option value="" disabled>-- Chọn mẫu --</option>
                      {templates.map((img, idx) => (
                        <option key={idx} value={img}>
                          Mẫu {idx + 1}
                        </option>
                      ))}
                    </select>
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
