import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  template: `{{ user.nome }} - {{ user.id }}
  <div> {{ preco }}</div>
  <div> {{ preco + user.nome }}</div>
  <div> {{ getPreco() }}</div>
  <div> {{ preco > 10 }}</div>
  <div> {{ preco < 15 }}</div>`,
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent {
   public user: {id: number, nome: string} = {
     id: 123,
     nome: 'Camila'
   };
   public preco: number = 15.50;

   getPreco(): string{
     return `R$ ${this.preco}`;
   }
}
