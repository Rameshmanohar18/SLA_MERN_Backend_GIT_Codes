import { FaSearch, FaShoppingBag, FaCreditCard, FaTruck, FaHeadset } from "react-icons/fa";

const ProcessSection = () => {
  const steps = [
    { icon: FaSearch, title: "Browse", desc: "Explore categories and find what you need" },
    { icon: FaShoppingBag, title: "Choose", desc: "Add to cart and compare products" },
    { icon: FaCreditCard, title: "Order", desc: "Secure checkout and payment" },
    { icon: FaTruck, title: "Delivery", desc: "Fast shipping to your doorstep" },
    { icon: FaHeadset, title: "Support", desc: "24/7 help and easy returns" },
  ];

  return (
    <section className="border-y border-gray-200 bg-gray-50/80 py-12 md:py-16">
      <div className="container-process">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2 animate-fade-in-up">
          How It Works
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
          Simple steps from browse to delivery
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="animate-fade-in-up opacity-0 flex flex-col items-center text-center w-36 md:w-44 group"
                style={{ animationDelay: `${0.1 + i * 0.08}s`, animationFillMode: "forwards" }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-red-600 text-white flex items-center justify-center text-xl md:text-2xl mb-3 group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <Icon />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 rounded-full bg-red-600 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.5 + i * 0.05}s`, animationFillMode: "forwards" }}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
