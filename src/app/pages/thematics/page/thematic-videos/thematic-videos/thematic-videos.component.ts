import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../../../services/UPload.service";
import {ThematicVideos} from "../../../../../services/UPload.model";

@Component({
  selector: 'app-thematic-videos',
  templateUrl: './thematic-videos.component.html',
  styleUrls: ['./thematic-videos.component.scss']
})
export class ThematicVideosComponent implements OnInit {
  thematic_videos: ThematicVideos[] = [];
  image_url = '/hqdefault.jpg';
  @Input() id!: number;

  title = "Artigo de Temática"

  constructor(private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getThematicVideos(this.id).subscribe((thematic_videos) => {
      this.thematic_videos = thematic_videos as ThematicVideos[];
      this.thematic_videos.forEach(video => {
        let word = video.date.split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} e ${word[2]} ${word[3]}`
        }
      })
    })
  }

}
