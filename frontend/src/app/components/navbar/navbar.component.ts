import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/board', title: 'Icons',  icon:'ni-bullet-list-67 text-red', class: '' },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogin: boolean = false;
  user!: string;
  @Output() logInOut: any = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  ngOnInit() {
  }

  loginEvent() {
    this.isLogin = true;
    this.user = "User1";
    this.logInOut.emit("User1");
  }

  logoutEvent() {
    this.isLogin = false;
    this.user = "";
    this.logInOut.emit();
  }
}
