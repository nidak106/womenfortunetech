import { useState } from "react";

function InternshipModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill in all required fields.");
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-10 overflow-y-auto" style={{ background:"rgba(0,0,0,0.65)", backdropFilter:"blur(8px)" }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-3xl w-full max-w-xl overflow-hidden">
        {/* Header */}
        <div className="relative p-7 text-white" style={{ background:"linear-gradient(135deg, #2BBAA5, #064e3b)" }}>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm border-none cursor-pointer"
            style={{ background:"rgba(255,255,255,0.15)" }}>✕</button>
          <div style={{ fontSize:28 }}>💼</div>
          <h2 className="font-black text-xl mt-2">Apply for Internship</h2>
          <p className="text-white/70 text-sm mt-1">3-month paid program. Real experience. Real growth.</p>
        </div>

        {/* Body */}
        <div className="p-7">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" style={{ background:"rgba(147,211,174,0.25)" }}>✅</div>
              <h3 className="font-black text-[#064e3b] text-xl mb-2">Application Received!</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Thank you <strong>{name}</strong>! We'll review your application and reach out to <strong>{email}</strong> within 3–5 business days.
              </p>
              <button onClick={onClose} className="mt-6 bg-[#2BBAA5] text-white font-extrabold text-sm px-8 py-3 rounded-full border-none cursor-pointer">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label:"Full Name", id:"fn", type:"text", placeholder:"Your full name", setter:setName, full:false },
                  { label:"Email", id:"fe", type:"email", placeholder:"your@email.com", setter:setEmail, full:false },
                  { label:"Phone", type:"tel", placeholder:"+92 300 0000000", full:false },
                  { label:"CNIC", type:"text", placeholder:"XXXXX-XXXXXXX-X", full:false },
                  { label:"University", type:"text", placeholder:"Your university", full:false },
                  { label:"Degree Program", type:"text", placeholder:"e.g. BS Computer Science", full:false },
                ].map((f, i) => (
                  <div key={i} className={`flex flex-col gap-1 ${f.full ? "col-span-2" : ""}`}>
                    <label className="text-[11px] font-bold text-[#064e3b]">{f.label} <span className="text-[#F9A822]">*</span></label>
                    <input type={f.type} placeholder={f.placeholder} required
                      onChange={f.setter ? e => f.setter(e.target.value) : undefined}
                      className="border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium outline-none focus:border-[#2BBAA5] transition-colors" style={{ fontFamily:"inherit" }} />
                  </div>
                ))}

                {[
                  { label:"Year of Study", options:["1st Year","2nd Year","3rd Year","4th Year","Graduate"] },
                  { label:"Internship Track", options:["Web Development","Digital Marketing","Cyber Security","Graphic Design","Community Management"] },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <label className="text-[11px] font-bold text-[#064e3b]">{s.label} <span className="text-[#F9A822]">*</span></label>
                    <select required className="border border-slate-200 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-[#2BBAA5]" style={{ fontFamily:"inherit" }}>
                      <option value="">Select…</option>
                      {s.options.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}

                <div className="col-span-2 flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#064e3b]">Why Women Fortune Tech? <span className="text-[#F9A822]">*</span></label>
                  <textarea required rows={3} placeholder="Tell us your motivation and goals…"
                    className="border border-slate-200 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-[#2BBAA5] resize-y" style={{ fontFamily:"inherit" }} />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-[#064e3b]">Available From <span className="text-[#F9A822]">*</span></label>
                  <input type="date" required className="border border-slate-200 rounded-xl px-3 py-2.5 text-xs outline-none focus:border-[#2BBAA5]" style={{ fontFamily:"inherit" }} />
                </div>
              </div>

              <button type="submit"
                className="w-full mt-5 bg-[#F9A822] text-white font-extrabold text-sm py-3.5 rounded-xl border-none cursor-pointer flex items-center justify-center gap-2 hover:bg-[#e09518] transition-colors"
                style={{ fontFamily:"inherit" }}>
                📨 Submit Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default InternshipModal;