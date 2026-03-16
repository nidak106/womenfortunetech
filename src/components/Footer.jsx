import { Link } from "react-router-dom";

function Footer() {
  const colors = {
    navy: "#4A6E9B",
    coral: "#D97B67",
    deepNavy: "#2D4B73",
  };

  return (
    <footer id="contact" style={{ backgroundColor: colors.deepNavy }} className="text-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 mb-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          
          {/* Brand Identity */}
          <div style={{ gridColumn: "span 2" }}>
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black shadow-lg"
                style={{ backgroundColor: colors.navy }}
              >
                W
              </div>
              <div>
                <div className="font-black text-white text-base tracking-tight">Women Fortune Tech</div>
                <div 
                  className="text-[9px] font-black tracking-[2px] uppercase opacity-80"
                  style={{ color: colors.coral }}
                >
                  Empower the women, Empower the world
                </div>
              </div>
            </div>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs mb-8">
              A dedicated platform for women across Pakistan to master digital skills, find mentorship, and access global opportunities.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {["yt", "fb", "li", "ig"].map(s => (
                <a 
                  key={s} 
                  href="#" 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[10px] font-black uppercase no-underline text-white transition-all hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[10px] font-black tracking-[3px] uppercase mb-6" style={{ color: colors.coral }}>Platform</h4>
            <ul className="list-none space-y-4 p-0">
              {[
                ["Home", "/"],
                ["Our Team", "/team"],
                ["Moments", "/moments"],
                ["Ambassadors", "/ambassadors"],
                ["Contact Us", "/contact"]
              ].map(([l, h]) => (
                <li key={l}>
                  <Link 
                    to={h} 
                    className="text-white/60 text-xs no-underline hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: colors.coral }}>—</span>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] font-black tracking-[3px] uppercase mb-6" style={{ color: colors.coral }}>Get in Touch</h4>
            {[
              { icon: "📍", text: "2nd Floor, Ali Tower, Peshawar, KPK" },
              { icon: "✉", text: "info@womenfortunetech.org", href: "mailto:info@womenfortunetech.org" },
              { icon: "📞", text: "+92 91 000 0000", href: "tel:+92910000000" },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-3 mb-4 text-xs text-white/50 group">
                <span className="flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                {item.href ? (
                  <a href={item.href} className="text-white/50 no-underline hover:text-white transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[10px] font-medium tracking-wide">
            © 2026 WOMEN FORTUNE TECH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2 text-white/20 text-[10px] font-medium">
            <span>MADE WITH</span>
            <span style={{ color: colors.coral }}>❤</span>
            <span>FOR PAKISTANI WOMEN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;