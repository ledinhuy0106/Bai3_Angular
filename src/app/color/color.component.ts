import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colo:String=""

  constructor() { }

  ngOnInit(): void {
  }
  colorRed():void{
    this.colo="red"

  }
  colorBlue():void{
    this.colo="blue"
  }
  colorPink():void{
    this.colo="pink"
  }


}
