import { ChannelCard, VideoCard, Loader } from ".";
import { VideoType } from "../types";

type VideosProps = {
  videos: VideoType[];
  direction?: "row" | "column";
  loading?: boolean;
};

const Videos = ({ videos, direction = "row", loading }: VideosProps) => {
  if (loading) return <Loader />;
  
  if (!videos?.length) return <div className="text-white text-sm">No videos found</div>;

  return (
    <div className={`
      ${direction === "column" 
        ? "flex flex-col gap-4" 
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      }
    `}>
      {videos.map((video, index) => (
        <div key={index} className="w-full">
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
