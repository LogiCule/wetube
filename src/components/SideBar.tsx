import { categories } from "../utils/constants";
import { useSidebar } from "../context/SidebarContext";

type SideBarProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const SideBar = ({ selected, setSelected }: SideBarProps) => {
  const { isOpen } = useSidebar();

  return (
    <div 
      className={`
        flex flex-col gap-2 p-2 h-[calc(100vh-80px)] overflow-y-auto scrollbar-none transition-all duration-300 bg-black border-r border-zinc-800
        fixed md:sticky top-[80px] left-0 z-40
        ${isOpen ? "w-[240px]" : "w-[72px]"} 
      `}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelected(category.name)}
          className={`
            group flex items-center gap-4 px-3 py-3 rounded-xl font-medium transition-all duration-200 outline-none border-none cursor-pointer
            ${
              category.name === selected
                ? "bg-primary text-white glow-active"
                : "bg-transparent text-gray-300 hover:bg-zinc-800 hover:text-white"
            }
            ${!isOpen && "justify-center px-0"}
          `}
        >
          <span
            className={`transition-colors ${
              category.name === selected ? "text-white" : "text-gray-300 group-hover:text-white"
            }`}
          >
            <category.icon className="h-6 w-6" />
          </span>
          
          <span
            className={`whitespace-nowrap overflow-hidden transition-all duration-200 ${
              isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 hidden"
            }`}
          >
            {category.name}
          </span>
        </button>
      ))}
      
      <div className="mt-auto pt-4 border-t border-zinc-800">
         {isOpen && (
            <p className="text-xs text-zinc-500 px-4">
              &copy; 2024 WeTube
            </p>
         )}
      </div>
    </div>
  );
};

export default SideBar;
