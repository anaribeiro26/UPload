import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {Videos} from "../../../services/UPload.model";

import {Channels} from "../../../services/UPload.model";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  channelsList: Channels[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io"

  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {
    this.UPload.getChannels().subscribe((channelsList) => {
      this.channelsList = channelsList as Channels[];
    })
  }

}
