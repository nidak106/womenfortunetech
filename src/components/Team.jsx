import React from "react";

function Team() {
  // Brand Color Palette
  const colors = {
    navy: "#4A6E9B",      // Logo Blue
    coral: "#D97B67",     // Logo Coral
    deepNavy: "#2D4B73",  // Logo Deep Blue
    softGray: "#F8F9FA",
    lightNavy: "rgba(74, 110, 155, 0.1)",
  };

  const teamMembers = [
    {
      name: "Hamid Shinwari",
      role: "Founder & CEO",
      image: "/images/ceo.jpeg",
      quote: "Every woman in Pakistan deserves a seat at the digital table. When we give women a platform, we don't just change their lives — we change entire communities.",
      bio: "With over a decade of experience in HR leadership and community development, Hamid founded Women Fortune Tech to create real opportunities for women across Pakistan.",
      skills: ["10+ Years HR Leadership", "Community Development Expert", "Digital Inclusion Advocate"],
      badge: "✨ Founder",
    },
    {
      name: "Nida Khan",
      role: "Co-founder",
      image: "/images/nida.jpeg",
      quote: "Building a supportive environment where every team member can thrive and grow.",
      bio: "Nida leads our technical strategy and ensures our programs align with industry standards in Computer Science.",
      skills: ["AI Orchestration", "CS Strategy", "Tech Mentorship"],
      badge: "💻 Tech",
    },
    {
      name: "Sania Safeer",
      role: "Co-founder",
      image: "/images/sania.jpeg",
      quote: "Design is not just what it looks like, it's how it makes you feel.",
      bio: "Sania creates stunning visuals that capture the essence of Women Fortune Tech's mission across all digital platforms.",
      skills: ["UI/UX Design", "Brand Identity", "Creative Direction"],
      badge: "🎨 Design",
    },
    {
      name: "Fatima Noor",
      role: "Community Manager",
      image: "/api/placeholder/600/700",
      quote: "Connecting hearts and minds to build a stronger community.",
      bio: "Fatima manages our online community and organizes events to engage women across Pakistan.",
      skills: ["Community Building", "Event Planning", "Social Media"],
      badge: "🤝 Community",
    }
  ];

  return (
    
    <div className="py-20 px-5" style={{ background: colors.softGray }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-extrabold tracking-[4px] uppercase mb-2" style={{ color: colors.navy }}>Our Team</div>
        <h2 className="font-black mb-2" style={{ fontSize: "clamp(26px,4vw,44px)", color: colors.deepNavy }}>Meet the People Behind the Mission</h2>
        <p className="text-slate-500 text-sm leading-relaxed max-w-lg mb-10">A dedicated team working tirelessly to empower women through technology and community.</p>
{/* CEO Spotlight Section */}
<div className="mb-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-[40px] p-8 lg:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
    
    {/* Large CEO Image */}
    <div className="relative group">
      <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-2xl">
        <img 
          src={teamMembers[0].image} 
          alt={teamMembers[0].name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D4B73] via-transparent to-transparent opacity-60" />
      </div>
      <div 
        className="absolute -bottom-4 -right-4 text-white font-black px-6 py-3 rounded-2xl shadow-xl"
        style={{ backgroundColor: colors.coral }}
      >
        Founder's Vision ✨
      </div>
    </div>

    {/* Message Content */}
    <div>
      <div className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6" style={{ backgroundColor: colors.lightNavy, color: colors.navy }}>
        Leadership Message
      </div>
      
      <h3 className="text-4xl font-black mb-6 leading-tight" style={{ color: colors.deepNavy }}>
        "Every woman in Pakistan  deserves a seat at the digital table."
      </h3>
      
      <p className="text-slate-600 leading-relaxed mb-8 text-lg italic">
        {teamMembers[0].bio}
      </p>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black" style={{ backgroundColor: colors.navy }}>
          H
        </div>
        <div>
          <div className="font-black text-[#2D4B73]">{teamMembers[0].name}</div>
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">Founder & CEO</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {teamMembers[0].skills.map(skill => (
          <div key={skill} className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
            <span style={{ color: colors.coral }}>✔</span> {skill}
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1 group" style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                
                {/* Image Component */}
                <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                  <div className="relative rounded-2xl overflow-hidden w-32 h-40 shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500" />
                    {/* Overlay Gradient using Navy */}
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${colors.deepNavy}CC 0%, transparent 100%)` }} />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <div className="text-white font-black text-xs">{member.name}</div>
                      <div className="text-white/80 text-[10px] font-medium">{member.role}</div>
                    </div>
                  </div>
                  {/* Badge using Coral */}
                  <div className="absolute -top-2 -right-2 text-white text-[10px] font-black px-3 py-1.5 rounded-xl shadow-md" style={{ backgroundColor: colors.coral }}>
                    {member.badge}
                  </div>
                </div>

                {/* Content Component */}
                <div className="flex-1">
                  <div className="rounded-2xl p-4 mb-4" style={{ backgroundColor: `${colors.navy}08`, borderLeft: `4px solid ${colors.coral}` }}>
                    <p className="font-bold leading-relaxed italic text-sm" style={{ color: colors.deepNavy }}>
                      "{member.quote}"
                    </p>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Skills Section */}
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(skill => (
                      <span key={skill} className="inline-flex items-center gap-1 text-[10px] font-extrabold px-3 py-1 rounded-full transition-colors" 
                        style={{ 
                          background: colors.lightNavy, 
                          color: colors.deepNavy,
                          border: `1px solid ${colors.navy}20`
                        }}>
                        <span style={{ color: colors.coral }}>●</span> {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;