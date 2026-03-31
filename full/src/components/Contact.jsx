import React, { useState } from "react";
import axios from "axios";
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contacts", formData);
      alert("Xabaringiz muvaffaqiyatli yuborildi!");
    } catch (err) {
      console.error(err);
      alert("Xatolik yuz berdi.");
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-6">Bog'lanish</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Ismingiz"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-3 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="p-3 border rounded"
          required
        />
        <textarea
          placeholder="Xabar"
          rows="4"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Yuborish
        </button>
      </form>
    </section>
  );
};

export default Contact;
