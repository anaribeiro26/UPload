import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {VideoComments} from "../../../services/UPload.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {faFlag} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {
  faFlag = faFlag;
  myFormGroup: FormGroup;

  videoComments: VideoComments[] = [];

  @Input() video_id!: string;

  lang = localStorage.getItem('lang') || 'pt'

  url = "https://robohash.org/";
  set = "?set=set4&bgset=bg2";

  random = (Math.random() + 1).toString(36).substring(7);

  constructor(private route: ActivatedRoute, private UPload: UPloadService, private formBuilder: FormBuilder) {
    this.myFormGroup = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2)]],
      comment: ['', [
        Validators.required,
        Validators.minLength(2)]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      id: "0",
      video_id: parseInt(this.video_id),
      date: "0 segundos"
    });
  }

  ngOnInit(): void {
    this.loadVideoComments(this.video_id)
  }

  ngOnChanges(): void {
    this.loadVideoComments(this.video_id)
  }

  loadVideoComments(id: string) {
    this.UPload.getVideoComments(this.video_id).subscribe((videoComments) => {
      this.videoComments = videoComments as VideoComments[];
    })
  }

  handleCommentFormSubmit(data: { name: string; email: string; comment: string }, userPost: any) {
    console.log('data ' + data)
    const nameInput = data.name.valueOf()
    console.log('nameInput ' + nameInput)
    console.log('data.email.valueOf() ' + data.email.valueOf())
    console.log('data.comment.valueOf() ' + data.comment.valueOf())
    const emailInput = data.email.valueOf()
    const messageInput = data.comment.valueOf()

    if (this.reloadPage(nameInput, emailInput, messageInput)) {
      this.UPload.commentVideo(parseInt(this.video_id), data.name, data.email, data.comment).subscribe((response) => {
        this.videoComments.unshift({
          name: data.name,
          comment: data.comment,
          email: data.email,
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
    return  nameInput.length > 2 && emailInput.length > 2 && messageInput.length > 2
  }

  errorMessage() {
    alert('erro')
  }

  handleReport(id: string) {
    this.UPload.reportVideoComment(parseInt(id)).subscribe();
    console.log(id)

    let toast: any = document.getElementById("snackbar");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
  }
}
