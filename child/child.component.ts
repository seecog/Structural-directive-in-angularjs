import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() info : number;
  constructor() { }

  ngOnInit() {
    console.log('The number is ',this.info)
  }

}
