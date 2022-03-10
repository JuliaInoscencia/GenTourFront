import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tipos } from '../model/Tipos';
import { AuthService } from '../service/auth.service';
import { TipoService } from '../service/tipo.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  tipo: Tipos = new Tipos()
  listaTipos: Tipos[]

  constructor(
    private router: Router,
    private tipoService: TipoService,
    private authService: AuthService
  ) { }

  ngOnInit(){

    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/home'])
    }

    this.findAllTipos()
    this.authService.refreshToken()

  }

  findAllTipos(){
    this.tipoService.getAllTipo().subscribe((resp: Tipos[]) => {
      this.listaTipos = resp
    })
  }

  cadastrar(){
    this.tipoService.postTipo(this.tipo).subscribe((resp: Tipos)=>{
      this.tipo = resp
      alert('Tipo Cadastrado com sucesso!🚐')
      this.findAllTipos()
      this.tipo = new Tipos();
    })
  }
}