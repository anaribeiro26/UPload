import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";
import {Playlists} from "../../services/UPload.model";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlists[] = [];
  playListFilters: Playlists[] = [];

  and: any;

  image_url = '/maxresdefault.jpg';

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getPlaylists().subscribe((playlists) => {
      this.playlists = (playlists as Playlists[]).map((playlists : Playlists) => {
        return {...playlists, title: playlists.title.replace(/\s/g, '-')}
      });

      let prevId = -1
      this.playlists.forEach((obj) => {
          if (obj.id !== prevId) {
            this.playListFilters.push(obj)
          }
          prevId = obj.id
          this.UPload.getPlaylistVideos(obj.id).subscribe((videosPlaylist) => {
            obj.numberOfVideos = videosPlaylist.length;
          })
        }
      )
    })
  }
}
