import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {Videos} from "../../services/UPload.model";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as faBookmarkSolid, faShareNodes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  videos: any;
  // videos: Videos[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
  imageUrl = '/maxresdefault.jpg'
  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;
  faShare = faShareNodes;

  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }


  ngOnInit(): void {

    this.UPload.getVideos().subscribe((videos) => {
      // this.videos = videos as Videos[];
      this.videos = <any[]>videos;
    })
  }

  changeFavorite(video_id: number) {
    console.log('id ' + video_id )
    this.UPload.toggleFavorite(video_id)
  }

  favourite(video_id: number) {
    console.log('id 2 ' + video_id )
    return this.UPload.isFavorite(video_id)
  }
}

