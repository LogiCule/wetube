import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "../components";
import { Menu } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-black p-4 border-b border-zinc-800 shadow-md">
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 rounded-full hover:bg-zinc-800 text-white transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="flex items-center gap-1 group">
          <img src={logo} alt="logo" height={45} className="h-8 w-auto object-contain" />
          <h1 className="text-2xl font-bold tracking-tighter text-white font-sans">
            We<span className="text-primary">Tube</span>
          </h1>
        </Link>
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
