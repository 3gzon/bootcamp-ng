import { Component, Input } from '@angular/core';
// import * as faker from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name!: string;
  onNameChange(value: string) {
    this.name = value;
  }
}
