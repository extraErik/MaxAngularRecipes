import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() showSectionEvent : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showRecipes() {
    this.showSectionEvent.emit('recipes');
  }

  showShoppingList() {
    this.showSectionEvent.emit('shoppingList');
  }

}
