import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {ChannelVideos} from "../../../services/UPload.model";

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})
export class ChannelsListComponent implements OnInit {
  channelsList: ChannelVideos[] = [];

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getChannels().subscribe((channelsList) => {
      this.channelsList = channelsList as ChannelVideos[];
    })
  }
}
