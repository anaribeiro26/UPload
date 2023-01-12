import {Component, OnInit} from '@angular/core';
import {faHouse, faBarsStaggered, faBars, faClapperboard, faPlay} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  first_item: string = "Início";
  second_item: string = "Canais";
  third_item: string = "Temáticas";
  fourth_item: string = "Playlists";

  faHouse = faHouse;
  faBarsStaggered = faBarsStaggered;
  faClapperboard = faClapperboard;
  faPlay = faPlay;
  faBars = faBars;

  sidebar: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }
}
