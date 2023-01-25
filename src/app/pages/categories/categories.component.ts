import { Component, OnInit } from '@angular/core';
import {Taxonomies} from "../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Taxonomies[] = [];

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let name = params['name'];
      this.UPload.getCategory(name).subscribe((categories) => {
        this.categories = categories as Taxonomies[];
      })
    });
  }
}
