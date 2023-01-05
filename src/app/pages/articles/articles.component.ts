import { Component, OnInit } from '@angular/core';
import {Articles} from "../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../services/UPload.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Articles[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getArticles().subscribe((articles) => {
      this.articles = articles as Articles[];
    })
  }
}
