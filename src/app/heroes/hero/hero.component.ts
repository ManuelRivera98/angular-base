import { Component } from "@angular/core";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  public name: string = 'IronMan';
  public age: number = 55;

  get Capitalize(): string {
    return `${this.name.toUpperCase()}`
  };

  getNameAndAge(): string {
    return `${this.name}-${this.age}`
  };

  changeAge(value: number): number {
    return this.age = value;
  };

  changeName(value: string): string {
    return this.name = value;
  };
}