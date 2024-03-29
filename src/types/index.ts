export type VideoType = {
  id: { kind: string; videoId?: string; channelId?: string };
  kind: string;
  statistics?: {
    subscriberCount: string;
    viewCount: string;
    likeCount: string;
  };

  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
    };
    title: string;
  };
};
