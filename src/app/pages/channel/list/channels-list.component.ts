import {Component, OnInit} from '@angular/core';
import {UPloadService} from "../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";
import {ElementRef, ViewChild} from "@angular/core";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {Channels} from "../../../services/UPload.model";
import {FilterPipe} from "../../../pipe/filter.pipe";
export function channelSearch() {
  //let input = this.searchbar.value.toLowerCase()
  let input = (<HTMLInputElement>document.getElementById("searchbar")).value.toLowerCase()
  let x = document.querySelectorAll('content');
  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].setAttribute("style", "display: none;");
    } else {
      x[i].setAttribute("style", "display: list-item;");
    }
  }
}

@Component({
  selector: 'app-channel-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})

export class ChannelsListComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  channelsList: Channels[] = [];
  searchbar = '';
  FilterPipe = FilterPipe;
  //searchbar: string;
  image_url = "https://dev-project-upskill-grupo05.pantheonsite.io";
 // @ViewChild('searchbar', { static: true }) public searchbar: ElementRef;

  constructor(private route: ActivatedRoute, private UPload: UPloadService, private elem: ElementRef) {
  }

  ngOnInit(): void {
    this.UPload.getChannels().subscribe((channelsList) => {
      this.channelsList = channelsList as Channels[];
    })

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
