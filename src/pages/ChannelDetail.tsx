import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

// import { Vidoes, ChannelCard } from "../components";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { ChannelCard, Videos } from "../components";
import { VideoType } from "../types";

const ChannelDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [channelDetail, setChannelDetail] = useState(null);

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

  console.log({ channelDetail, videos });

  if (!channelDetail) return null;
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,75,1) 35%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
      </Box>
      <Box display={"flex"} p="2">
        {/* <Box sx={{ mr: { sm: "100px" } }} /> */}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
