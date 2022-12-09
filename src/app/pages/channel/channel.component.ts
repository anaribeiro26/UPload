import {Component, OnInit} from '@angular/core';
import {VideosService} from "../../services/videos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  channels: any;

  constructor(private route: ActivatedRoute, private video: VideosService) {
  }

  ngOnInit(): void {
    //     this.video.getChannels().subscribe((channels) => {
    //   this.channels = <any[]>channels;
    // })
  }
}
