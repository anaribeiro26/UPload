export interface Channels {
  title: string;
  categories: string;
  categories_id: string;
  description: string;
  header: string;
  logo: string;
  id: number;
}

export interface ChannelVideos {
  channel: string;
  id: string;
  video: string;
  channel_id: number;
  categories: string;
  description: string;
  tags: string;
  title: string;
  categories_id: string;
  tags_id: number;
  date: string;
  duration: string;
}

export interface Videos {
  channel: string;
  categories: string;
  date: string;
  description: string;
  id: string;
  tags: string;
  video: string;
  title: string;
  duration: string;
  canal_id: string;
  tags_id: string;
}

export interface VideoDetails {
  id: string;
  categories: string;
  tags: string;
  description: string;
  date: string;
  video: string;
  title: string;
  categories_id: string;
  tags_id: string;
  channel: string;
  channel_id: string;

}

export interface Playlists {
  title: string;
  category: string;
  date: string;
  id: number;
}

export interface VideosPlaylist {
  video: string;
  channel: string;
  category: string;
  description: string;
  duration: string;
  tags: string;
  title: string;
  categories_id: string;
  tags_id: string;
  channel_id: string;
  date: string;
  id: number;

}

export interface Tags {
  name: string;
  id: number;
}

export interface TagVideos {
  channel: string;
  video_id: number;
  videos: string;
  channel_id: number;
  categories: string;
  description: string;
  tags: string;
  title: string;
  categories_id: string;
  tags_id: number;
  date: string;
  duration: string;
}



