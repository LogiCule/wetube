import { Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";
import { VideoType } from "../types";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <div className="p-4 overflow-y-auto h-[90vh] flex-1">
      <h4 className="font-bold mb-4 text-3xl text-white">
        Search Results for <span className="text-primary">{searchTerm}</span> videos
      </h4>
      <Videos videos={videos} />
    </div>
  );
};

export default SearchFeed;
