import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {TagVideos} from "../../../services/UPload.model";

@Component({
  selector: 'app-tags-videos',
  templateUrl: './tags-videos.component.html',
  styleUrls: ['./tags-videos.component.scss']
})
export class TagsVideosComponent implements OnInit {

  tag_videos: TagVideos[] = [];

  @Input() tags_id!: number;
  image_url = '/hqdefault.jpg'

  constructor(private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getTagVideos(this.tags_id).subscribe((tag_videos) => {
      this.tag_videos = tag_videos as TagVideos[];
    })
  }
}
