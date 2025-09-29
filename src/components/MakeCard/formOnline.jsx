import React from "react";

export default function FormOnline({ onlineForm, setOnlineForm }) {
  return (
    <form className="info-form" onSubmit={(e) => e.preventDefault()}>
      <label>Tên</label>
      <input
        type="text"
        name="onlineName"
        value={onlineForm.name}
        onChange={(e) =>
          setOnlineForm({ ...onlineForm, name: e.target.value })
        }
        placeholder="Nhập tên khách hàng"
      />

      <label>Số điện thoại</label>
      <input
        type="tel"
        name="onlinePhone"
        value={onlineForm.phone}
        onChange={(e) =>
          setOnlineForm({ ...onlineForm, phone: e.target.value })
        }
        placeholder="0123 456 789"
      />

      {/* sau này có thể thêm email, địa chỉ… */}
    </form>
  );
}
