import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-favourites-videos',
  templateUrl: './favourites-videos.component.html',
  styleUrls: ['./favourites-videos.component.scss']
})
export class FavouritesVideosComponent implements OnInit {
  favorites_list: any[] = [];

  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  imageUrl = '/maxresdefault.jpg'

  constructor(private route: ActivatedRoute, private video: UPloadService) { }

  ngOnInit(): void {
    this.video.getFavorites().subscribe((favorites) => {
      this.favorites_list = <any[]>favorites;
      this.favorites_list.forEach(video => {
        let word = video.date.replace('atrás', '').split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} e ${word[2]} ${word[3]}`
        }
      })
    });
  }

}
