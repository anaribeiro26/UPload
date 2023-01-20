import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {Channels} from "../../../services/UPload.model";
import {Thematics} from "../../../services/UPload.model";

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  channelsList: Channels[] = [];
  thematics: Thematics[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io"

  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {

    this.UPload.getSuggestedChannels().subscribe((channelsList) => {
      this.channelsList = channelsList as Channels[];
    })

    this.UPload.getThematics().subscribe((thematics) => {
      this.thematics = thematics as Thematics[]
      }
    )
  }

    // this.getRandomImage();
  }
  // getRandomImage() {
  //   var randomImage: Channels[] = [];;
  //   for (let i=0; i<5; i++) {
  //     var ind = Math.floor(Math.random()*randomImage.length);
  //     randomImage.push(this.channelsList[ind])
  //     console.log('teste 2 ' + this.channelsList[ind])
  //   }
  //     // console.log('teste' + randomImage)
  // }



