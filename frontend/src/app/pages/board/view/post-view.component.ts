import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {PostService} from "../../../service/post.service";
import {PreloadPost} from "../../../model/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  post!: PreloadPost

  ngOnInit(): void {
    this.route.params.subscribe((params)=> {
      const postId = params.postId;
      this.postService.getOneById(postId).toPromise()
        .then((post: PreloadPost) => {
          console.log(post)
          this.post = post
        })
        .catch((error: any) => console.log(error))
    });
    console.log(this.post);
  }

  edit() {
    this.router.navigate(['','boards',this.post.boardId,'posts',this.post.id,'edit'])
  }

}
