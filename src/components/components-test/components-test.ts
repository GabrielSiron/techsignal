import { Component } from '@angular/core';

/**
 * Generated class for the ComponentsTestComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-test',
  templateUrl: 'components-test.html'
})
export class ComponentsTestComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentsTestComponent Component');
    this.text = 'Hello World';
  }

}
