import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./userPage.css";

export default function UserPage() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const BASE_URL = "http://localhost:4000"

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/cards/${id}`);
        const data = await res.json();
        setCard(data);
      } catch (err) {
        console.error("Lỗi tải user:", err);
      }
    };
    fetchCard();
  }, [id]);

  if (!card) return <p className="loading">Đang tải...</p>;

  // Hàm tạo vCard và download
  const downloadVCard = () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${card.name || ""}
TEL;TYPE=CELL:${card.phone || ""}
TEL;TYPE=WORK:${card.contactPhone || ""}
EMAIL;TYPE=INTERNET:${card.email || ""}
ADR;TYPE=WORK:;;${card.companyAddress || ""};;;;
ADR;TYPE=HOME:;;${card.address || ""};;;;
END:VCARD
    `.trim();

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${card.name || "contact"}.vcf`;
    link.click();
  };

  return (
    <div className="userpage">
      <div className="profile-card">
        {/* Avatar */}
        <div className="avatar">
          {card.avatarUrl ? (
            <img src={`${BASE_URL}${card.avatarUrl}`} alt={card.name} />
          ) : (
            <div className="avatar-placeholder">👤</div>
          )}
        </div>

        {/* Name */}
        <h2 className="username">{card.name}</h2>

        {/* Info list */}
        <div className="info-list">
          {card.phone && (
            <div className="info-item">
              <span className="icon">📞</span>
              <a href={`tel:${card.phone}`}>{card.phone}</a>
            </div>
          )}
          {card.email && (
            <div className="info-item">
              <span className="icon">✉️</span>
              <a href={`mailto:${card.email}`}>{card.email}</a>
            </div>
          )}
          {card.address && (
            <div className="info-item">
              <span className="icon">🏠</span>
              <span>{card.address}</span>
            </div>
          )}
          {card.companyAddress && (
            <div className="info-item">
              <span className="icon">🏢</span>
              <span>{card.companyAddress}</span>
            </div>
          )}
          {card.contactPhone && (
            <div className="info-item">
              <span className="icon">📱</span>
              <a href={`tel:${card.contactPhone}`}>{card.contactPhone}</a>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="cta-buttons">
          {card.phone && (
            <a href={`tel:${card.phone}`} className="btn call">
              Gọi ngay
            </a>
          )}
          {card.email && (
            <a href={`mailto:${card.email}`} className="btn email">
              Gửi email
            </a>
          )}
          {/* Nút download vCard */}
          <button onClick={downloadVCard} className="btn email" style={{background: "#ff7f50"}}>
            Download vCard
          </button>
        </div>
      </div>
    </div>
  );
}
