import { IoMenuSharp } from "react-icons/io5";

const SubNavBar = () => {
  return (
    <section className="bg-red-600 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      <div className="container-process py-3">
        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white">
          <div className="flex items-center gap-2 text-lg md:text-xl font-medium cursor-pointer hover:opacity-90 transition-opacity">
            <IoMenuSharp className="text-2xl" />
            <span>Menu</span>
          </div>
          <div className="flex flex-1 flex-wrap items-center gap-3 min-w-0">
            <select className="bg-white text-black rounded-lg px-4 py-3 w-full sm:w-56 border-0 focus:ring-2 focus:ring-white/50 outline-none cursor-pointer">
              <option value="">LED TV</option>
            </select>
            <input
              type="text"
              className="flex-1 min-w-[12rem] max-w-md bg-white text-black rounded-lg px-4 py-3 border-0 placeholder:text-gray-500 focus:ring-2 focus:ring-white/50 outline-none"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubNavBar