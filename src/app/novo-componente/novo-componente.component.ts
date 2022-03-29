import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  template: `
  <input type="text" [disabled]= "isDisabled">
  <button type="button" (click)= "cliqueBotao()"> HABILITAR </button>
  `,
  styleUrls: ['./novo-componente.component.css']
})

//TODO: Crie um botão que quando é pressionado, desabilita um elemento de input
//TODO: Se for pressionado novamente habilita um elemento de input

export class NovoComponenteComponent {
  public isDisabled: boolean = false;
  public valorCampo: string = " ";


  public cliqueBotao(){
    return this.isDisabled = !this.isDisabled;
  }
}
