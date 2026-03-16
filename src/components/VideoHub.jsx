import { useState } from "react";

const VIDEOS = [
  { 
    id: 1, 
    cat: "Business", 
    title: "Presenting Women Fortune Tech by Khushboo Sethi", 
    eid: "krKMgONVjIc", 
    dur: "2:35", 
    badge: "English/Urdu", 
    cc: "per" 
  },
  { 
    id: 2, 
    cat: "Coding", 
    title: "Python for Beginners — Live Session Placeholder", 
    eid: "DMbr0mJCPQk", 
    dur: "45 min", 
    badge: "Urdu", 
    cc: "cod" 
  },
  { 
    id: 3, 
    cat: "Digital Marketing", 
    title: "How to Build Your Professional Digital Brand", 
    eid: "dRS-IxCwqB4", // Update this with your actual video ID
    dur: "38 min", 
    badge: "Urdu", 
    cc: "dig" 
  },
  { 
    id: 4, 
    cat: "Coding", 
    title: "Agentic Ai vs Traditional Automation ", 
    eid: "AwmGpxC8DMU", 
    dur: "47 min", 
    badge: "Urdu", 
    cc: "per" 
  },
   { 
    id: 5, 
    cat: "Personal Development", 
    title: " Low self esteem: The Silent psychological Struggle", 
    eid: "e_ILitxaGH4", 
    dur: "1 hr 6 min", 
    badge: "Urdu", 
    cc: "per" 
  },
];

const VIDEO_CATEGORIES = ["All", "Coding", "Digital Marketing", "Business", "Personal Development"];

// Updated with your professional brand colors
const CAT_CLASSES = {
  cod: "bg-blue-50 text-blue-600",
  dig: "bg-indigo-50 text-indigo-600",
  cyb: "bg-slate-100 text-slate-700",
  per: "bg-orange-50 text-orange-600",
};

const colors = {
  navy: "#4A6E9B",
  coral: "#D97B67",
  deepNavy: "#2D4B73",
};

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:-translate-y-2 transition-all duration-300" style={{ boxShadow:"0 12px 30px rgba(0,0,0,0.04)" }}>
      <div className="relative cursor-pointer overflow-hidden group" style={{ aspectRatio:"16/9", background:"#000" }} onClick={() => setPlaying(true)}>
        {playing ? (
          <iframe className="w-full h-full border-0"
            src={`https://www.youtube.com/embed/${video.eid}?autoplay=1`}
            allow="autoplay; encrypted-media" allowFullScreen title={video.title} />
        ) : (
          <>
            <img src={`https://img.youtube.com/vi/${video.eid}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-2xl transition-all group-hover:scale-110" style={{ backgroundColor: colors.coral }}>
                ▶
              </div>
            </div>
            <div className="absolute top-3 left-3 flex gap-2">
              <span className={`text-[10px] font-black px-3 py-1 rounded-lg shadow-sm ${CAT_CLASSES[video.cc]}`}>{video.cat}</span>
              <span className="text-[10px] font-black px-3 py-1 rounded-lg bg-white/90 text-slate-800 shadow-sm">{video.badge}</span>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-lg">⏱ {video.dur}</div>
          </>
        )}
      </div>
      <div className="p-5">
        <div className="font-bold text-[#2D4B73] text-sm leading-snug mb-3 h-10 overflow-hidden">{video.title}</div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <span className="text-slate-400 text-[11px] font-medium">Women Fortune Tech</span>
          <a href={`https://youtube.com/watch?v=${video.eid}`} target="_blank" rel="noopener noreferrer" className="text-[#4A6E9B] text-[11px] font-black no-underline hover:opacity-70 transition-opacity">
            WATCH ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function VideoHub() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? VIDEOS : VIDEOS.filter(v => v.cat === active);

  return (
    <section id="video-hub" className="py-24 px-5" style={{ backgroundColor: colors.deepNavy }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-white/50 text-[10px] font-black tracking-[4px] uppercase mb-3">Resources</div>
          <h2 className="text-white font-black mb-4" style={{ fontSize:"clamp(28px,4vw,48px)" }}>Learning Hub</h2>
          <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">Expert-led tutorials, completely free. Curated to help you master the digital landscape.</p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {VIDEO_CATEGORIES.map(cat => (
            <button 
              key={cat} 
              onClick={() => setActive(cat)}
              className={`text-[11px] font-black px-6 py-2.5 rounded-xl border-none cursor-pointer transition-all duration-300 ${
                active === cat 
                ? "shadow-lg shadow-coral-500/20" 
                : "text-white/70 hover:bg-white/10"
              }`}
              style={{ 
                backgroundColor: active === cat ? colors.coral : "rgba(255,255,255,0.05)",
                color: "white"
              }}>
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid gap-8" style={{ gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))" }}>
          {filtered.map(v => <VideoCard key={v.id} video={v} />)}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <a href="https://www.youtube.com/@WomenFortuneTech" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white font-black text-xs px-10 py-4 rounded-full no-underline transition-all hover:scale-105 active:scale-95 shadow-2xl"
            style={{ backgroundColor: colors.navy }}>
            EXPLORE THE CHANNEL
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default VideoHub;