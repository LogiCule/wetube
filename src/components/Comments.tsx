import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { CommentType } from "../types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Loader from "./Loader";
import { ThumbsUp } from "lucide-react";

type CommentsProps = {
  videoId: string;
};

const Comments = ({ videoId }: CommentsProps) => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`commentThreads?part=snippet&videoId=${videoId}&maxResults=100`)
      .then((data) => {
        setComments(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching comments:", err);
        setLoading(false);
      });
  }, [videoId]);

  if (loading) return <Loader />;
  
  if (!comments?.length) return <div className="text-zinc-500 mt-10">No comments yet.</div>;

  return (
    <div className="mt-8">
      <h3 className="text-white font-bold text-xl mb-6">
        {comments.length} Comments
      </h3>
      <div className="flex flex-col gap-6">
        {comments.map((item) => {
          const {
            snippet: {
              topLevelComment: {
                snippet: {
                  authorDisplayName,
                  authorProfileImageUrl,
                  textDisplay,
                  likeCount,
                  publishedAt,
                },
              },
            },
          } = item;

          return (
            <div key={item.id} className="flex gap-4">
              <Avatar className="w-10 h-10 border border-zinc-700">
                <AvatarImage src={authorProfileImageUrl} alt={authorDisplayName} />
                <AvatarFallback>{authorDisplayName?.slice(0, 1).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-semibold text-sm">
                    {authorDisplayName}
                  </span>
                  <span className="text-zinc-500 text-xs text-nowrap">
                    {new Date(publishedAt).toLocaleDateString()}
                  </span>
                </div>
                {/* 
                  Using dangerouslySetInnerHTML because textDisplay can contain HTML entities like <br> or links 
                  returned from YouTube API.
                */}
                <p 
                    className="text-zinc-300 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: textDisplay }}
                />
                
                <div className="flex items-center gap-2 mt-1">
                  <ThumbsUp className="w-4 h-4 text-zinc-500" />
                  <span className="text-zinc-500 text-xs">{likeCount}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
