import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data: any = [
    {
      name: 'Egzon',
      age: 30,
      job: 'programer',
    },
    {
      name: 'Tomi',
      age: 33,
      job: 'designer',
    },
    {
      name: 'Xonn',
      age: 20,
      job: 'AI',
    },
  ];
  headers: any = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
