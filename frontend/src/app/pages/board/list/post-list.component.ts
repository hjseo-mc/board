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
  testData!: any

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.testData = route.snapshot.data[0]['title'];
  }

  @Input() data: any;
  @Output() test: any = new EventEmitter();

  posts: PreviewPost[] = []

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.boardId = param.boardId;
    })
    this.postService.getAllByBoardId(this.boardId).toPromise()
      .then((list: PreviewPost[]) => {this.posts = list})
      .catch((error: any) => console.log(error))
  }
  openPost(id: number) : any {
    this.router.navigate(['','boards',this.boardId,'posts', id, 'view'])
  }
  createPost() : any {
    this.router.navigate(['','boards',this.boardId,'posts','new'])
      .catch((error: any) => console.log(error))
  }
  deletePost(id: number) : any {
    this.postService.deleteOne(id).toPromise()
      .then(() => {
        this.posts = this.posts.filter((post: PreviewPost) => post.id !== id)
      })
      .catch((error: any) => console.log(error))
  }
}
