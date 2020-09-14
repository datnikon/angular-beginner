import { Injectable } from '@angular/core';
import { gameItem } from 'src/app/modules/mini-game/game-item.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public createList(maxNumber: number): gameItem[]{
    let list:gameItem[] = [];
    for (let i = 1; i<= maxNumber; i++){
      list.push({value: i,isSelected: false})
    }
    for(let i = list.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * i);
      let temp = list[i].value;
      list[i].value = list[j].value;
      list[j].value = temp;
    }
    return list;
  }
}
