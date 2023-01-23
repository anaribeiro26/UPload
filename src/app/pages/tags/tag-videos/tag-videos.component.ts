import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {TranslateService} from "@ngx-translate/core";
import {TagVideos} from "../../../services/UPload.model";

@Component({
  selector: 'app-tag-videos',
  templateUrl: './tag-videos.component.html',
  styleUrls: ['./tag-videos.component.scss']
})
export class TagVideosComponent implements OnInit {

  tag_videos: TagVideos[] = [];
  and:any;
  @Input() tags_id!: number;
  image_url = '/hqdefault.jpg'

  constructor(private UPload: UPloadService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.UPload.getTagVideos(this.tags_id).subscribe((tag_videos) => {
      this.tag_videos = tag_videos as TagVideos[];
      this.translate.get('upload.and').subscribe(and => {
        this.and = (and);
      });
      this.tag_videos.forEach(video => {
        let word = video.date.split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} ${this.and} ${word[2]} ${word[3]}`
        }
      })
    })
  }
}
