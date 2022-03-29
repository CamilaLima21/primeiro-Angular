import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponent} from './primeiro.component';
import { PropetyComponent } from './propety/propety.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { QuartoComponent } from './quarto/quarto.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    PropetyComponent,
    SegundoComponent,
    TerceiroComponent,
    QuartoComponent,
    NovoComponenteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
