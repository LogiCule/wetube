import { useEffect, useState } from "react";
import { SideBar, Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { VideoType } from "../types";

const Feed = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Home");

  useEffect(() => {
    const query = selectedCategory === "Home" ? "New" : selectedCategory;
    fetchFromAPI(`search?part=snippet&q=${query}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <div className="flex flex-row min-h-[calc(100vh-80px)]">
      <SideBar
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
      
      <div 
        className="flex-1 overflow-y-auto p-4 w-full pl-[90px] md:pl-4" 
      >
        <h4 className="mb-4 text-3xl font-bold text-white">
          {selectedCategory} <span className="text-primary">Videos</span>
        </h4>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
