import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { TipoComponent } from './tipo/tipo.component';
import { TipoEditComponent } from './edit/tipo-edit/tipo-edit.component';
import { TipoDeleteComponent } from './delete/tipo-delete/tipo-delete.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
    {path:'', redirectTo:"inicio", pathMatch:'full'},
    {path:'inicio', component: InicioComponent},
    {path:'home', component: HomeComponent},
    {path:'sobre', component: SobreComponent},
    {path:'cadastro', component: CadastroComponent},
    {path:'contato', component: ContatoComponent},

    {path:'tipo', component: TipoComponent},
    {path:'tipo-edit/:id', component: TipoEditComponent},
    {path:'tipo-delete/:id', component: TipoDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
