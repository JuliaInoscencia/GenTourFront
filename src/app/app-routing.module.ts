import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './contato/contato.component';
import { TipoComponent } from './tipo/tipo.component';

const routes: Routes = [
    {path:'', redirectTo:"home", pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'sobre', component: SobreComponent},
    {path:'cadastro', component: CadastroComponent},
    {path:'login', component: LoginComponent},
    {path:'contato', component: ContatoComponent},

    {path:'tipo', component: TipoComponent},
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
