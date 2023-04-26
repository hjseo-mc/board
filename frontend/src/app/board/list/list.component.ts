import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../service/post.service";

interface PreviewPost {
  id: number,
  title: string,
  content: any
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  @Input()
  data: any;

  @Output()
  test: any = new EventEmitter();

  posts: PreviewPost[] = []

  ngOnInit(): void {
    this.postService.getList().toPromise()
      .then((list: any) => {
        this.posts = list
      })
      .catch((error: any) => console.log(error));
  }
  openPost(id: number ) : any {
    console.log()
    this.router.navigate(['','board','post', id], {relativeTo: this.route}) // ['path1', 'path2'].join("/")
  }
  createPost() : any {
    this.router.navigate(['','board', 'new'], {relativeTo: this.route}) // ['path1', 'path2'].join("/")
  }
}
