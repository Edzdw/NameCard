import React from "react";
import "./makecard.css"; // dùng chung CSS

export default function QrModeToggle({ qrMode, setQrMode }) {
  return (
    <div className="qr-mode-toggle">
      <button
        type="button"
        className={qrMode === "offline" ? "active" : ""}
        onClick={() => setQrMode("offline")}
      >
        QR Offline
      </button>
      <button
        type="button"
        className={qrMode === "online" ? "active" : ""}
        onClick={() => setQrMode("online")}
      >
        QR Online
      </button>
    </div>
  );
}
