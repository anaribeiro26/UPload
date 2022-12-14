import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {ChannelVideos} from "../../../services/UPload.model";

@Component({
  selector: 'app-channel-videos',
  templateUrl: './channel-videos.component.html',
  styleUrls: ['./channel-videos.component.scss']
})
export class ChannelVideosComponent implements OnInit {
  videos: ChannelVideos[] = [];
  image_url = '/hqdefault.jpg'

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getChannelVideos().subscribe((videos) => {
      this.videos = videos as ChannelVideos[];
    })
  }

}
