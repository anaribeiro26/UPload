import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../services/UPload.service";


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favorites_list: any[] = [];

  constructor(private video: UPloadService) {
  }

  ngOnInit(): void {
    this.video.getFavorites().subscribe((favorites) => {
     this.favorites_list = <any[]>favorites;
   });
  }
}
