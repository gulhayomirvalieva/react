import React from "react";
import "./Hero.css"
const Hero = () => {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Biznesingizni Onlayn O'stiring
      </h1>
      <p className="text-lg mb-6">
        Biz zamonaviy web-saytlar yaratamiz. Hammasi Figma'dan kodgacha!
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
        Hozir Boshlash
      </button>
    </section>
  );
};

export default Hero;
