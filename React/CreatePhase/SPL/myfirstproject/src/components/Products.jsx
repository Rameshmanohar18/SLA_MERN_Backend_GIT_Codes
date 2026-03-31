const Products = () => {
  const listProducts = [
    {
      image: "./xkvbaU8P8D2MN2yX.webp",
      name: "Preethi iconic Grainders",
      price: "11,890",
      dashed: "100",
      offer: "20%",
      bestfeatures: ["Fast", "Compact", "Low Price"],
    },
    {
      image: "./RjFU89ple620xfpW.webp",
      name: "Preethi iconic New",
      price: "11,119",
      dashed: "119",
      offer: "10%",
      bestfeatures: ["Fast", "Compact", "Best Quality"],
    },
    {
      image: "./guB6FQnBGce4Sd01.webp",
      name: "TV LED",
      price: "11,119",
      dashed: "209",
      offer: "25%",
      bestfeatures: ["Fast", "Compact", "High End Price"],
    },
    {
      image: "./narwNUQXoqa3NO6D.webp",
      name: "Cooker",
      price: "11,119",
      dashed: "1000",
      offer: "40%",
      bestfeatures: ["Fast", "Compact", "Best"],
    },
  ];

  return (
    <section className="container-process py-10">
      <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">WHAT'S HOT</h1>
        <hr className="border-t-2 border-red-600 w-20" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {listProducts.map((e, i) => (
          <div
            key={i}
            className="animate-scale-in opacity-0 text-black border-2 border-red-400 rounded-lg p-4 flex flex-col items-center gap-4 bg-white hover:shadow-lg hover:border-red-500 transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${0.3 + i * 0.08}s`, animationFillMode: "forwards" }}
          >
            <div className="w-full aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img src={e.image} alt={e.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="text-center font-semibold text-lg">{e.name}</h3>
            <div className="flex flex-wrap gap-3 justify-center items-baseline">
              <span className="font-bold text-gray-900">₹{e.price}</span>
              <span className="text-red-600 text-sm"><del>₹{e.dashed}</del></span>
              <span className="bg-red-600 text-white text-xs font-medium px-2 py-0.5 rounded">{e.offer}</span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {e.bestfeatures.map((fe, j) => (
                <span key={j} className="bg-red-800 text-white text-xs px-2 py-1 rounded">
                  {fe}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products