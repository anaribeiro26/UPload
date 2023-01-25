import {Component, OnInit} from '@angular/core';
import {Thematics} from "../../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {FilterPipe} from "../../../pipe/filter.pipe";

@Component({
  selector: 'app-thematics',
  templateUrl: './thematics.component.html',
  styleUrls: ['./thematics.component.scss']
})
export class ThematicsComponent implements OnInit {
  thematics: Thematics[] = [];
  FilterPipe = FilterPipe;
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  currentTitle: any;

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getThematics().subscribe((thematics) => {
    //this.thematics = (thematics as Thematics[]).map((thematic : Thematics) => {
    //    return {...thematic, title: this.currentTitle = thematic.title}
    //  });
      this.thematics = (thematics as Thematics[]).map((thematic : Thematics) => {
        return {...thematic, title: thematic.title.replace(/\s/g, '-')}
      });
      console.log(this.thematics)
    })
  }
}
