import { Injectable } from '@angular/core';
import {ApiGatewayService} from "./api-gateway.service";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Board} from "../model/Board";

@Injectable({
  providedIn: 'root'
})
export class BoardService extends ApiGatewayService{

  constructor(http: HttpClient) {
    super(http);
  }
  getAll() : any  {
    return this.get('api/boards');
  }
  getOneById(id: number) : Observable<Board> {
    return this.get('api/boards/' + id);
  }
  createOne(newBoard: Board) {
    return this.post('api/boards/', newBoard)
  }
  updateOne(id: number, newBoard: Board) {
    return this.patch("api/boards/" + id, newBoard)
  }
  deleteOne(id: number) {
    return this.delete("api/boards/" + id)
  }


}
