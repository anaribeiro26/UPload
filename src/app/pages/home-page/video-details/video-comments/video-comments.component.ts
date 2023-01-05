import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-video-comments',
  templateUrl: './video-comments.component.html',
  styleUrls: ['./video-comments.component.scss']
})
export class VideoCommentsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {
  }

}
