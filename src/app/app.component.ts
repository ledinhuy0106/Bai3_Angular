import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <h1 [class.with-border]="withBorder" [style.color]="textColor">{{title}}</h1>
     <button (click)="onButton()">{{withBorder ? 'Hide' : 'Show'}} Border</button>
     <app-demo [text]="title"></app-demo>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Demo Angular';
  withBorder = true;
  textColor = 'red';

  onButton() {
    this.withBorder = !this.withBorder;
    this.title = 'Hello';
  }
}
