import { FaTag } from "react-icons/fa";

const AdCard = ({ title, subtitle, cta, variant = "red", delay = "0s" }) => (
  <div
    className={`animate-fade-in-up opacity-0 rounded-xl p-6 md:p-8 flex flex-col justify-center min-h-[140px] md:min-h-[160px] cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${
      variant === "red"
        ? "bg-gradient-to-br from-red-600 to-red-800 text-white"
        : "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    }`}
    style={{ animationDelay: delay, animationFillMode: "forwards" }}
  >
    <span className="inline-flex items-center gap-2 text-sm font-medium opacity-90 mb-2">
      <FaTag /> Offer
    </span>
    <h3 className="text-xl md:text-2xl font-bold mb-1">{title}</h3>
    <p className="text-sm opacity-90 mb-4">{subtitle}</p>
    <span className="text-sm font-semibold underline underline-offset-2 hover:no-underline">
      {cta} →
    </span>
  </div>
);

/** Ad block 1: two promo cards (use after Banner) */
export const AdsGrid = () => (
  <section className="container-process py-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AdCard
        title="Summer Sale – Up to 40% Off"
        subtitle="On ACs, coolers & home appliances"
        cta="Shop now"
        variant="red"
        delay="0.1s"
      />
      <AdCard
        title="New Arrivals – Mobiles & TV"
        subtitle="Latest brands with easy EMI"
        cta="Explore"
        variant="dark"
        delay="0.2s"
      />
    </div>
  </section>
);

/** Ad block 2: full-width promo strip (use after Process) */
export const AdsStrip = () => (
  <section className="container-process py-6">
    <div
      className="animate-fade-in-up rounded-xl overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white p-6 md:p-10 text-center cursor-pointer hover:opacity-95 transition-opacity"
      style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-2">Free Delivery on Orders Above ₹499</h3>
      <p className="text-white/90 mb-4">Use code WELCOME10 for extra 10% off</p>
      <span className="inline-block bg-white text-red-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
        Apply & Shop
      </span>
    </div>
  </section>
);

const AdsSection = () => (
  <>
    <AdsGrid />
    <AdsStrip />
  </>
);

export default AdsSection;
