import { LineChart, Play, Sparkles, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col bg-gradient-to-b from-[#f990EF] via-[#9737ff] to-[#6681E2]   rounded-full p-4 space-y-6 shadow-lg">
      {[LineChart, Play, Sparkles, Users].map((Icon, index) => (
        <button
          key={index}
          className="group p-3 rounded-full transition-all duration-300 cursor-pointer relative"
        >
            <span className="absolute inset-0 bg-transparent rounded-full scale-0 group-hover:scale-100 group-hover:bg-white transition-transform duration-300"></span>
             <Icon
            className="relative z-10 text-white group-hover:text-purple-500 transition-colors duration-300"
            size={24}
          />
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
