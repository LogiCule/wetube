import { ChannelCard, VideoCard } from ".";
import { VideoType } from "../types";
import { Stack, Box } from "@mui/material";

type VideosProps = {
  videos: VideoType[];
  direction?: "row" | "column";
};
const Videos = ({ videos, direction }: VideosProps) => {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={3}
    >
      {videos.map((video, index) => (
        <Box key={video.id.videoId || index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
