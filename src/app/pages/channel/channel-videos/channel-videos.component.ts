import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ChannelVideos} from "../../../services/UPload.model";

@Component({
  selector: 'app-channel-videos',
  templateUrl: './channel-videos.component.html',
  styleUrls: ['./channel-videos.component.scss']
})
export class ChannelVideosComponent implements OnInit {
  videos: ChannelVideos | undefined;
  image_url = '/hqdefault.jpg'
  @Input() channel_id!: number;

  constructor(private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getChannelVideos(this.channel_id).subscribe((videos) => {
      this.videos = videos[0];
    })
  }

}
