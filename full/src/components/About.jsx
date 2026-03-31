import React from "react";
import "./About.css"
const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-6">Bizning Xizmatlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-4 shadow-md rounded-md">
          <h3 className="text-xl font-bold">Web Dizayn</h3>
          <p>Figma'dan HTML, CSS, React kodigacha to‘liq loyihalar qilamiz.</p>
        </div>
        <div className="p-4 shadow-md rounded-md">
          <h3 className="text-xl font-bold">Frontend Dasturlash</h3>
          <p>
            React, Tailwind, Vite asosida landing sahifalar va saytlar
            yaratamiz.
          </p>
        </div>
        <div className="p-4 shadow-md rounded-md">
          <h3 className="text-xl font-bold">Backend</h3>
          <p>
            Node.js va Express bilan backend yozib, formani emailga yuboramiz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
