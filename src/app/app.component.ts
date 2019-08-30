import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sectionVisible = 'recipes';

  showSection(event) {
    this.sectionVisible = event;
  }
}
