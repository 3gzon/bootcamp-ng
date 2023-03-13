import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'title one',
      url: 'https://picsum.photos/id/237/200/300',
    },
    {
      title: 'title two',
      url: 'https://picsum.photos/id/232/200/300',
    },
    {
      title: 'title three',
      url: 'https://picsum.photos/id/231/200/300',
    },
    {
      title: 'title four',
      url: 'https://picsum.photos/id/234/200/300',
    },
    {
      title: 'title four',
      url: 'https://picsum.photos/id/234/200/300',
    },
    {
      title: 'title four',
      url: 'https://picsum.photos/id/234/200/300',
    },
    {
      title: 'title four',
      url: 'https://picsum.photos/id/234/200/300',
    },
    {
      title: 'title four',
      url: 'https://picsum.photos/id/234/200/300',
    },
    {
      title: 'title four',
      url: 'https://picsum.photos/id/234/200/300',
    },
  ];

  checkIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
