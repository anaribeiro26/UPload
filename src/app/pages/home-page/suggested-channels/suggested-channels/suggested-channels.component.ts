import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service";
import {Channels, Videos} from "../../../../services/UPload.model";

@Component({
  selector: 'app-suggested-channels',
  templateUrl: './suggested-channels.component.html',
  styleUrls: ['./suggested-channels.component.scss']
})
export class SuggestedChannelsComponent implements OnInit {
  channelsList: Channels[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io"

  constructor(private UPload: UPloadService) { }

  ngOnInit(): void {
    this.UPload.getSuggestedChannels().subscribe((channelsList) => {
      this.channelsList = (channelsList as Channels[]).map((channel : Channels) => {
        return {...channel, title: channel.title.replace(/\s/g, '-')}
      });
    })

  }

}
