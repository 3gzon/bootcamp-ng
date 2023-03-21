import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
stats=[
  {value:22, label:'# of users'},
  {value:300, label:'Revenue'},
  {value:90, label:'Score'},
]
  items=[
    {
      image:'/assets/images/couch.jpeg',
      title:'Couch',
      description:'test one'
    },
    {
      image:'/assets/images/dresser.jpeg',
      title:'Dresser',
      description: 'test two'
    }
  ]

}
