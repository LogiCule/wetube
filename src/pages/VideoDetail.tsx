import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { VideoType } from "../types";
import { CheckCircle } from "lucide-react";
import { Videos, Comments, Loader } from "../components";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState<VideoType | null>(null);
  const [relatedVideos, setRelatedVideos] = useState<VideoType[]>([]);
  const [relatedVideosLoading, setRelatedVideosLoading] = useState(true);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      setVideoData(data.items[0]);
    });

    setRelatedVideosLoading(true);
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setRelatedVideos(data.items || []);
        setRelatedVideosLoading(false);
      }
    ).catch(() => setRelatedVideosLoading(false));
  }, [id]);

  if (!videoData || !videoData.statistics) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoData;

  return (
    <div className="min-h-[95vh] bg-black text-white">
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Main Video Section */}
        <div className="flex-1">
          <div className="w-full">
            <div className="relative pt-[56.25%] overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-red-900/10">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="absolute top-0 left-0"
                controls
                width="100%"
                height="100%"
                playing
                config={{
                  youtube: {
                    playerVars: { showinfo: 1, origin: window.location.origin }
                  }
                }}
              />
            </div>
            
            <h5 className="text-white font-bold text-xl md:text-2xl mt-4 line-clamp-2 px-1">
              {title}
            </h5>
            
            <div className="flex flex-row justify-between items-center text-white py-2 px-1 mt-2 border-b border-zinc-800/50 pb-4">
              <Link to={`/channel/${channelId}`}>
                <h6 className="text-base md:text-lg font-medium flex items-center gap-2 hover:text-white transition-colors">
                  {channelTitle}
                  <CheckCircle className="w-4 h-4 text-gray-400" />
                </h6>
              </Link>
              
              <div className="flex flex-row gap-6 items-center opacity-70">
                <span className="text-sm md:text-base font-medium bg-white/10 px-3 py-1 rounded-full">
                  {parseInt(viewCount).toLocaleString()} views
                </span>
                <span className="text-sm md:text-base font-medium bg-white/10 px-3 py-1 rounded-full">
                  {parseInt(likeCount).toLocaleString()} likes
                </span>
              </div>
            </div>
          </div>
          {/* Comments Section */}
          <div className="mt-6 md:mt-2 px-2">
            {id && <Comments videoId={id} />}
          </div>
        </div>

        {/* Related Videos */}
        <div className="px-2 py-5 md:py-1 flex flex-col justify-center items-center md:items-start w-full md:w-auto">
          <Videos videos={relatedVideos} direction="column" loading={relatedVideosLoading} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
