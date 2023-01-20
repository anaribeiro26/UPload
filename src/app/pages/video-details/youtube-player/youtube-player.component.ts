import {Component, Input} from '@angular/core';
import {IPlayerOutputs, IPlayerSize} from "ngx-youtube-player/lib/models";


@Component({
  selector: 'app-youtube-player',
  template: `
    <div class="video">
      <youtube-player
        [videoId]="id"
        (ready)="savePlayer($event)"
        (change)="onStateChange($event)"
        [height]="450"
        [width]="420"
        [playerVars] = "{ modestbranding: 0, controls: 0, disablekb: 0, rel: 0, showinfo: 0 }"

      ></youtube-player>
    </div>
  `,
  styleUrls: [`../video-details.component.scss`]


})
export class YoutubePlayerComponent {
  player: YT.Player | undefined;
  @Input() id: string = "";



  playerReady(player: YT.Player) {
    this.player = player;
    console.log("player instance", player);
  }


  savePlayer(player: YT.Player) {
    this.player = player;
    console.log('player instance', player);

  }

  ngOnChanges() {
    if (this.player !== undefined) {
      this.player.loadVideoById(this.id)
    }
  }

  onStateChange(event: YT.PlayerEvent) {
    console.log('player state', event);
  }


}
