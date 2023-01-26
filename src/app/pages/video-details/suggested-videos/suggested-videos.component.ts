import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service"
import {TranslateService} from "@ngx-translate/core";
import {Videos} from "../../../services/UPload.model";
import {ActivatedRoute} from "@angular/router";
import {VideoDetails} from "../../../services/UPload.model";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-suggested-videos',
  templateUrl: './suggested-videos.component.html',
  styleUrls: ['./suggested-videos.component.scss']
})
export class SuggestedVideosComponent implements OnInit {
  videos: Videos[] | undefined = [];
  and: any;
  lang = localStorage.getItem('lang') || 'pt'
  imageUrl = '/maxresdefault.jpg';
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;
  @Input() mainVideoTags: string | undefined;
  mainVideoTagsList: string[] = [];
  video: VideoDetails | undefined;
  // random = [Math.floor(Math.random()*this.videos.length)];
  Math: any;



  constructor(private route: ActivatedRoute, private UPload: UPloadService, private translate: TranslateService) {
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
      this.videos = (videos as Videos[]).map((video : Videos) => {
        return {...video, title: video.title.replace(/\s/g, '-')}
      });
      this.translate.get('upload.and').subscribe(and => {
        this.and = (and);
      });

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
          video.date = `${word[0]} ${word[1]} ${this.and} ${word[2]} ${word[3]}`
        }
      })
    })
  }


  changeFavorite(id: number) {
    this.UPload.toggleFavorite(id)
  }

  favourite(id: number) {
    return this.UPload.isFavorite(id)
  }

  share(txt: string) {
    console.log(txt)
  }

  clickShare(myUrl: string) {
    if (navigator.share) {
      navigator.share({
        title: 'Copied link here.',
        url: myUrl
      }).then(() => {
        console.log('Thanks for sharing!');
      })
        .catch(error => console.log('Error sharing', error));
    } else {
      alert('Share not supported!');
    }
  }

}
