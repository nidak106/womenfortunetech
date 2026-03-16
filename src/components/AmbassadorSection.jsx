import React from "react";

const ACTIVE_AMBS = [
  { n: "University of Peshawar", c: "Peshawar", cnt: 3 },
  { n: "Islamia College University", c: "Peshawar", cnt: 2 },
  { n: "AWKUM", c: "Mardan", cnt: 4 },
  { n: "Kohat University", c: "Kohat", cnt: 2 },
  { n: "Hazara University", c: "Mansehra", cnt: 3 },
];

const EXP_AMBS = [
  { n: "GC University Lahore", c: "Lahore" },
  { n: "University of Karachi", c: "Karachi" },
  { n: "Quaid-i-Azam University", c: "Islamabad" },
];

const colors = {
  navy: "#4A6E9B",
  coral: "#D97B67",
  deepNavy: "#2D4B73",
  softGray: "#F8F9FA",
};

function AmbassadorSection({ onInternship }) {
  return (
    <section id="ambassadors" className="py-24 px-4 sm:px-5" style={{ background: colors.softGray }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-black tracking-[4px] uppercase mb-3" style={{ color: colors.navy }}>Campus Network</div>
        <h2 className="font-black mb-3" style={{ fontSize: "clamp(26px,4vw,44px)", color: colors.deepNavy }}>Our Ambassador Program</h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-lg mb-12">Empowering student leaders across Pakistan to bring tech opportunities directly to women on campus.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-12">
          
          {/* Active Section - Using Navy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: colors.navy }}></span>
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: colors.navy }}></span>
              </div>
              <h3 className="font-black text-lg" style={{ color: colors.deepNavy }}>Active — KPK</h3>
              <span className="text-[10px] font-black px-3 py-1 rounded-full" style={{ background: "rgba(74, 110, 155, 0.1)", color: colors.navy }}>5 Universities</span>
            </div>

            {ACTIVE_AMBS.map(a => (
              <div key={a.n} className="bg-white rounded-2xl p-5 flex items-center justify-between mb-3 border border-slate-100 hover:border-[#4A6E9B]/30 transition-all hover:shadow-md group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-colors group-hover:bg-[#4A6E9B]/10" style={{ background: "rgba(74, 110, 155, 0.05)" }}>🎓</div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: colors.deepNavy }}>{a.n}</div>
                    <div className="text-slate-400 text-[10px] mt-0.5">📍 {a.c}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-black text-2xl leading-none" style={{ color: colors.navy }}>{a.cnt}</div>
                  <div className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Leaders</div>
                </div>
              </div>
            ))}
          </div>

          {/* Expanding Section - Using Coral */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: colors.coral }}></span>
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: colors.coral }}></span>
              </div>
              <h3 className="font-black text-lg" style={{ color: colors.deepNavy }}>Expanding Nationwide</h3>
              <span className="text-[10px] font-black px-3 py-1 rounded-full" style={{ background: "rgba(217, 123, 103, 0.1)", color: colors.coral }}>3 Universities</span>
            </div>

            {EXP_AMBS.map(a => (
              <div key={a.n} className="bg-white rounded-2xl p-5 flex items-center justify-between mb-3 border border-slate-100 hover:border-[#D97B67]/30 transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: "rgba(217, 123, 103, 0.05)" }}>🌏</div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: colors.deepNavy }}>{a.n}</div>
                    <div className="text-slate-400 text-[10px] mt-0.5">📍 {a.c}</div>
                  </div>
                </div>
                <span className="text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider" style={{ background: "rgba(217, 123, 103, 0.1)", color: colors.coral }}>Onboarding</span>
              </div>
            ))}

            {/* Vision Card - Gradient Background */}
            <div className="rounded-[32px] p-8 text-white mt-6 relative overflow-hidden shadow-2xl shadow-slate-300" 
                 style={{ background: `linear-gradient(135deg, ${colors.deepNavy}, ${colors.navy})` }}>
              <div className="relative z-10">
                <div className="font-black" style={{ fontSize: 52, lineHeight: 1 }}>50+</div>
                <div className="text-white/80 font-bold text-sm mb-3 uppercase tracking-widest">Universities by 2026</div>
                <p className="text-white/60 text-xs leading-relaxed max-w-xs">
                  Building a network that spans all four provinces, ensuring tech equity for every female student in Pakistan.
                </p>
                <button onClick={onInternship}
                  className="inline-flex items-center gap-2 text-white text-xs font-black px-6 py-3 rounded-full border-none cursor-pointer mt-6 transition-all hover:scale-105 active:scale-95 shadow-lg"
                  style={{ backgroundColor: colors.coral }}>
                  BECOME AN AMBASSADOR →
                </button>
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default AmbassadorSection;