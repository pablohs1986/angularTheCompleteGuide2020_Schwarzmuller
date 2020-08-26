import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allowDisplay = false;
  logs = [undefined];
  count = null;

  displayDetails(){
    this.count++;
    this.allowDisplay = true;
    this.logs[this.count] = this.count;
  }
}
