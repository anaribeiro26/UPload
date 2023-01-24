import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service"
import {Videos} from "../../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {VideoDetails} from "../../../services/UPload.model";


@Component({
  selector: 'app-suggested-videos',
  templateUrl: './suggested-videos.component.html',
  styleUrls: ['./suggested-videos.component.scss']
})
export class SuggestedVideosComponent implements OnInit {
  videos: Videos[] | undefined = [];
  imageUrl = '/maxresdefault.jpg';
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  @Input() mainVideoTags: string | undefined;
  mainVideoTagsList: string[] = [];
  video: VideoDetails | undefined;


  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.buildMainVideoTagsList()
    this.loadSuggestedVideos()
  }

  ngOnChanges(): void {
    this.buildMainVideoTagsList()
    this.loadSuggestedVideos()
  }

  buildMainVideoTagsList() {
    if (this.mainVideoTags !== undefined) {
      this.mainVideoTagsList = this.mainVideoTags.split(",").map(tag => tag.trim())
    } else {
      this.mainVideoTagsList = []
    }
  }

  loadSuggestedVideos() {
    this.UPload.getSuggestedVideos().subscribe((videos) => {
      this.videos = videos as Videos[];

      console.log("Antes de filtrar => " + this.videos.length)
      console.log("Tags do video principal: " + this.mainVideoTags)
      this.videos.forEach(video => console.log(video.title + ": " + video.tags))

      if (this.mainVideoTagsList.length > 0) {
        this.videos = this.videos.filter(video => {
          return video.tags.split(",")
            .map(tag => tag.trim())
            .some(tag => this.mainVideoTagsList.includes(tag))
        });
      }

      console.log("Depois de filtrar => " + this.videos.length)
      console.log("Tags do video principal: " + this.mainVideoTags)
      this.videos.forEach(video => console.log(video.title + ": " + video.tags))

      this.videos.forEach(video => {
        let word = video.date.replace('atrás', '').split(" ");
        if (word.length > 2) {
          video.date = `${word[0]} ${word[1]} e ${word[2]} ${word[3]}`
        }
      })
    })
  }
}
