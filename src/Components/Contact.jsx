import React, { useState } from 'react';
import { FaUnlockAlt } from "react-icons/fa";
import { 
  MdPhoneInTalk, 
  MdOutlineEmail, 
  MdLocationOn, 
  MdAccessTime, 
  MdCheckCircle 
} from "react-icons/md";
import { 
  IoChatbubblesOutline, 
  IoSend, 
  IoShieldCheckmarkOutline, 
  IoSparklesOutline 
} from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import img7 from '../assets/images/img7.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Order Support',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const contactChannels = [
    {
      icon: MdPhoneInTalk,
      title: "Call Direct",
      desc: "Instant live help with orders",
      action: "+91 9999999999",
      href: "tel:",
      accent: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp Chat",
      desc: "Fast resolution in 5 mins",
      action: "Chat on WhatsApp",
      href: "https://wa.me/18005554433",
      accent: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
      icon: MdOutlineEmail,
      title: "Email Support",
      desc: "For receipts & business inquiries",
      action: "support@grocify.com",
      href: "mailto:support@grocify.com",
      accent: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
      icon: MdLocationOn,
      title: "Central Hub",
      desc: "Distribution & Fresh Logistics",
      action: "742 Fresh Avenue, Suite 10",
      href: "#",
      accent: "bg-amber-50 text-amber-600 border-amber-100"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAFAF8] text-slate-900 font-sans selection:bg-orange-500 selection:text-white pt-20 md:pt-24 pb-20">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-[#FAFAF8] border-b border-orange-100/60 py-12 md:py-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-300/15 rounded-full blur-3xl pointer-events-none -z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 text-orange-700 text-xs sm:text-sm font-semibold mb-4">
                <IoSparklesOutline className="text-base" />
                <span>24/7 Grocify Customer Care</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl/15 font-extrabold text-slate-800 tracking-tight leading-tight">
                We are here to help <br />
                <span className="text-orange-500 ">
                  fresh every day
                </span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Got a question about an ongoing delivery, missed item, or farm partnership? 
                Reach out anytime — our team responds within minutes.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <MdAccessTime className="text-orange-500 text-base" />
                  <span>Avg reply: &lt; 10 mins</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoShieldCheckmarkOutline className="text-emerald-600 text-base" />
                  <span>100% Guaranteed Resolution</span>
                </div>
              </div>
            </div>

            {/* Banner Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-amber-200/20 rounded-full blur-2xl" />
                <img 
                  src={img7} 
                  alt="Customer Support Grocify" 
                  className="relative z-10 w-full h-auto max-h-[300px] sm:max-h-[360px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= QUICK CONTACT CARDS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactChannels.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl border mb-4 group-hover:scale-110 transition-transform ${item.accent}`}>
                  <Icon />
                </div>
                <h3 className="font-bold text-slate-800 text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 mb-3">{item.desc}</p>
                <span className="text-sm font-semibold text-orange-600 group-hover:underline flex items-center gap-1">
                  {item.action} &rarr;
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ================= MAIN INTERACTIVE FORM SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                Direct Inquiry
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mt-2 tracking-tight">
                Send us a message, we'll sort it out.
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you want to return bruised avocados, ask for nutritional breakdown info, or join Grocify as a supplier, let us know below.
              </p>
            </div>

            {/* Quick Micro FAQ */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
              <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                <IoChatbubblesOutline className="text-orange-500 text-xl" />
                Frequently Asked
              </h4>

              <div className="border-b border-slate-100 pb-3">
                <p className="font-semibold text-slate-800 text-sm">Where is my order?</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Track live driver coordinates on the Grocify Tracking tab or tap WhatsApp for live dispatch assistance.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-3">
                <p className="font-semibold text-slate-800 text-sm">How do refund requests work?</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Take a photo of any unsatisfactory produce within 24 hours. Refunds process automatically back to your card or wallet.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 text-sm">Can local farmers partner with us?</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Yes! Choose "Vendor Partnership" in the contact form, and our procurement team will get in touch within 48 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden">
              
              {submitted ? (
                /* Success View */
                <div className="text-center py-12 px-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    <MdCheckCircle />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                    Thank you <strong className="text-slate-800">{formData.name}</strong>. A Grocify care representative has been assigned and will email you at <strong className="text-slate-800">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', topic: 'Order Support', message: '' });
                    }}
                    className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder=""
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                      >
                        <option value="Order Support">Order & Delivery Support</option>
                        <option value="Refund Request">Produce Refund / Missing Item</option>
                        <option value="Vendor Partnership">Vendor & Organic Farm Supplier</option>
                        <option value="General Feedback">General Feedback & Ideas</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please include your Order ID if applicable..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 active:scale-98"
                  >
                    <span>Send Message to Support</span>
                    <IoSend className="text-sm" />
                  </button>

                  <p className="text-center text-xs  text-slate-400 mt-2">
                    <span className=' flex gap-3 items-center justify-center'><FaUnlockAlt className='text-slate-600 text-md'/> We protect your data. No spam, ever.</span>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;