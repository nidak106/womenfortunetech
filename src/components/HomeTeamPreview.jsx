import React from "react";
import { Link } from "react-router-dom";

const HomeTeamPreview = () => {
  const previewMembers = [
    { name: "Hamid Shinwari", role: "Founder & CEO", image: "/images/ceo.jpeg" },
    { name: "Nida Khan", role: "Co-founder", image: "/images/nida.jpeg" },
    { name: "Sania Safeer", role: "Co-founder", image: "/images/sania.jpeg" },
  ];

  return (
    <section className="py-20 px-4 sm:px-5 bg-white text-center">
      <h2 className="text-3xl font-black text-[#2D4B73] mb-12">Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
        {previewMembers.map((m, i) => (
          <div key={i} className="group">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-lg mb-4">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-[#2D4B73]">{m.name}</h3>
            <p className="text-[#D97B67] text-xs font-bold uppercase">{m.role}</p>
          </div>
        ))}
      </div>
      <Link to="/team" className="inline-block bg-[#2D4B73] text-white px-8 py-3 rounded-full font-bold hover:bg-[#4A6E9B] transition-all">
        View Full Team & Vision →
      </Link>
    </section>
  );
};

export default HomeTeamPreview;