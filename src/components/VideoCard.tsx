import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { VideoType } from "../types";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { Card, CardContent, CardHeader } from "./ui/card";

type VideoCardProps = {
  video: VideoType;
};

const VideoCard = ({ video: { id: { videoId }, snippet } }: VideoCardProps) => {
  return (
    <Card className="w-full bg-transparent border-none shadow-none group">
      <CardHeader className="p-0 relative overflow-hidden rounded-xl">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <div className="overflow-hidden rounded-xl aspect-video">
             <img 
               src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
               alt={snippet?.title}
               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
             />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="bg-black/80 h-[110px] px-1 py-3 transition-colors group-hover:bg-black">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
           <h3 className="text-white font-bold text-base line-clamp-2 leading-tight group-hover:text-primary transition-colors">
             {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
           </h3>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
           <p className="text-zinc-400 text-sm font-medium mt-1 flex items-center hover:text-white transition-colors">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle className="w-3 h-3 ml-1 text-zinc-400" />
           </p>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
