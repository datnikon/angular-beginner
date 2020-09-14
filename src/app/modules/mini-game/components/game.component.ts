import { Component } from '@angular/core';
import { gameItem } from 'src/app/modules/mini-game/game-item.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent{

  listItem: gameItem[];
  currentNumber: number = 1;
  count: number = 0;
  isWin: boolean;
  constructor(public gameService: GameService) { }

  public createList(){
    if(this.count > 0){
      this.reset();
      this.listItem = this.gameService.createList(this.count);
    }else{
      alert("Invalid number")
    }
  }

  public process(item: gameItem){
    if(item.value == this.currentNumber){
      item.isSelected = true;
      if(this.currentNumber < this.listItem.length){
        this.currentNumber ++;
      }else{
        this.isWin = true;
      }
    }
  }

  public reset(){
    this.isWin = false;
    this.currentNumber = 1;
  }
}
