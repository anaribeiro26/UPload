import { Component, OnInit } from '@angular/core';
import {faHouse, faBarsStaggered, faClapperboard, faPlay} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  first_title:string = "Início";
  second_title:string = "Canais";
  third_title:string = "Temáticas";
  fourth_title:string = "Playlists";

  faHouse = faHouse;
  faBarsStaggered = faBarsStaggered;
  faClapperboard = faClapperboard;
  faPlay = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

}
