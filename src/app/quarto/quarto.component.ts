import { Component } from '@angular/core';


@Component({
  selector: 'app-quarto',
  template: `<h2 [class] ="estiloCor"> Qual sua cor favorita? </h2>
  <h2 class="error"> Isso seria um erro? </h2>
  <h2 [class.sucesso] = "isSucesso"> CLASS BINDING </h2>
  <h2 [class] = "parOuImpar"> {{ getContador() }} </h2>
  <p [style.color] = "cor"> BINDING DE ESTILOS COR</p>
  <input type="text" [value]= "valorCampo">
  <input type="text" value = "{{valorCampo}}" [disabled]= "isDisabled">
  <button type="button" (click)= "cliqueBotao()"> Clique Aqui</button>

  `,

  styles: [
    `.sucesso {
      color: green;
      }
      .error{
        color: red;
      }
      .par{
        color: violet;
      }
      .impar{
        color: aqua;
      }`,
  ],
})

export class QuartoComponent  {
  public valorCampo: string = "Digite seu e-mail: ";
  public isDisabled: boolean = false;
  public estiloCor: string = "sucesso";
  public isSucesso: boolean = false;
  public cor: string = "blue";
  private contador: number = 0;
  public parOuImpar: string = 'PAR';


  public cliqueBotao() {
    this.isSucesso = !this.isSucesso;
    console.log("Botão Clicado!" + (++this.contador));
    if(this.contador % 2 === 0) {
      console.log("PAR");
    } else {
      console.log("ÍMPAR");
    }
  }
  public getContador(){
    return this.contador;
  }

}


