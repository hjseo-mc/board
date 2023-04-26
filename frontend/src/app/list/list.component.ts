import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../service/post.service";

interface PreviewPost {
  id: number,
  title: string
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
      .then((list: PreviewPost[]) => {this.posts = list})
      .catch((error: any) => console.log(error))
  }
  openPost(id: number ) : any {
    this.router.navigate(['','posts', id], {relativeTo: this.route}) // ['path1', 'path2'].join("/")
  }
  createPost() : any {
    this.router.navigate(['','posts', 'new'], {relativeTo: this.route}) // ['path1', 'path2'].join("/")
  }
}
