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

export interface VideosPlaylist{

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
  id: string;

}

export interface ChannelVideos {
  channel: string;
  id: string;
  video: string;
  canal_id: string;
  categories: string;
  description: string;
  tags: string;
  title: string;
  categories_id: string;
  tags_id: string;
  date: string;
  duration: string;

}

export interface Playlists {
  title: string;
  categories: string;
  videos: string[];
}

export interface Channel {
  title: string;
  category: string[];
  description: string;
  header: string;
  logo: string;
  id: string;
}






