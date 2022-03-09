import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TipoComponent } from './tipo/tipo.component';
import { TipoEditComponent } from './edit/tipo-edit/tipo-edit.component';
import { TipoDeleteComponent } from './delete/tipo-delete/tipo-delete.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    SobreComponent,
    HomeComponent,
    ContatoComponent,
    CadastroComponent,

    TipoComponent,
    TipoEditComponent,
    TipoDeleteComponent,
    InicioComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    useClass: HashLocationStrategy,
    provide: LocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
