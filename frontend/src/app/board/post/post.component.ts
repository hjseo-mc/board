import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private service: PostService) { }

  id:number = 0
  data: any;

  ngOnInit(): void {
    this.route.params.subscribe((data)=> this.id = data.id);

    this.service.getPost(this.id).subscribe(res => this.data = res);
  }

  edit(id: number) {
    this.router.navigate(['', 'board', 'edit',id], {relativeTo: this.route})
  }

  delete(){
    this.service.deletePost(this.id).toPromise().then(() => this.router.navigate(["../"]));
  }

}
