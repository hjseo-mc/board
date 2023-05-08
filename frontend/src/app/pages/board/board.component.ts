import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
})
export class BoardComponent implements OnInit {

  testData!: any

  constructor(private route: ActivatedRoute) {
    this.testData = route.snapshot.data[0]['title'];
  }

  ngOnInit(): void {
  }

}
