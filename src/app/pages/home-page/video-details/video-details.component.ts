import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {VideoDetails} from "../../../services/UPload.model";

//@ts-ignore

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video: VideoDetails | undefined;



  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.UPload.getVideoDetails(id).subscribe((video) => {
      this.video = video[0];
    });

  }
  getYoutubeId (youTubeURL: string) {
    let videoID = youTubeURL.split("https://www.youtube.com/watch?v=");
    return videoID[1];

  }
}






