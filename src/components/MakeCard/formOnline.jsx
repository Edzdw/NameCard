import { useState } from "react";

export default function FormOnline({ setQrValue }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    contactPhone: "",
    companyAddress: "",
    email: ""
  });
  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    Object.keys(form).forEach((key) => fd.append(key, form[key]));
    if (avatar) fd.append("avatar", avatar);

    try {
      const res = await fetch("http://localhost:4000/api/cards", {
        method: "POST",
        body: fd
      });
      const data = await res.json();

      // server trả về { id, url }
      setQrValue(data.url);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <form className="info-form" onSubmit={handleSubmit}>
      <label>Ảnh đại diện</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setAvatar(e.target.files[0])}
      />

      <label>Tên</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label>Số điện thoại</label>
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <label>Địa chỉ</label>
      <input
        type="text"
        name="address"
        value={form.address}
        onChange={handleChange}
      />

      <label>SĐT liên hệ</label>
      <input
        type="tel"
        name="contactPhone"
        value={form.contactPhone}
        onChange={handleChange}
      />

      <label>Địa chỉ công ty</label>
      <input
        type="text"
        name="companyAddress"
        value={form.companyAddress}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <button type="submit">Tạo QR Online</button>
    </form>
  );
}
