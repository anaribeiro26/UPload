import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {Channels} from "../../../services/UPload.model";

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})
export class ChannelsListComponent implements OnInit {
  channelsList: Channels[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getChannels().subscribe((channelsList) => {
      this.channelsList = channelsList as Channels[];
    })
  }
}
