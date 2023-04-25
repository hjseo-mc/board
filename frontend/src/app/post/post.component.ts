import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  id:number = 0

  ngOnInit(): void {
    this.router.params.subscribe((data)=> this.id = data.id);
  }

}
