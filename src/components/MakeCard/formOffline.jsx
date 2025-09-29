import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function FormOffline() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Chuẩn bị vCard string
  const vcardData = `BEGIN:VCARD
VERSION:3.0
N:;${form.name};;;
FN:${form.name}
TEL:${form.phone}
EMAIL:${form.email}
END:VCARD`;

  return (
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
          value={form.email}
          onChange={handleChange}
          placeholder="email@example.com"
        />
      </form>
  );
}
