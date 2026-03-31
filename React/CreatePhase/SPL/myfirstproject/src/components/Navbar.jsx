import { FaMobileAlt, FaRegUser, FaShoppingCart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const logonew = "./sathya.webp";
  const logotext = "Logo Images";

  return (
    <header className="bg-white shadow-sm animate-fade-in">
      <div className="container-process py-2">
        <div className="flex flex-wrap justify-between items-center gap-4 py-3">
          <div className="shrink-0">
            <img src={logonew} alt={logotext} className="h-10 object-contain" />
          </div>
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-base md:text-lg font-medium">
            <a href="#mobiles" className="hover:text-red-600 transition-colors">Mobiles</a>
            <a href="#ac" className="hover:text-red-600 transition-colors">Air Conditioner</a>
            <a href="#washing" className="hover:text-red-600 transition-colors">Washing Machine</a>
            <a href="#deals" className="hover:text-red-600 transition-colors">Deals</a>
          </nav>
          <div className="flex items-center gap-4 md:gap-6 text-base md:text-lg shrink-0">
            <div className="flex items-center gap-2">
              <FaMobileAlt className="text-red-600" />
              <span>6379607758</span>
            </div>
            <FaLocationDot className="text-red-600 cursor-pointer hover:opacity-80 transition-opacity" />
            <FaRegUser className="cursor-pointer hover:text-red-600 transition-colors" />
            <FaShoppingCart className="cursor-pointer hover:text-red-600 transition-colors" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar