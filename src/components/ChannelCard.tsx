import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { VideoType } from "../types";
import { demoProfilePicture } from "../utils/constants";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type ChannelCardProps = {
  channelDetail: VideoType;
  marginTop?: string;
};

const ChannelCard = ({ channelDetail, marginTop }: ChannelCardProps) => {
  return (
    <Card 
      className={`bg-transparent border-none shadow-none flex justify-center items-center w-full md:w-[320px] m-auto ${marginTop}`}
    >
      <CardContent className="flex flex-col justify-center items-center text-center p-0">
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
          <div className="p-1 rounded-full border border-zinc-700 mb-4 hover:border-primary transition-colors duration-300">
            <Avatar className="h-[180px] w-[180px]">
              <AvatarImage 
                  src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                  className="object-cover"
                  alt={channelDetail?.snippet?.title}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="text-white font-bold text-lg flex items-center gap-1 hover:text-primary transition-colors">
              {channelDetail?.snippet?.title}
              <CheckCircle className="w-4 h-4 text-zinc-400" />
            </h6>
            {channelDetail?.statistics?.subscriberCount && (
              <p className="text-zinc-500 text-sm font-medium mt-1">
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
              </p>
            )}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ChannelCard;
