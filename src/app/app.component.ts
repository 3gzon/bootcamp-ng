import { Component, Input } from '@angular/core';
// import * as faker from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name!: string;
  date!: string;
  amount!: number;
  miles!: number;
  car = {
    brand: 'golf',
    model: '6',
    year: 2020,
  };
  onNameChange(value: string) {
    this.name = value;
  }
  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value);
  }
}
