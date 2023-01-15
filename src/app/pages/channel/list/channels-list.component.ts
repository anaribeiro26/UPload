import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {Channels} from "../../../services/UPload.model";

@Component({
  selector: 'app-channel-thematics-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})

export class ChannelsListComponent implements OnInit {
  channelsList: Channels[] = [];
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  constructor(private route: ActivatedRoute, private UPload: UPloadService) {
  }

  ngOnInit(): void {
    this.UPload.getChannels().subscribe((channelsList) => {
      this.channelsList = channelsList as Channels[];
    })
   //let onKeyUp = (x: any) => {
   //  this.text += x.target.value + ' | ';
   //}

    function channelSearch() {
      let input = (<HTMLInputElement>document.getElementById('searchbar')).value.toLowerCase()
      //input = input.toLowerCase();
      let x = document.getElementsByClassName('content');

      for (let i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].setAttribute("style", "display: none;");
          // x[i].style.display="none";
        }
        else {
          x[i].setAttribute("style", "display: none;");
          //  x[i].style.display="thematics-list-item";
        }
      }
    }
  }
}
