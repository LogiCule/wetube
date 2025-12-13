import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { ChannelCard, Videos } from "../components";
import { VideoType } from "../types";

const ChannelDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [channelDetail, setChannelDetail] = useState<VideoType | null>(null);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  if (!channelDetail) return null;

  return (
    <div className="min-h-[95vh] bg-black">
      <div>
        <div 
          className="h-[300px] z-10"
          style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,75,1) 35%, rgba(0,212,255,1) 100%)"
          }} 
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </div>
      <div className="flex p-4">
        <div className="hidden sm:block sm:mr-[100px]" />
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
