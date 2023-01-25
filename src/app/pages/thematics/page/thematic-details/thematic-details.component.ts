import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Thematics} from "../../../../services/UPload.model";
import {UPloadService} from "../../../../services/UPload.service";

@Component({
  selector: 'app-page',
  templateUrl: './thematic-details.component.html',
  styleUrls: ['./thematic-details.component.scss']
})
export class ThematicDetailsComponent implements OnInit {
thematics: Thematics[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  @Input() tags!: string;

  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let title = params['title'];
      this.UPload.getThematic(title).subscribe((thematics) => {
      this.thematics = (thematics as Thematics[]).map((thematics : Thematics) => {
        return {...thematics, title: thematics.title.replace(/\s/g, ' '),
          thematics, tags_id: thematics.tags_id.replace(/\s/g, '')}
    });
    })
  })
  }
}
