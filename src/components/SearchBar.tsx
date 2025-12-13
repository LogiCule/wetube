import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center w-full max-w-[200px] sm:max-w-md rounded-full bg-zinc-900 border border-zinc-800 focus-within:border-primary transition-colors overflow-hidden mr-4"
    >
      <input
        className="w-full bg-transparent p-3 pl-4 text-white outline-none placeholder:text-zinc-500"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="p-3 text-red-600 hover:bg-zinc-800 transition-colors"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchBar;
