import {Component, Input} from '@angular/core';

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
      ></youtube-player>
    </div>
  `,
  styleUrls: [`../video-details.component.scss`]


})
export class YoutubePlayerComponent {
  player: YT.Player | undefined;
  @Input() id: string = "";

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
