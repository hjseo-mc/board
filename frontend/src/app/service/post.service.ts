import { Injectable } from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {HttpClient} from "@angular/common/http";
import { tap } from 'rxjs/operators'
import {Observable, Subscription} from "rxjs";
import {Post, PreloadPost} from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiGatewayService{

  constructor(http: HttpClient) {
    super(http);
  }
  getAll() : any  {
    return this.get('api/posts');
  }
  getOneById(id: number) : Observable<PreloadPost> {
    console.log('getOneById: ', id)
    return this.get('api/posts/' + id);
  }
  getAllByBoardId(boardId: number) : Observable<any> {
    return this.get('api/boards/' + boardId + '/posts');
  }
  createOne(newPost: Post) {
    console.log('createOne: ', newPost)
    return this.post('api/posts', newPost)
  }
  updateOne(id: number, newPost: PreloadPost) {
    console.log('updateOne: ', id, newPost)
    return this.patch("api/posts/" + id, newPost)
  }
  deleteOne(id: number) {
    return this.delete("api/posts/" + id)
  }


}
