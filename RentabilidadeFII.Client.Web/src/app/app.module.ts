import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from '../app/components/carousel/carousel.component';
import { TabelaComponent } from '../app/components/tabela/tabela.component';
import { CalculadoraComponent } from '../app/components/calculadora/calculadora.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ModalCadastroComponent } from './components/modal-cadastro/modal-cadastro.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
// import { GraficoComponent } from './components/grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TabelaComponent,
    CalculadoraComponent,
    CadastroComponent,
    ModalCadastroComponent,
    ModalLoginComponent,
    // GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
