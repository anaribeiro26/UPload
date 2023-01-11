import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Channels, ChannelVideos, VideoDetails, VideosPlaylist, Tags, TagVideos, Playlists} from "./UPload.model";

const BASE_URL = "https://dev-project-upskill-grupo05.pantheonsite.io/api"


@Injectable({
  providedIn: 'root'
})

export class UPloadService {

  videosPlaylist: VideosPlaylist[] = [];

  favorites = JSON.parse(localStorage.getItem("my_favorites") || "[]")
  favourites: number[] = [];

  constructor(private http: HttpClient) {
  }

  getChannel(id: number) {
    return this.http.get<Channels[]>(BASE_URL + "/canais/" + id)
  }

  getChannels() {
    return this.http.get(BASE_URL + "/canais")
  }

  getChannelVideos(channel_id: number) {
    return this.http.get<ChannelVideos[]>(BASE_URL + "/videos/canal/" + channel_id)
  }

  getVideos() {
    return this.http.get(BASE_URL + "/videos")
  }

  getVideoDetails(id: string) {
    return this.http.get<VideoDetails[]>(BASE_URL + "/videos/" + id)
  }

  getPlaylist(id: number) {
    return this.http.get(BASE_URL + "/playlists/" + id)
  }

  getPlaylists() {
    return this.http.get(BASE_URL + "/playlists")
  }

  getPlaylistVideos(id: number) {
    return this.http.get<VideosPlaylist[]>(BASE_URL + "/videos/playlist/" + id)
  }




  getTag(id: number) {
    return this.http.get<Tags[]>(BASE_URL + "/tags/" + id)
  }

  getTagVideos(tags_id: number) {
    return this.http.get<TagVideos[]>(BASE_URL + "/videos/tag/" + tags_id)
  }



  // getFavourites() {
  //   return this.http.get(BASE_URL + "/videos?ids="+ this.favourites.join(','));
  // }


      toggleFavorite(id: string) {
        if (!this.isFavorite(id)) {
          this.favorites.push(id)
        } else {
          let index = this.favorites.indexOf(id);
          this.favorites.splice(index, 1)
        }
        localStorage.setItem("my_favorites", JSON.stringify(this.favorites));
      }

      isFavorite(id: string): boolean {
        return this.favorites.includes(id);
      }

}
