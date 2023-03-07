import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'title one',
    },
    {
      title: 'title two',
    },
    {
      title: 'title three',
    },
  ];
}
