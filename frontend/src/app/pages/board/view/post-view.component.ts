import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  id!: number
  boardId!: number

  ngOnInit(): void {
    this.route.params.subscribe((data)=> {
      this.boardId = data.boardId;
      this.id = data.id;
    });
  }

  edit(id: number) {
    this.router.navigate(['','boards',this.boardId,'posts',id], {relativeTo: this.route})
  }

}
