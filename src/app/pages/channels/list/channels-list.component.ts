import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {Channels} from "../../../services/UPload.model";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})

export class ChannelsListComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;

  channelsList: Channels[] = [];

  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";


  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getChannels().subscribe((channelsList) => {
      this.channelsList = (channelsList as Channels[]).map((channel : Channels) => {
        return {...channel, title: channel.title.replace(/\s/g, '-')}
          });
    })
  }
}
