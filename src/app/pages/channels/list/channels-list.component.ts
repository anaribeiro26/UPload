import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {ElementRef} from "@angular/core";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Channels} from "../../../services/UPload.model";

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})

export class ChannelsListComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  channelsList: Channels[] = [];
  channelFilters: Channels[] = [];
  searchbar = '';
  // FilterPipe = FilterPipe;
  //searchbar: string;
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";

  // @ViewChild('searchbar', { static: true }) public searchbar: ElementRef;

  constructor(private route: ActivatedRoute, private UPload: UPloadService, private elem: ElementRef) {
  }

  ngOnInit(): void {
    this.UPload.getChannels().subscribe((channelsList) => {
      this.channelsList = (channelsList as Channels[]).map((channel : Channels) => {
        return {...channel, title: channel.title.replace(/\s/g, '-')}
          });
     // this.channelsList.forEach(thematic => {
     //  this.currentTitle = thematic.title;
     // })
    })
   // function channelSearch() {
   //   //let input = this.searchbar.value.toLowerCase()
   //   let input = (<HTMLInputElement>document.getElementById("searchbar")).value.toLowerCase()
   //   let x = document.querySelectorAll('content');
   //   for (let i = 0; i < x.length; i++) {
   //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
   //       x[i].setAttribute("style", "display: none;");
   //     } else {
   //       x[i].setAttribute("style", "display: list-item;");
   //     }
   //   }
   // }

//function channelSearch() {
//  //let input = this.searchbar.value.toLowerCase()
//  let input = (<HTMLInputElement>document.getElementById("searchbar")).value.toLowerCase()
//  let x = document.querySelectorAll('content');
//  for (let i = 0; i < x.length; i++) {
//    if (!x[i].innerHTML.toLowerCase().includes(input)) {
//      x[i].setAttribute("style", "display: none;");
//    } else {
//      x[i].setAttribute("style", "display: list-item;");
//    }
//  }
//}

    //function channelSearch() {
    //  let input = (<HTMLInputElement>document.getElementById('searchbar')).value.toLowerCase()
    //  let x = document.getElementsByClassName('content');

    //  for (let i = 0; i < x.length; i++) {
    //    if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //      x[i].setAttribute("style", "display: none;");
    //    } else {
    //      x[i].setAttribute("style", "display: list-item;");
    //    }
    //  }
    //}
    //let onKeyUp = (x: any) => {
    //  this.text += x.target.value + ' | ';
    //}
    //   function channelSearch() {
    //   let input = (<HTMLInputElement>document.getElementById('searchbar')).value.toLowerCase()
    //   // let input = (<HTMLInputElement>document.getElementById('searchbar')).value.toLowerCase()
    //   //input = input.toLowerCase();
    //   let x = document.getElementsByClassName('content');
//
    //   for (let i = 0; i < x.length; i++) {
    //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
    //       x[i].setAttribute("style", "display: none;");
    //       // x[i].style.display="none";
    //     } else {
    //       x[i].setAttribute("style", "display: list-item;");
    //       //  x[i].style.display="list-item";
    //     }
    //   }
    // }
  }
}
