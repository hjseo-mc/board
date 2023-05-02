import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  text: string = "Hello!"

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showText(username: string): any {
    if (username) {
      this.text = "Hello, " + username + "!"
    } else {
      this.text = "Hello!"
    }
  }

}
