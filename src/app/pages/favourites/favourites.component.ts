import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favorites_list: any[] = [];
  image_url = '/maxresdefault.jpg';

  constructor(private route: ActivatedRoute, private video: UPloadService) {
  }

  ngOnInit(): void {
    this.video.getFavorites().subscribe((favorites) => {
     this.favorites_list = <any[]>favorites;
   });
  }
}
