import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const BASE_URL = "https://dev-project-upskill-grupo05.pantheonsite.io/api"

@Injectable({
  providedIn: 'root'
})

export class UPloadService {
  favorites = JSON.parse(localStorage.getItem("my_favorites") || "[]")

  constructor(private http: HttpClient) {
  }

  getChannels(id: number) {
    return this.http.get(BASE_URL + "/canais" + id)
  }

  getVideos() {
    return this.http.get(BASE_URL + "/videos")
  }

  getVideoDetails(id: string) {
    return this.http.get(BASE_URL + "/videos/" + id)
  }

  getPlaylistVideos (id: number) {
    return this.http.get(BASE_URL + "/videos/playlist")
  }

  getVideosCanal (id: number) {
    return this.http.get(BASE_URL + "/videos/canal")
  }

  getPlaylists () {
    return this.http.get(BASE_URL + "/playlists")
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

}
