import {Component, Input, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {TranslateService} from "@ngx-translate/core";
import {VideosPlaylist} from "../../../services/UPload.model";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";
import {faBookmark as faBookmarkSolid} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-playlist-videos',
  templateUrl: './playlist-videos.component.html',
  styleUrls: ['./playlist-videos.component.scss']
})
export class PlaylistVideosComponent implements OnInit {
  faBookmarkSolid = faBookmarkSolid;
  faBookmark = faBookmark;

  videosPlaylist: VideosPlaylist[] = [];

  @Input() id!: any;

  and: any;

  lang = localStorage.getItem('lang') || 'pt';

  suffix_url = '/hqdefault.jpg';

  constructor(private UPload: UPloadService, private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.UPload.getPlaylistVideos(this.id).subscribe((videosPlaylist) => {
      this.videosPlaylist = (videosPlaylist as VideosPlaylist[]).map((video : VideosPlaylist) => {
        return {...video, title: video.title.replace(/\s/g, '-')}
      });
      this.translate.get('upload.and').subscribe(and => {
        this.and = (and);
      });
      const videoArray = this.videosPlaylist;
      console.log(videoArray.length)
      this.videosPlaylist.forEach(video => {
        let word = video.date.split(" ");
        if(word.length > 2) {
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
