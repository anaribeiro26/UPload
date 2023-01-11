import {Component, Input, OnInit} from '@angular/core';
import {VideosPlaylist} from "../../../services/UPload.model";
import {UPloadService} from "../../../services/UPload.service";

@Component({
  selector: 'app-playlist-videos',
  templateUrl: './playlist-videos.component.html',
  styleUrls: ['./playlist-videos.component.scss']
})
export class PlaylistVideosComponent implements OnInit {
  videosPlaylist: VideosPlaylist[] = [];
  image_url = '/hqdefault.jpg'
  @Input() id!: number;


  constructor(private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getPlaylistVideos(this.id).subscribe((videosPlaylist) => {
      this.videosPlaylist = videosPlaylist as VideosPlaylist[];
      const videoArray = this.videosPlaylist;
      videoArray.length
      console.log(videoArray.length)
    })
  }


}
