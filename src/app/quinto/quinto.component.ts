import { Component } from '@angular/core';

@Component({
  selector: 'app-quinto',
  template: `
          <input [(ngModel)]="campo" type="text"/>
          {{ campo }} `,

})
export class QuintoComponent {
  campo: string = "Digite seu e-mail";
 }
