import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  faStar = faStar;

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
