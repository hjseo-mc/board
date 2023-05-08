import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {PostService} from "../../../service/post.service";
import {PreloadedPost} from "../../../model/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  testData!: any
  post!: PreloadedPost

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.testData = route.snapshot.data[0]['title'];
    this.route.params.subscribe((params)=> {
      const postId = params.postId;
      this.postService.getOneById(postId).subscribe((post: PreloadedPost) => {
        this.post = post;
        console.log("post: ", this.post)
      })
    })
  }

  ngOnInit(): void {
  }

  edit() {
    this.router.navigate(['','boards',this.post.boardId,'posts',this.post.id,'edit'])
  }

}
