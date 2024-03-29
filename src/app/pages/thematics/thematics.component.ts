import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";
import {Thematics} from "../../services/UPload.model";

@Component({
  selector: 'app-thematics',
  templateUrl: './thematics.component.html',
  styleUrls: ['./thematics.component.scss']
})

export class ThematicsComponent implements OnInit {
  thematics: Thematics[] = [];

  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getThematics().subscribe((thematics) => {
      this.thematics = (thematics as Thematics[]).map((thematic : Thematics) => {
        return {...thematic, title: thematic.title.replace(/\s/g, '-')}
      });
    })
  }
}
