import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faThumbsUp as faThumbsUpSolid, faThumbsDown as faThumbsDownSolid} from "@fortawesome/free-solid-svg-icons";
import {
  Channels,
  ChannelVideos,
  VideoDetails,
  Videos,
  VideosPlaylist,
  Taxonomies,
  TaxonomyVideos,
  Playlists,
  ChannelComments,
  VideoComments,
  FlagCounter,
  FlaggingRequest,
  FlaggingResponse,
  Thematics,
  ThematicVideos,
} from "./UPload.model";
import {Observable} from "rxjs";

let prefix: any;
let lang = localStorage.getItem('lang') || 'pt'
if (lang == 'pt') {
  prefix = "/pt-pt/api";
} else if (lang == 'en') {
  prefix = "/en/api";
} else {
  prefix = "/pt-pt/api";
}

let BASE_URL = "https://dev-project-upskill-grupo05.pantheonsite.io"
const BASE_URL_FLAGGING = "https://dev-project-upskill-grupo05.pantheonsite.io/entity/flagging"
const BASE_URL_COMMENTS = "https://dev-project-upskill-grupo05.pantheonsite.io/comment"
let icon = faThumbsUp;


@Injectable({
  providedIn: 'root'
})

export class UPloadService {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faThumbsDownSolid = faThumbsDownSolid;
  faThumbsUpSolid = faThumbsUpSolid;
  icon: any = faThumbsUp;
  //videosPlaylist: VideosPlaylist[] = [];

  favorites: number[] = JSON.parse(localStorage.getItem("my_favorites") || "[]")


  constructor(private http: HttpClient) {
  }

  getThematics() {
    return this.http.get(BASE_URL + prefix + "/artigos")
  }

  getThematic(id: number) {
    return this.http.get<Thematics[]>(BASE_URL + prefix + "/artigos/" + id)
  }

  getThematicVideos(tags_id: any) {
    return this.http.get<ThematicVideos[]>(BASE_URL + prefix + "/videos/artigo/" + tags_id)
  }

  getSuggestedThematics() {
    return this.http.get(BASE_URL + prefix + "/artigos/aleatorios")
  }

  //getThematicVideos() {
  //  return new Observable(observer => {
  //    this.http.get<ThematicVideos[]>(BASE_URL + "/videos").subscribe((videos: Videos[]) => {
  //      observer.next(videos.filter((video: Videos) => {
  //        return this.favorites.includes(video.id)
  //      }))
  //    });
  //  })
  //}

  getChannel(title: string) {
    return this.http.get<Channels[]>(BASE_URL + prefix + "/canais/" + title)
  }

  getChannels() {
    return this.http.get(BASE_URL + prefix + "/canais")
  }

  getSuggestedChannels() {
    return this.http.get(BASE_URL + prefix + "/canais/sugeridos")
  }

  getChannelComments(channel_id: number) {
    return this.http.get<ChannelComments[]>(BASE_URL + prefix + "/comentarios/canal/" + channel_id)
  }

  getChannelVideos(channel_id: number) {
    return this.http.get<ChannelVideos[]>(BASE_URL + prefix + "/videos/canal/" + channel_id)
  }

  getSuggestedVideos() {
    return this.http.get(BASE_URL + prefix + "/videos/sugeridos")
  }

  getVideos() {
    return this.http.get(BASE_URL + prefix + "/videos")
  }

  getVideoComments(video_id: string) {
    return this.http.get<VideoComments[]>(BASE_URL + prefix + "/comentarios/video/" + video_id)
  }

  getVideoDetails(title: string) {
    return this.http.get<VideoDetails[]>(BASE_URL + prefix + "/videos/" + title)
  }

  getNumberOfLikes(id: string) {
    return this.http.get<FlagCounter[]>(BASE_URL + prefix + "/likes/" + id)
  }

  getNumberOfDislikes(id: string) {
    return this.http.get<FlagCounter[]>(BASE_URL + prefix + "/dislikes/" + id)
  }

  getPlaylist(id: number) {
    return this.http.get(BASE_URL + prefix + "/playlists/" + id)
  }

  getPlaylists() {
    return this.http.get(BASE_URL + prefix + "/playlists")
  }

  getPlaylistVideos(id: number) {
    return this.http.get<VideosPlaylist[]>(BASE_URL + prefix + "/videos/playlist/" + id)

  }

  getSuggestedTags() {
    return this.http.get<Taxonomies[]>(BASE_URL + prefix + "/tags/sugeridas")
  }

