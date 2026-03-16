import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ onInternship }) => {
  const floaters = [
    "🎙 Your Voice Matters",
    "💻 Learn New Skills",
    "🚀 Launch Your Career",
    "🤝 Find Your Community",
    "⭐ Build Your Future", 
  ];

  const floaterStyles = [
    { left: "5%", top: "30%", animationDelay: "0s" },
    { left: "75%", top: "20%", animationDelay: "1.5s" },
    { left: "60%", top: "55%", animationDelay: "3s" },
    { left: "20%", top: "65%", animationDelay: "4.5s" },
    { left: "85%", top: "45%", animationDelay: "2s" },
  ];

  // LOGO COLOR PALETTE
  const colors = {
    navy: "#4A6E9B",      // The blue from the text/leaves
    coral: "#D97B67",     // The warm terracotta/coral from the figures
    deepNavy: "#2D4B73",  // Darker shade for gradients
    lightBlue: "#A5B9D9", // Muted blue for highlights
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden flex flex-col" 
      style={{ minHeight: "92vh", backgroundColor: "#F8F9FA" }} // Light neutral base
    >
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/event1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.45", 
        }}
      />

      {/* 2. BRAND COLOR GRADIENT OVERLAY (Navy Theme) */}
      <div 
        className="absolute inset-0 z-[1]" 
        style={{ 
          background: `linear-gradient(to right, ${colors.deepNavy} 0%, ${colors.deepNavy}CC 40%, transparent 100%)` 
        }} 
      />

      {/* 3. DECORATIVE BLOBS (Logo Inspired) */}
      <div className="absolute rounded-full pointer-events-none z-[2]" style={{ width: 250, height: 250, background: `${colors.navy}15`, top: -50, right: -50 }} />
      <div className="absolute rounded-full pointer-events-none z-[2]" style={{ width: 150, height: 150, background: `${colors.coral}10`, bottom: 80, left: -30 }} />

      

      {/* 5. MAIN CONTENT CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
        
        {/* LEFT COLUMN */}
        <div className="animate-fadeIn">
          <div className="inline-flex items-center gap-2 text-white/80 text-[10px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-6 bg-white/10 border border-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D97B67] inline-block animate-pulse" />
            Pakistan's Premier Vernacular Platform
          </div>

          <h1 className="text-white font-black leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-2px" }}>
            Empower Her.<br />
            In Her <span style={{ color: colors.coral }}>Language.</span><br />
            For Her Future.
          </h1>

          <p className="font-bold mb-6 leading-snug" style={{ fontSize: "clamp(16px, 2vw, 22px)", color: colors.lightBlue }}>
            Unlocking potential through digital skills, community, and opportunity.
          </p>

          <p className="text-white/70 text-m leading-relaxed max-w-lg mb-10">
            Women Fortune Tech provides accessible, job-ready training in regional languages. 
            From Peshawar to all of Pakistan, we are building a world where every woman has the stage to lead.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/moments" 
              className="hover:opacity-90 text-white font-black text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-black/10"
              style={{ backgroundColor: colors.coral }}>
              ✨ Watch Our Journey
            </Link>
            
            <button 
              onClick={onInternship}
              className="bg-transparent border-2 font-black  text-white text-sm px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all hover:bg-white/5"
              style={{ borderColor: colors.coral }}>
              💼 Join Internship
            </button>
          </div>

          {/* IMPACT STATS */}
          <div className="flex gap-4 sm:gap-8 border-t border-white/10 pt-8">
            {[
              { val: "2.4K+", lbl: "Women Upskilled" },
              { val: "15+", lbl: "Uni Partners" },
              { val: "KPK", lbl: "Regional Base" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-black text-2xl leading-none" style={{ color: colors.coral }}>{s.val}</div>
                <div className="text-white/40 font-bold text-[10px] uppercase tracking-wider mt-1">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: FEATURE CARDS */}
        <div className="hidden lg:flex flex-col gap-4">
          {[
            { icon: "🌍", title: "Vernacular Learning", sub: "Courses taught in regional languages.", color: colors.navy },
            { icon: "👩‍🎓", title: "Ambassador Network", sub: "Leading change across universities.", color: colors.coral },
            { icon: "📈", title: "Career Placement", sub: "Connecting talent with opportunities.", color: colors.lightBlue },
          ].map((card, i) => (
            <div key={i} 
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-inner"
                  style={{ backgroundColor: `${card.color}20`, color: card.color }}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm group-hover:text-white transition-colors">{card.title}</h3>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">{card.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatPill {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;