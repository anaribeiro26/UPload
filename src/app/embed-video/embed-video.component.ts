import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.scss']
})
export class EmbedVideoComponent implements OnInit {
  safeUrl: any;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/zcAalMeaKso')
  }

}