  getTag(name: string) {
    return this.http.get<Taxonomies[]>(BASE_URL + prefix + "/tags/" + name)
  }

  getTagVideos(tags_id: number) {
    return this.http.get<TaxonomyVideos[]>(BASE_URL + prefix + "/videos/tag/" + tags_id)
  }

  getCategory(name: string) {
    return this.http.get<Taxonomies[]>(BASE_URL + prefix + "/categorias/" + name)
  }

  getCategoryVideos(category_id: number) {
    return this.http.get<TaxonomyVideos[]>(BASE_URL + prefix + "/videos/categoria/" + category_id)
  }

  getFavorites() {
    return new Observable(observer => {
      this.http.get<Videos[]>(BASE_URL + prefix + "/videos").subscribe((videos: Videos[]) => {
        observer.next(videos.filter((video: Videos) => {
          return this.favorites.includes(video.id)
        }))
      });
    })
  }


  toggleFavorite(id: number) {
    if (!this.isFavorite(id)) {
      this.favorites.push(id)
    } else {
      let index = this.favorites.indexOf(id);
      this.favorites.splice(index, 1)
    }
    localStorage.setItem("my_favorites", JSON.stringify(this.favorites));
  }

  isFavorite(id: number): boolean {
    return this.favorites.includes(id);
  }

  commentVideo(id: number, name: string, email: string, message: string) {
    const body = {
      "entity_id": [
        {
          "target_id": id
        }
      ],
      "entity_type": [
        {
          "value": "media"
        }
      ],
      "comment_type": [
        {
          "target_id": "video_comments"
        }
      ],
      "field_name": [
        {
          "value": "field_comentarios_video"
        }
      ],
      "field_nome_comentario": [
        {
          "value": name
        }
      ],
      "field_email_video": [
        {
          "value": email
        }
      ],
      "comment_body": [
        {
          "value": message,
          "format": "plain_text"
        }
      ]

    }

    return this.http.post(BASE_URL_COMMENTS, body)
  }

  reportChannelComment(id: number) {
    const body =
      {

        "entity_id":[id],

        "entity_type":["comment"],

        "flag_id":[{"target_id": "comment_report","target_type": "flag"}],

        "uid": ["0"]

      }

      return this.http.post(BASE_URL_FLAGGING, body)
  }


  reportVideoComment(id: number) {
    const body =
      {

        "entity_id":[id],

        "entity_type":["comment"],

        "flag_id":[{"target_id": "comment_report","target_type": "flag"}],

        "uid": ["0"]

      }

    return this.http.post(BASE_URL_FLAGGING, body)
  }

  reportVideo(id: string) {
    const body =
      {

        "entity_id":[id],

        "entity_type":["media"],

        "flag_id":[{"target_id": "video_report","target_type": "flag"}],

        "uid": ["0"]

      }

    return this.http.post(BASE_URL_FLAGGING, body)
  }


  commentChannel(id: number, name: string, email: string, message: string) {
    const body = {
      "entity_id": [
        {
          "target_id": id
        }
      ],
      "entity_type": [
        {
          "value": "node"
        }
      ],
      "comment_type": [
        {
          "target_id": "channel_comments"
        }
      ],
      "field_name": [
        {
          "value": "field_comentarios_canal"
        }
      ],
      "field_nome": [
        {
          "value": name
        }
      ],
      "field_email": [
        {
          "value": email
        }
      ],
      "comment_body": [
        {
          "value": message,
          "format": "plain_text"
        }
      ]

    }

    return this.http.post(BASE_URL_COMMENTS, body)
  }

  likeVideo(id: string) {
    const body: FlaggingRequest = {
      entity_id: [id],
      entity_type: ["media"],
      flag_id: [
        {
          "target_id": "like",
          "target_type": "flag",
        }
      ],
      uid: ["0"]
    }

    return this.http.post<FlaggingResponse>(BASE_URL_FLAGGING, body)
  }


  removeLikeOrDislike(id: number) {
    return this.http.delete(`${BASE_URL_FLAGGING}/${id}`)
  }

  dislikeVideo(id: string) {
    const body: FlaggingRequest = {
      entity_id: [id.toString()],
      entity_type: ["media"],
      flag_id: [
        {
          "target_id": "dislike",
          "target_type": "flag",
        }
      ],
      uid: ["0"]
    }
    return this.http.post<FlaggingResponse>(BASE_URL_FLAGGING, body)
  }

}
