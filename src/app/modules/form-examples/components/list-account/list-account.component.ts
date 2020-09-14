import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../../accoun-item.model';

@Component({
  selector: 'list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.scss']
})
export class ListAccountComponent{
  @Input()
  list:Account[];
  @Output()
  event = new EventEmitter<Account>();
  constructor() { }

  onEdit(account: Account){
    this.event.emit(account);
  }
}
