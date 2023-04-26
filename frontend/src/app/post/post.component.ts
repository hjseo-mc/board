import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  id:number = 0

  ngOnInit(): void {
    this.route.params.subscribe((data)=> this.id = data.id);
  }

  edit(id: number) {
    this.router.navigate(['editor',id], {relativeTo: this.route})
  }

}
