import React, { useState } from "react";

// Professional Brand Colors
const colors = {
  navy: "#4A6E9B",
  coral: "#D97B67",
  deepNavy: "#2D4B73",
  softGray: "#F8F9FA",
};

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent to Women Fortune Tech.");
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-5" style={{ backgroundColor: colors.softGray }}>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <div className="text-[10px] font-black tracking-[4px] uppercase mb-3" style={{ color: colors.navy }}>Get In Touch</div>
          <h1 className="font-black text-5xl mb-4" style={{ color: colors.deepNavy }}>Contact Us</h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            We’d love to hear from you — reach out with questions or collaboration ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Your Specific Info */}
          <div className="space-y-10">
            <div>
              <h3 className="font-black text-xs uppercase tracking-widest mb-4" style={{ color: colors.coral }}>Address</h3>
              <p className="text-[#2D4B73] font-bold text-xl leading-relaxed">
                Women Fortune Tech, 2nd Floor, Ali Tower,<br /> 
                University Road, Peshawar
              </p>
            </div>

            <div>
              <h3 className="font-black text-xs uppercase tracking-widest mb-4" style={{ color: colors.coral }}>Email</h3>
              <a href="mailto:womenfortune3@gmail.com" className="text-[#2D4B73] font-bold text-xl hover:opacity-70 transition-opacity underline decoration-slate-200 underline-offset-8">
                womenfortune3@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-black text-xs uppercase tracking-widest mb-4" style={{ color: colors.coral }}>Phone</h3>
              <a href="tel:+923159805714" className="text-[#2D4B73] font-bold text-xl hover:opacity-70 transition-opacity">
                +92 315-9805714
              </a>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#4A6E9B] outline-none transition-all text-sm"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#4A6E9B] outline-none transition-all text-sm"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#4A6E9B] outline-none transition-all text-sm resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-2xl font-black text-white text-sm uppercase tracking-widest shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: colors.deepNavy }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;