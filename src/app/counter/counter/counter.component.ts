import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{title}}</h1>

    <h1>{{base}}</h1>


    <button (click)="setCounter(base)">+ {{base}}</button>
    <span>{{counter}}</span>
    <button (click)="setCounter(-base)">- {{base}}</button>
  
  `
})
export class CounterComponent {
  public title: string = 'Contador App';
  public counter: number = 0;
  public base: number = 5;


  setCounter(value: number): void {
    this.counter += value;
  }
}