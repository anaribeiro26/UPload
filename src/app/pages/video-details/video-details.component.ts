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

  constructor(private route: ActivatedRoute, private video: VideosService) {}

  ngOnInit(): void {
    this.video.getVideos().subscribe((videos) => {
      this.videos = videos as Video[];
    });
  }

}
