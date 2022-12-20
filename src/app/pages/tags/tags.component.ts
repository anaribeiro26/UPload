import {Component, OnInit} from '@angular/core';
import {Tags} from "../../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags: Tags[] = [];

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.UPload.getTag(id).subscribe((tags) => {
      this.tags = tags as Tags[];
    })
  }
}
