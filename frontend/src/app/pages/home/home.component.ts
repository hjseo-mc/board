import { Component, OnInit } from '@angular/core';
import {BoardService} from "../../service/board.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Board} from "../../model/Board";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  boards: Board[] = []

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private boardService: BoardService
  ) {

  }

  ngOnInit(): void {
    this.boardService.getAll().toPromise()
        .then((list: Board[]) => {this.boards = list})
        .catch((error: any) => console.log(error))
  }

  openBoard(id?: number) : any {
    this.router.navigate(['','boards', id], {relativeTo: this.route})
  }
  createBoard() : any {
    const board =  {
      title: "Board",
      description: "New Board Description"
    }
    this.boardService.createOne(board).toPromise().then((data: any) => {
      this.router.navigate(['','boards', data.id], {relativeTo: this.route})
    })
  }
}
