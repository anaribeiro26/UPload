import {Component, Input, OnInit} from '@angular/core';
import {ChannelComments} from "../../../../services/UPload.model";
import {UPloadService} from "../../../../services/UPload.service";

@Component({
  selector: 'app-channel-comments',
  templateUrl: './channel-comments.component.html',
  styleUrls: ['./channel-comments.component.scss']
})
export class ChannelCommentsComponent implements OnInit {
  comments: ChannelComments[] = [];
  title = "Comentários"
  url = "https://robohash.org/";
  set = "?set=set4&bgset=bg2"
  random = (Math.random() + 1).toString(36).substring(7);
  @Input() channel_id!: number;

  constructor(private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getChannelComments(this.channel_id).subscribe((comments) => {
      this.comments = comments as ChannelComments[];
      console.log(this.comments)
    })
  }

}

