import {Component, Input, OnInit} from '@angular/core';
import {ChannelComments} from "../../../../services/UPload.model";
import {UPloadService} from "../../../../services/UPload.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {faFlag} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-channel-comments',
  templateUrl: './channel-comments.component.html',
  styleUrls: ['./channel-comments.component.scss']
})
export class ChannelCommentsComponent implements OnInit {
  faFlag = faFlag;
  myFormGroup: FormGroup;

  comments: ChannelComments[] = [];

  @Input() channel_id!: number;

  lang = localStorage.getItem('lang') || 'pt'

  title = "Comentários"
  url = "https://robohash.org/";
  set = "?set=set4&bgset=bg2"
  random = (Math.random() + 1).toString(36).substring(7);

  constructor(private UPload: UPloadService, private formBuilder: FormBuilder) {
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
      channel_id:this.channel_id,
      date: "0 segundos"
    });
  }

  ngOnInit(): void {
    this.UPload.getChannelComments(this.channel_id).subscribe((comments) => {
      this.comments = comments as ChannelComments[];
      console.log(this.comments)
    })
  }

  handleCommentFormSubmit(data: { name: string; email: string; comment: string }, userPost: any){

    console.log(data)
    const nameInput = data.name.valueOf()
    console.log(nameInput)
    const emailInput = data.email.valueOf()
    const messageInput = data.comment.valueOf()


    if (this.reloadPage(nameInput, emailInput, messageInput)) {
      this.UPload.commentChannel(this.channel_id, data.name, data.email, data.comment).subscribe((response) => {
        this.comments.unshift({
          name: data.name,
          comment: data.comment,
          id: parseInt("0"),
          channel_id: this.channel_id,
          date: "0 segundos"
        })
        userPost.form.reset();
      })
    } else {
      this.errorMessage();
    }
  }

  handleReport(id: number) {
    this.UPload.reportChannelComment(id).subscribe();
    console.log(id)

    let toast: any = document.getElementById("snackbar");
    toast.className = "show";
    setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
  }

  // @ts-ignore
  reloadPage(nameInput, emailInput, messageInput) {
    return  nameInput.length > 2 && emailInput.length > 2 && messageInput.length > 2
  }

  errorMessage() {
    alert('erro')
  }
}

