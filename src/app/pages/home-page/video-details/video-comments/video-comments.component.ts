import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {VideoComments} from "../../../../services/UPload.model";


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
  @Input() video_id!: string;


  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {
    this.UPload.getVideoComments(this.video_id).subscribe((videoComments) => {
      this.videoComments = videoComments as VideoComments[];
    })
  }

  handleCommentFormSubmit(data: {name: string, email: string, message: string}) {
    console.log(data)
    this.UPload.commentVideo(parseInt(this.video_id), data.name, data.email, data.message).subscribe((response) =>
      console.log(response)
    )
  }

}


