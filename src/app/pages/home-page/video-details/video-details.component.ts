import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {VideoDetails} from "../../../services/UPload.model";
import {faThumbsUp, faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faThumbsUp as faThumbsUpSolid, faThumbsDown as faThumbsDownSolid} from "@fortawesome/free-solid-svg-icons";


//@ts-ignore

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video: VideoDetails | undefined;
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faThumbsDownSolid = faThumbsDownSolid;
  faThumbsUpSolid = faThumbsUpSolid;



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






