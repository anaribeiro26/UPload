import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../../services/UPload.service";
import {Channels} from "../../../../services/UPload.model";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  channels: Channels[] = [];

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    let title = this.route.snapshot.params['title'];
    this.UPload.getChannel(title).subscribe((channels) => {
      this.channels = (channels as Channels[]).map((channels : Channels) => {
        return {...channels, title: channels.title.replace(/\s/g, ' ')}
      });
    })
  }
}
