import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {ChannelComments, VideoComments} from "../../../../services/UPload.model";

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {

  videoComments: VideoComments[] = [];
  title = "Comentários"
  url = "https://robohash.org/";
  set = "?set=set4&bgset=bg2";
  random = (Math.random() + 1).toString(36).substring(7);
  @Input() videoID!: number;


  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {
    this.UPload.getVideoComments(this.videoID).subscribe((videoComments) => {
      this.videoComments = videoComments as VideoComments[];
    })
  }

}
