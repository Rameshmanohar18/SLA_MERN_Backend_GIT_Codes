import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const links = {
    Shop: ["Mobiles", "TV & Audio", "Appliances", "Deals"],
    Help: ["Track Order", "Returns", "Shipping", "FAQs"],
    Company: ["About Us", "Careers", "Contact", "Stores"],
  };

  const social = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="container-process py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="./sathya.webp" alt="Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90 mb-4" />
            <p className="text-sm max-w-xs mb-4">
              Your one-stop shop for mobiles, appliances, and electronics. Great deals and fast delivery.
            </p>
            <div className="flex gap-4">
              {social.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-semibold text-white mb-4">{heading}</h4>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-wrap gap-6 justify-center md:justify-start text-sm">
          <a href="tel:6379607758" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaPhone /> 6379607758
          </a>
          <a href="mailto:support@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaEnvelope /> support@example.com
          </a>
          <span className="flex items-center gap-2">
            <FaMapMarkerAlt /> Store locator
          </span>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sathya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
