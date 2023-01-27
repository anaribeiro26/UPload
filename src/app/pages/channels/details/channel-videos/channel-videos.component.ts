import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service";
import {TranslateService} from "@ngx-translate/core";
import {ChannelVideos} from "../../../../services/UPload.model";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-channel-videos',
  templateUrl: './channel-videos.component.html',
  styleUrls: ['./channel-videos.component.scss']
})
export class ChannelVideosComponent implements OnInit {
  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;

  videos: ChannelVideos[] = [];

  @Input() channel_id!: number;

  and: any;

  lang = localStorage.getItem('lang') || 'pt';

  suffix_url = '/hqdefault.jpg';

  constructor(private UPload: UPloadService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.UPload.getChannelVideos(this.channel_id).subscribe((videos) => {
      this.videos = (videos as ChannelVideos[]).map((video : ChannelVideos) => {
        return {...video, title: video.title.replace(/\s/g, '-')}
      });
      this.translate.get('upload.and').subscribe(and => {
        this.and = (and);
      });
      this.videos.forEach(video => {
        let word = video.date.split(" ");
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
