import { Component } from '@angular/core';

@Component({
  selector: 'app-propety',
  template: '<input type="text" [disabled] ="getDisable()" value = "{{encheLinguica}}">',
  styleUrls: ['./propety.component.css']
})
export class PropetyComponent {
  public encheLinguica: string = "CAMPO NOME";
  public isDisable: boolean = true;
  public getDisable () {
    return this.isDisable;
  }

}
