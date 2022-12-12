import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {VideoDetails} from "../../../services/UPload.model";


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  video: VideoDetails | undefined;


  constructor(private route: ActivatedRoute, private UPload: UPloadService, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.UPload.getVideoDetails(id).subscribe((video) => {
      this.video = (video as VideoDetails[])[0];
    });
  }



}
