import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public heroes: string[] = ['Iron man', 'Super Man', 'Batman', 'Spider man'];
  public heroRemoved: string = '';

  removeHeroFn(): void {
    this.heroRemoved = this.heroes.shift() || '';
  };
};
