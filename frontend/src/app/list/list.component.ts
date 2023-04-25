import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public router: Router, private route: ActivatedRoute) { }

  @Input()
  data: any;

  @Output()
  test: any = new EventEmitter();

  items:any = [{
    num: 1,
    title: "a"
  },
    {
    num: 2,
    title: "b"
  }];

  ngOnInit(): void {
  }

  openPost(num: number ) : any {
    console.log(num)
    this.router.navigate(['post', num], {relativeTo: this.route})
  }
  createPost() : any {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
