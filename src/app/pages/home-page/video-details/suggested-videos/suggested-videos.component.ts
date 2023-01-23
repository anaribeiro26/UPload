import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service"
import {ActivatedRoute} from "@angular/router";
import {VideoComments, Videos} from "../../../../services/UPload.model";

@Component({
  selector: 'app-suggested-videos',
  templateUrl: './suggested-videos.component.html',
  styleUrls: ['./suggested-videos.component.scss']
})
export class SuggestedVideosComponent implements OnInit {

  videos: Videos[] | undefined = [];
  imageUrl = '/maxresdefault.jpg';
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  @Input() video_id!: string;
  videoComments: VideoComments[] = [];


  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {

    this.UPload.getVideos().subscribe((videos) => {
      this.videos = videos as Videos[];
      this.videos.forEach(video => {
        let word = video.date.replace('atrás', '').split(" ");
        if (word.length > 2) {
          video.date = `${word[0]} ${word[1]} e ${word[2]} ${word[3]}`
        }
      })
    })

  }
}
