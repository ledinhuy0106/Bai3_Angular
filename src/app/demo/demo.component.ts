import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  template: `
    <h1>Demo Giao tiếp giữa các component có quan hệ mật thiết</h1>
    <p>{{ text }} From Parent</p>
    <button style="size: 40px" (click)="buttonClicked()">Button in Demo</button>
  `,
  selector: 'app-demo',
})
export class DemoComponent implements OnInit {
  @Input() text!: String;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>()

  constructor() {
  }

  ngOnInit(): void {
  }


  buttonClicked() {
    this.buttonClick.emit()
    this.text = "Change From Demo component";
  }
}
