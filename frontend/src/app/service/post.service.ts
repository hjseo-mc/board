import { Injectable } from '@angular/core';
import {ApiGatewayService} from "./ApiGatewayService";
import {HttpClient} from "@angular/common/http";
import { tap } from 'rxjs/operators'
import {Observable, Subscription} from "rxjs";

interface Post
{
  id?: number,
  title: string,
  content: string
}
@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiGatewayService{

  constructor(http: HttpClient) {
    super(http);
  }
  getList() : any  {
    return this.get('api/posts');
  }
  getPost(id: number) : Observable<Post> {
    return this.get('api/posts/' + id);
  }
  createPost(newPost: Post) {
    return this.post('api/posts/', newPost);
  }
  updatePost(id: number, updatePost: Post) {
    console.log(id, updatePost);
    return this.post("api/posts/", updatePost)
  }
  deletePost(id: number) {
    return this.delete("api/posts/" + id)
  }


}
