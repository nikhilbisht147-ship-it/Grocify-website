import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdOutlineElectricBolt, 
  MdSlowMotionVideo 
} from "react-icons/md";
import { 
  IoArrowForward, 
  IoShieldCheckmarkOutline, 
  IoSparklesOutline 
} from "react-icons/io5";
import { 
  GiPlantRoots, 
  GiFruitBowl 
} from "react-icons/gi";
import { 
  TbTruckDelivery, 
  TbRefreshDot, 
  TbHeartHandshake 
} from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";

import img3 from '../assets/images/img3.png';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.avif';
import img16 from '../assets/images/img16.png';

const About = () => {
  const stats = [
    { value: "15-30m", label: "Average Delivery", icon: MdOutlineElectricBolt },
    { value: "50k+", label: "Happy Households", icon: HiOutlineUserGroup },
    { value: "3,000+", label: "Organic Products", icon: GiFruitBowl },
    { value: "99.8%", label: "Freshness Guaranteed", icon: IoShieldCheckmarkOutline },
  ];

  const values = [
    {
      icon: GiPlantRoots,
      tag: "Direct Sourcing",
      title: "Direct from Farm to Table",
      desc: "We skip third-party middlemen. Produce is gathered at 4 AM directly from verified local growers, washed, and delivered crisp.",
      gradient: "from-emerald-500/10 to-teal-500/5",
      border: "border-emerald-200/60",
      accent: "text-emerald-600 bg-emerald-100",
    },
    {
      icon: TbTruckDelivery,
      tag: "Speed & Safety",
      title: "Chilled Cold-Chain Fleet",
      desc: "Our insulated delivery bags preserve the freshness of dairy, berries, and greens in top condition even on hot summer afternoons.",
      gradient: "from-orange-500/10 to-amber-500/5",
      border: "border-orange-200/60",
      accent: "text-orange-600 bg-orange-100",
    },
    {
      icon: TbRefreshDot,
      tag: "Trust",
      title: "No Questions Asked Returns",
      desc: "Not satisfied with an apple or avocado? Request a 1-tap refund right inside your Grocify app. No questions, no return trip hassle.",
      gradient: "from-sky-500/10 to-blue-500/5",
      border: "border-sky-200/60",
      accent: "text-sky-600 bg-sky-100",
    },
    {
      icon: TbHeartHandshake,
      tag: "Community",
      title: "Honest & Fair Pricing",
      desc: "No surge pricing during rain or holidays. We guarantee supermarket-level or lower pricing on everyday essential groceries.",
      gradient: "from-purple-500/10 to-pink-500/5",
      border: "border-purple-200/60",
      accent: "text-purple-600 bg-purple-100",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAFAF8] text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Subtle decorative background blurs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-orange-200/40 via-emerald-100/30 to-amber-100/40 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-orange-600 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                <IoSparklesOutline className="text-base animate-pulse" />
                <span>Rethinking Daily Groceries for Everyone</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
                Fresh groceries, delivered{' '}
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
                  faster than ever.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Grocify was built to give back your weekends. We connect busy families with trusted organic farms and daily essentials in a matter of minutes, without cutting corners on quality.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3.5 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Join the Family
                  <IoArrowForward className="text-lg" />
                </Link>
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-2xl border border-slate-200/90 shadow-sm hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <MdSlowMotionVideo className="text-2xl text-orange-500" />
                  See How It Works
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Floating pill 1 */}
                <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce [animation-duration:3s]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    🌿
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">100% Organic</p>
                    <p className="text-sm font-bold text-slate-800">Direct From Farms</p>
                  </div>
                </div>

                {/* Main image container */}
                <div className="relative bg-gradient-to-b from-orange-100/50 to-amber-50/50 rounded-3xl p-6 sm:p-8 border border-orange-100 shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="w-56 h-56 bg-orange-400/20 rounded-full blur-2xl absolute -z-0" />
                  <img
                    src={img16}
                    alt="Grocify fresh items basket"
                    className="relative z-10 w-full max-h-[380px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating pill 2 */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">
                    ⚡
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Instant Dispatch</p>
                    <p className="text-sm font-bold text-slate-800">Under 20 Mins</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= STATS COUNTER STRIP ================= */}
      <section className="border-y border-slate-200/70 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-3 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center text-2xl shadow-inner">
                    <Icon />
                  </div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STORY / MISSION SECTION ================= */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Mosaic */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 order-2 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="overflow-hidden rounded-3xl shadow-md border border-slate-200 bg-white">
                  <img
                    src={img5}
                    alt="Fresh vegetables in market"
                    className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl text-white shadow-lg">
                  <h4 className="text-2xl font-black">Zero Waste</h4>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                    Unsold fresh items are packed daily for neighborhood community kitchens.
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                <div className="p-6 bg-slate-900 rounded-3xl text-white shadow-lg">
                  <p className="text-orange-400 font-bold text-xs uppercase tracking-wider">Quality Check</p>
                  <p className="mt-2 text-lg sm:text-xl font-bold">3-tier freshness screening on every batch</p>
                </div>
                <div className="overflow-hidden rounded-3xl shadow-md border border-slate-200 bg-white">
                  <img
                    src={img6}
                    alt="Packaged clean groceries"
                    className="w-full h-48 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Narrative Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
                Our Genesis
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-2 tracking-tight">
                No wilted leaves. No expired milk. Only pure freshness.
              </h2>
              
              <div className="mt-6 space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  We started <strong className="text-slate-900 font-semibold">Grocify</strong> because we were tired of grocery deliveries showing up bruised, thawed, or hours late. We believed everyday kitchen essentials deserve the same precision logistics as luxury goods.
                </p>
                <p>
                  By partnering directly with trusted growers and modernizing micro-fulfillment hubs across neighborhoods, we cut the time it takes an apple to go from the orchard tree to your crisper drawer down to just 24 hours.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6">
                <div>
                  <h4 className="text-xl font-black text-slate-900">4.9 / 5</h4>
                  <p className="text-xs text-slate-500 font-medium">Customer Rating</p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <h4 className="text-xl font-black text-slate-900">100k+</h4>
                  <p className="text-xs text-slate-500 font-medium">Delivered Orders</p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <h4 className="text-xl font-black text-slate-900">100%</h4>
                  <p className="text-xs text-slate-500 font-medium">Recyclable Bags</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= VALUES / WHY US GRID ================= */}
      <section className="py-20 bg-slate-100/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
              Why Customers Love Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
              A grocery service designed around honesty
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Here is what makes shopping on Grocify different from walking down noisy supermarket aisles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-3xl p-6 sm:p-7 border ${v.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${v.accent} flex items-center justify-center text-2xl mb-5 shadow-sm`}>
                      <Icon />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                      {v.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery fleet banner */}
          <div className="mt-16 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-orange-500/15 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="bg-white/20 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white inline-block mb-3">
                Join Grocify Today
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                Ready to fill your fridge in minutes?
              </h3>
              <p className="mt-2 text-orange-100 text-sm sm:text-base">
                Download the Grocify mobile experience or browse our live inventory right now.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="bg-white text-orange-600 hover:bg-slate-50 font-bold px-8 py-3.5 rounded-2xl shadow-md transition-all active:scale-95"
              >
                Start Shopping Now
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;