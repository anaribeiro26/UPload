import {Component, OnInit} from '@angular/core';
import {Taxonomies} from "../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Taxonomies[] = [];

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let name = params['name'];
      this.UPload.getTag(name).subscribe((tags) => {
        this.tags = tags as Taxonomies[];
      })
    });
  }
}
