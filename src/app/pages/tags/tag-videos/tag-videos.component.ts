import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {TagVideos} from "../../../services/UPload.model";

@Component({
  selector: 'app-tag-videos',
  templateUrl: './tag-videos.component.html',
  styleUrls: ['./tag-videos.component.scss']
})
export class TagVideosComponent implements OnInit {

  tag_videos: TagVideos[] = [];

  @Input() tags_id!: number;
  image_url = '/hqdefault.jpg'

  constructor(private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getTagVideos(this.tags_id).subscribe((tag_videos) => {
      this.tag_videos = tag_videos as TagVideos[];
      this.tag_videos.forEach(video => {
        let word = video.date.split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} e ${word[2]} ${word[3]}`
        }
      })
    })
  }
}
