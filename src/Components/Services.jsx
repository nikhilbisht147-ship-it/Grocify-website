import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MdOutlineElectricBolt, 
  MdOutlineLocalShipping, 
  MdOutlineVerified, 
  MdSupportAgent 
} from "react-icons/md";
import { 
  GiFruitBowl, 
  GiPlantRoots 
} from "react-icons/gi";
import { 
  TbSnowflake, 
  TbRepeat, 
  TbBuildingStore, 
  TbRefreshAlert 
} from "react-icons/tb";
import { 
  IoArrowForward, 
  IoSparklesOutline 
} from "react-icons/io5";

import img8 from '../assets/images/img8.png';

const Services = () => {
  const serviceOfferings = [
    {
      icon: MdOutlineElectricBolt,
      tag: "Express Logistics",
      title: "15-30 Min Fast Delivery",
      description: "Smart micro-fulfillment centers stationed across town ensure your milk, greens, and eggs reach your kitchen while still farm fresh.",
      badge: "Fastest",
      color: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600 bg-amber-100",
      border: "border-amber-200/80"
    },
    {
      icon: GiPlantRoots,
      tag: "Direct Sourcing",
      title: "Farm-Fresh Produce",
      description: "Direct partnerships with verified organic farmers. Harvested at sunrise and cataloged directly without pesticide treatments.",
      badge: "100% Organic",
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600 bg-emerald-100",
      border: "border-emerald-200/80"
    },
    {
      icon: TbSnowflake,
      tag: "Cold Chain",
      title: "Climate-Controlled Storage",
      description: "Dairy, frozen snacks, and tender greens travel in dedicated multi-zone chilled bags to eliminate melting, spoilage, or wilting.",
      badge: "Zero Spoilage",
      color: "from-sky-500/10 to-blue-500/10",
      iconColor: "text-sky-600 bg-sky-100",
      border: "border-sky-200/80"
    },
    {
      icon: TbRepeat,
      tag: "Auto-Pilot Kitchen",
      title: "Smart Repeat Subscriptions",
      description: "Never run out of morning milk, fresh bread, or cooking oils. Customize your weekly calendar with flexible pausing and cancel anytime.",
      badge: "Save 15%",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600 bg-purple-100",
      border: "border-purple-200/80"
    },
    {
      icon: TbBuildingStore,
      tag: "Institutional Supply",
      title: "Bulk & B2B Wholesale",
      description: "Custom bulk provisioning for cafes, restaurants, cloud kitchens, and corporate offices with dedicated invoicing and credit terms.",
      badge: "Wholesale",
      color: "from-indigo-500/10 to-violet-500/10",
      iconColor: "text-indigo-600 bg-indigo-100",
      border: "border-indigo-200/80"
    },
    {
      icon: TbRefreshAlert,
      tag: "Buyer Assurance",
      title: "Instant 1-Click Replacements",
      description: "If an avocado is over-ripe or an item is bruised, upload a picture in-app for an immediate credit refund without the return trip.",
      badge: "No Questions",
      color: "from-rose-500/10 to-red-500/10",
      iconColor: "text-rose-600 bg-rose-100",
      border: "border-rose-200/80"
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Browse Fresh Catalog",
      desc: "Select hand-picked fruits, artisan bread, pantry goods, and household staples."
    },
    {
      step: "02",
      title: "Insulated Bag Packing",
      desc: "Our micro-warehouse selects and packs cold and dry items into thermal sealed totes."
    },
    {
      step: "03",
      title: "Doorstep Delivery",
      desc: "Real-time tracked riders drop your groceries right at your kitchen door within minutes."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAFAF8] text-slate-900 font-sans selection:bg-orange-500 selection:text-white pt-20 md:pt-24 pb-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-[#FAFAF8] border-b border-orange-100/60 py-12 md:py-20">
        <div className="absolute top-0 right-10 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/70 text-orange-700 text-xs sm:text-sm font-semibold mb-5 shadow-sm">
                <IoSparklesOutline className="text-base animate-pulse" />
                <span>Modern Delivery & Supply Chain</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl/15 font-extrabold text-slate-800 tracking-tight leading-tight">
                Services built for a{' '}
                <span className="text-orange-500 ">
                  healthier kitchen
                </span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From morning essentials delivered in 15 minutes to weekly recurring vegetable baskets, Grocify simplifies how modern households and cafes procure clean, nutritious food.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Request Bulk Order
                  <IoArrowForward className="text-lg" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-2xl border border-slate-200/90 shadow-sm transition-all"
                >
                  Explore How It Works
                </a>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-300/20 to-emerald-200/20 rounded-full blur-2xl -z-10" />
                <img
                  src={img8}
                  alt="Grocify Service Overview"
                  className="w-full h-auto max-h-[360px] md:max-h-[600px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CORE SERVICES GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mt-2 tracking-tight">
            Comprehensive Grocery Solutions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Every service is optimized for freshness, speed, and affordability from producer straight to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceOfferings.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index} 
                className={`bg-white rounded-3xl p-7 border ${service.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${service.iconColor} flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform`}> 
                      <Icon />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                    {service.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mt-1 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-orange-600 group-hover:text-orange-700">
                  <span>Learn more</span>
                  <IoArrowForward className="text-sm group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* ================= HOW IT WORKS (STEPPER) ================= */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-xl mx-auto mb-14 relative z-10">
            <span className="text-orange-400 font-bold uppercase tracking-widest text-xs">
              Simple & Transparent
            </span>
            <h2 className="text-2xl sm:text-4xl font-black mt-2">
              How Grocify Works For You
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              From fresh harvest to doorstep in 3 uncomplicated steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <span className="text-4xl font-black text-orange-400/80 mb-4 block">
                  {step.step}
                </span>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= CALL TO ACTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl shadow-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Need personalized or custom deliveries?
            </h3>
            <p className="text-orange-100 mt-2 text-sm sm:text-base max-w-xl">
              Talk with our grocery concierge team for customized dietary packs, weekly farm boxes, or restaurant supply contracts.
            </p>
          </div>

          <Link
            to="/contact"
            className="whitespace-nowrap bg-white text-orange-600 hover:bg-slate-50 font-bold px-8 py-3.5 rounded-2xl shadow-md transition-all active:scale-95"
          >
            Contact Concierge
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;