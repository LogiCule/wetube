import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full w-full py-10">
      <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
    </div>
  );
};

export default Loader;
