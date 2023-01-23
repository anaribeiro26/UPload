import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-favourites-videos',
  templateUrl: './favourites-videos.component.html',
  styleUrls: ['./favourites-videos.component.scss']
})
export class FavouritesVideosComponent implements OnInit {
  favorites_list: any[] = [];
  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;

  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  imageUrl = '/maxresdefault.jpg'

  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {
    this.UPload.getFavorites().subscribe((favorites) => {
      this.favorites_list = <any[]>favorites;
      this.favorites_list.forEach(video => {
        let word = video.date.replace('atrás', '').split(" ");
        if(word.length > 2) {
          video.date = `${word[0]} ${word[1]} e ${word[2]} ${word[3]}`
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
