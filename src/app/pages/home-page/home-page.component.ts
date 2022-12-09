import { Component, OnInit } from '@angular/core';
import {VideosService} from "../../services/videos.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  videos: any

  constructor(private route: ActivatedRoute, private video: VideosService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.video.getVideos(id).subscribe((videos) => {
      this.videos = <any[]>videos
    })
  }

}

