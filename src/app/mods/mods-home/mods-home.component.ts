import {Component} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  modalOpen = false;
  items: any = [
    {
      title: 'demo1', content: 'content'
    },
    {
      title: 'demo1', content: 'content'
    },
    {
      title: 'demo1', content: 'content'
    },
  ]

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
