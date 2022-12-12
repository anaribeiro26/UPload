import { Component, OnInit } from '@angular/core';
import {UPloadService} from "../../../../services/UPload.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private UPload: UPloadService) { }

  ngOnInit(): void {
  }

}
