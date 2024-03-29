import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {Thematics} from "../../../services/UPload.model";

@Component({
  selector: 'app-details',
  templateUrl: './thematic-details.component.html',
  styleUrls: ['./thematic-details.component.scss']
})
export class ThematicDetailsComponent implements OnInit {
  thematics: Thematics[] = [];

  @Input() tags!: string;

  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let title = params['title'];
      this.UPload.getThematic(title).subscribe((thematics) => {
      this.thematics = thematics as Thematics[];
    })
  })
  }
}
