import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideosService} from "../../services/videos.service";
import {Video} from "./video.model";

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  videos: Video[] = [];
  index: any;

  constructor(private route: ActivatedRoute, private video: VideosService) {}

  ngOnInit(): void {
    this.video.getVideoTest().subscribe((videos) => {
      this.videos = videos as Video[];
    });
  }

}
