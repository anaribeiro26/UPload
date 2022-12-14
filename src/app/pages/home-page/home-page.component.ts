import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {Videos} from "../../services/UPload.model";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  videos: Videos[] = [];
  imageUrl = '/maxresdefault.jpg'

  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }


  ngOnInit(): void {

    this.UPload.getVideos().subscribe((videos) => {
      this.videos = videos as Videos[];

    })
  }

}

