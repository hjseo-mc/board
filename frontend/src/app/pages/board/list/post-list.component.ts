import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../service/post.service";

interface PreviewPost {
  id: number,
  title: string
}

@Component({
  selector: 'app-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  boardId! : number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  @Input() data: any;
  @Output() test: any = new EventEmitter();

  posts: PreviewPost[] = []

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.boardId = param.boardId;
      console.log(this.boardId)
    })
    this.postService.getAllByBoardId(this.boardId).toPromise()
      .then((list: PreviewPost[]) => {this.posts = list})
      .catch((error: any) => console.log(error))
  }
  openPost(id: number) : any {
    console.log(id)
    console.log(this.boardId)
    this.router.navigate(['','boards',this.boardId,'posts', id, 'view'])
  }
  createPost() : any {
    console.log(this.boardId)
    this.router.navigate(['','boards',this.boardId,'posts','new'])
      .catch((error: any) => console.log(error))
  }
}
