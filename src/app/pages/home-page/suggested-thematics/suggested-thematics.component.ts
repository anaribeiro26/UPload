import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {Thematics} from "../../../services/UPload.model";

@Component({
  selector: 'app-suggested-thematics',
  templateUrl: './suggested-thematics.component.html',
  styleUrls: ['./suggested-thematics.component.scss']
})
export class SuggestedThematicsComponent implements OnInit {
  thematics: Thematics[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io"

  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {

    this.UPload.getSuggestedThematics().subscribe((thematics) => {
      this.thematics = (thematics as Thematics[]).map((thematic : Thematics) => {
        return {...thematic, title: thematic.title.replace(/\s/g, '-')}
      });
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



