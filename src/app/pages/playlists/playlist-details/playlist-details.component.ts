import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {Playlists} from "../../../services/UPload.model";

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {
  playlistDetails: Playlists[] = [];

  image_url = '/hqdefault.jpg'

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    let title = this.route.snapshot.params['title'];
    this.UPload.getPlaylist(title).subscribe((playlistDetails) => {
      this.playlistDetails = (playlistDetails as Playlists[]).map((playlists : Playlists) => {
        return {...playlists, title: playlists.title.replace(/\s/g, ' ')}
      });
    })
  }
}
