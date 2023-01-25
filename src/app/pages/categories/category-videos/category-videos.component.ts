import {Component, Input, OnInit} from '@angular/core';
import {TaxonomyVideos} from "../../../services/UPload.model";
import {UPloadService} from "../../../services/UPload.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-category-videos',
  templateUrl: './category-videos.component.html',
  styleUrls: ['./category-videos.component.scss']
})
export class CategoryVideosComponent implements OnInit {
  category_videos: TaxonomyVideos[] = [];
  and:any;
  lang = localStorage.getItem('lang') || 'pt'
  @Input() category_id!: number;
  image_url = '/hqdefault.jpg'

  constructor(private UPload: UPloadService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.UPload.getCategoryVideos(this.category_id).subscribe((category_videos) => {
      this.category_videos = category_videos as TaxonomyVideos[];
      this.translate.get('upload.and').subscribe(and => {
        this.and = (and);
      });
      this.category_videos.forEach(video => {
        let word = video.date.split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} ${this.and} ${word[2]} ${word[3]}`
        }
      })
    })
  }
}

