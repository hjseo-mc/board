import { Injectable } from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {HttpClient} from "@angular/common/http";
import { tap } from 'rxjs/operators'
import {Observable, Subscription} from "rxjs";
import {Post, PreloadedPost} from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService extends ApiGatewayService{

  constructor(http: HttpClient) {
    super(http);
  }
  getAll() : any  {
    return this.get('/api/posts');
  }
  getOneById(id: number) : Observable<PreloadedPost> {
    console.log('[PostService] getOneById(id=', id, ')')
    return this.get('/api/posts/' + id);
  }
  getAllByBoardId(boardId: number) : Observable<any> {
    console.log('[PostService] getOneById(boardId=', boardId, ')')
    return this.get('/api/boards/' + boardId + '/posts');
  }
  createOne(newPost: Post) {
    console.log('[PostService] createOne(newPost=',newPost,')')
    return this.post('/api/posts', newPost)
  }
  updateOne(id: number, newPost: PreloadedPost) {
    console.log('[PostService] updateOne(id=',id,', newPost=',newPost,')')
    return this.patch('/api/posts/' + id, newPost)
  }
  deleteOne(id: number) {
    console.log('[PostService] deleteOne(id=',id,')')
    return this.delete('/api/posts/' + id)
  }


}
