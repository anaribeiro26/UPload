export interface Thematics {
  title: string;
  tags: string;
  links: string;
  tags_id: string;
  description: string;
  teaser: string;
  header: string;
  thumbnail: string;
  id: number;
  logo: string
}

export interface ThematicVideos {
  channel: string;
  id: number;
  video: string;
  channel_id: number;
  categories: string;
  description: string;
  tags: string;
  title: string;
  logo: string;
  categories_id: string;
  tags_id: number;
  date: string;
  duration: string;
}

export interface Channels {
  title: string;
  categories: string;
  categories_id: string;
  header: string;
  description: string;
  logo: string;
  id: number;
}

export interface ChannelVideos {
  channel: string;
  id: number;
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

export interface ChannelComments {
  name: string;
  comment: string;
  channel_id: number;
  id: number;
  date: string;
}

export interface Videos {
  channel: string;
  categories: string;
  date: string;
  description: string;
  id: number;
  tags: string;
  logo: string;
  video: string;
  title: string;
  duration: string;
  channel_id: string;
  tags_id: string;
}

export interface VideoComments {
  name: string;
  comment: string;

  email: string;

  video_id: number;
  date: string;
  id: string;
}

export interface EntityID {
  target_id: number;
}

export interface EntityType {
  value: string;
}

export interface CommentType {
  target_id: string;
}


export interface ChannelCommentMachineName {
  value: string;
}



export interface ChannelCommentUsername {
  value: string;
}


export interface ChannelCommentBody {
  value: string;
  format: string;
}



export interface ChannelCommentRequest {
  entity_id: EntityID[];
  entity_type: EntityType[];
  comment_type: CommentType[];
  field_name: ChannelCommentMachineName[];
  field_nome: ChannelCommentUsername[];
  field_email: ChannelCommentUsername[];
  comment_body: ChannelCommentBody[];
}

export interface Comment {
  value: string;
}


export interface VideoDetails {
  id: string;
  categories: string;
  tags: string;
  description: string;
  date: string;
  video: string;
  logo: string;
  title: string;
  categories_id: string;
  tags_id: string;
  channel: string;
  channel_id: number;
  likes?: string;
  dislikes?: string;
}

export interface Playlists {
  title: string;
  category: string;
  date: string;
  id: number;
  videos: string;
  numberOfVideos?: number;
}

export interface VideosPlaylist {
  video: string;
  id: number;
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
  playlist_id: number;
}

export interface Taxonomies {
  name: string;
  id: number;
}

export interface TaxonomyVideos {
  channel: string;
  id: number;
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
  name: string;
}

export interface FlagCounter {
  count: string;
  id: string;
  entity_type: string;
}

export interface FlagInfo {
  target_id: string;
  target_type: string;
}

export interface FlaggingRequest {
  entity_id: string[];
  entity_type: string[];
  flag_id: FlagInfo[];
  uid: string[];
}

export interface Flag {
  value: string;
}

export interface FlaggingResponse {
  id: [Flag]
}



