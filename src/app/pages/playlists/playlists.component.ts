import { Component, OnInit } from '@angular/core';
import {Playlists} from "../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: Playlists[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getPlaylists().subscribe((playlists) => {
      this.playlists = playlists as Playlists[];
    })
  }
}
