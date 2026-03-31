import React from "react";

const ListProducts = () => {
  const list = [
    { name: "TV & Accessories", image: "./led_tv_1.webp" },
    { name: "Appliances", image: "./appliances_1.webp" },
    { name: "Mobiles & Wearables", image: "./mobiles_wearables.webp" },
    { name: "Kitc app", image: "./bGHHTPnlqBY0Xg7Y.webp" },
    { name: "Utilitys", image: "./ks2DCFJzS2rIKdqJ.webp" },
    { name: "Home Speakers", image: "./home_theatre_speakers.webp" },
    { name: "Laptop", image: "./laptop_tablet_accessories.webp" },
    { name: "Games", image: "./gadgets_gaming.webp" },
    { name: "personal Care", image: "./personal_care.webp" },
  ];

  return (
    <section className="border-b border-gray-200 bg-gray-50/50">
      <div className="container-process py-6">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {list.map((e, i) => (
            <div
              key={i}
              className="animate-fade-in-up opacity-0 flex flex-col items-center gap-3 w-28 md:w-36 cursor-pointer group"
              style={{ animationDelay: `${0.05 * (i + 1)}s`, animationFillMode: "forwards" }}
            >
              <div className="rounded-full border-2 border-red-600 p-1 group-hover:border-red-500 group-hover:shadow-md transition-all duration-300">
                <img
                  src={e.image}
                  alt={e.name}
                  className="rounded-full h-20 w-20 md:h-24 md:w-24 object-cover"
                />
              </div>
              <p className="text-center text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors line-clamp-2">
                {e.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListProducts