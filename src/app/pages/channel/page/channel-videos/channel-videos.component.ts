import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service";
import {TranslateService} from "@ngx-translate/core";
import {ChannelVideos} from "../../../../services/UPload.model";

@Component({
  selector: 'app-channel-videos',
  templateUrl: './channel-videos.component.html',
  styleUrls: ['./channel-videos.component.scss']
})
export class ChannelVideosComponent implements OnInit {

  videos: ChannelVideos[] = [];
  and:any;
  lang = localStorage.getItem('lang') || 'pt'
  image_url = '/hqdefault.jpg';
  @Input() channel_id!: number;

  constructor(private UPload: UPloadService, private translate: TranslateService) {

  }

  ngOnInit(): void {
    this.UPload.getChannelVideos(this.channel_id).subscribe((videos) => {
      this.videos = videos as ChannelVideos[];
      this.translate.get('upload.and').subscribe(and => {
        this.and = (and);
      });
      this.videos.forEach(video => {
        let word = video.date.split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} ${this.and} ${word[2]} ${word[3]}`
        }
      })
    })
  }
}
