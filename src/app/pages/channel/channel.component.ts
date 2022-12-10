import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  channels: any;

  constructor(private route: ActivatedRoute, private video: UPloadService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.video.getChannels(id).subscribe((channels) => {
      this.channels = <any[]>channels;
    })
  }
}
