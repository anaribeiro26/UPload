import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {TranslateService} from "@ngx-translate/core";
import {VideosPlaylist} from "../../../services/UPload.model";

@Component({
  selector: 'app-playlist-videos',
  templateUrl: './playlist-videos.component.html',
  styleUrls: ['./playlist-videos.component.scss']
})
export class PlaylistVideosComponent implements OnInit {
  videosPlaylist: VideosPlaylist[] = [];
  and: any;
  lang = localStorage.getItem('lang') || 'pt'
  image_url = '/hqdefault.jpg'
  @Input() id!: number;

  constructor(private UPload: UPloadService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.UPload.getPlaylistVideos(this.id).subscribe((videosPlaylist) => {
      this.videosPlaylist = videosPlaylist as VideosPlaylist[];
      this.translate.get('upload.and').subscribe(and => {
        this.and = (and);
      });
      const videoArray = this.videosPlaylist;
      console.log(videoArray.length)
      this.videosPlaylist.forEach(video => {
        let word = video.date.split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} ${this.and} ${word[2]} ${word[3]}`
        }
      })
    })
  }
}
