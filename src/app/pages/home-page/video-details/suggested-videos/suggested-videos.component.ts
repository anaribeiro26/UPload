import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service"
import {ActivatedRoute} from "@angular/router";
import {Videos} from "../../../../services/UPload.model";

@Component({
  selector: 'app-suggested-videos',
  templateUrl: './suggested-videos.component.html',
  styleUrls: ['./suggested-videos.component.scss']
})
export class SuggestedVideosComponent implements OnInit {

  videos: Videos[] | undefined = [];
  imageUrl = '/maxresdefault.jpg';
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";


  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
    this.UPload.getVideos().subscribe((videos) => {
      this.videos = videos as Videos[];
    })
  }

  ngOnInit(): void {
  }

}
