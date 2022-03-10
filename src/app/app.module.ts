import { LOCALE_ID, NgModule } from '@angular/core';
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
import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localept from '@angular/common/locales/pt'

import { TipoComponent } from './tipo/tipo.component';
import { TipoEditComponent } from './edit/tipo-edit/tipo-edit.component';
import { TipoDeleteComponent } from './delete/tipo-delete/tipo-delete.component';
import { InicioComponent } from './inicio/inicio.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

registerLocaleData(localept, 'pt')
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
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [{
    useClass: HashLocationStrategy,
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
