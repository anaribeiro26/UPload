import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UPloadService} from "../../../services/UPload.service";
import {TranslateService} from "@ngx-translate/core";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";
import {Videos} from "../../../services/UPload.model";

@Component({
  selector: 'app-favourite-videos',
  templateUrl: './favourite-videos.component.html',
  styleUrls: ['./favourite-videos.component.scss']
})
export class FavouriteVideosComponent implements OnInit {
  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;

  favorites_list: Videos[] = [];

  and: any;

  lang = localStorage.getItem('lang') || 'pt'

  prefix_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  suffix_url = '/maxresdefault.jpg'

  constructor(private route: ActivatedRoute, private UPload: UPloadService, private translate: TranslateService) { }

  ngOnInit(): void {
    this.UPload.getFavorites().subscribe((favorites_list) => {
      this.favorites_list = (favorites_list as Videos[]).map((videos : Videos) => {
        return {...videos, title: videos.title.replace(/\s/g, '-')}
      });
      this.translate.get('upload.and').subscribe(and => {
        this.and = (and);
      });
      this.favorites_list.forEach(video => {
        let word = video.date.replace('atrás', '').split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} ${this.and} ${word[2]} ${word[3]}`
        }
      })
    });
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
