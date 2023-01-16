import {Component, OnInit} from '@angular/core';
import {Playlists} from "../../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {
  playlistDetails: Playlists[] = [];
  image_url = '/hqdefault.jpg'

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.UPload.getPlaylist(id).subscribe((playlistDetails) => {
      this.playlistDetails = playlistDetails as Playlists[];
    })
  }
}
