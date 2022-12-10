import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {Channels} from "../../services/UPload.model";

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  channels: Channels | undefined;

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.UPload.getChannels(id).subscribe((channels) => {
      this.channels = (channels as Channels[])[0];
    })
  }
}
