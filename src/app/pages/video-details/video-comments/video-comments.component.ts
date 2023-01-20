import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {VideoComments} from "../../../services/UPload.model";
import {NgForm} from "@angular/forms";


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


  handleCommentFormSubmit(data: { name: string; email: string; message: string }, userPost: NgForm) {
    console.log(data)
    const nameInput = data.name.valueOf()
    console.log(nameInput)
    const emailInput = data.email.valueOf()
    const messageInput = data.message.valueOf()

    if (this.reloadPage(nameInput, emailInput, messageInput)) {
      this.UPload.commentVideo(parseInt(this.video_id), data.name, data.email, data.message).subscribe((response) => {
        this.videoComments.unshift({
          name: data.name,
          comment: data.message,
          id: "0",
          video_id: parseInt(this.video_id),
          date: "0 segundos"
        })
        userPost.form.reset();
      })
    } else {
      this.errorMessage();
    }

  }



  // @ts-ignore
  reloadPage(nameInput, emailInput, messageInput) {
    if (nameInput.length > 2 && emailInput.length > 2 && messageInput.length > 2 ) {
      return true
    } else {
      return false
    }
  }

  errorMessage() {
    alert('erro')
  }

}


