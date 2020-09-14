import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game.component';
import { GameService } from './game.service';
import { GameRoutingModule } from './game-routing.module';
import { FormsModule } from '@angular/forms';
import { GameItemDirective } from 'src/app/modules/mini-game/game-item.directive';



@NgModule({
  declarations: [GameComponent,GameItemDirective ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
  ],
  providers: [GameService]
})
export class GameModule { }
