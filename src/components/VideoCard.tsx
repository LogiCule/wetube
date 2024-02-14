import { VideoType } from "../types";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl } from "../utils/constants";
import { demoVideoUrl } from "../utils/constants";
import { demoVideoTitle } from "../utils/constants";
import { demoChannelTitle } from "../utils/constants";
import { demoChannelUrl } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}: {
  video: VideoType;
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "1rem 1rem 0 0",
        overflow: "hidden",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{}}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: 180,
            overflow: "hidden",
            ":hover": { scale: "1.05" },
          }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "78px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#fff">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color="gray">
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
