import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tipos } from '../model/Tipos';
import { Turismo } from '../model/Turismo';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { TipoService } from '../service/tipo.service';
import { TurismoService } from '../service/turismo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tipo: Tipos = new Tipos();
  listaTipos: Tipos[];
  idTipos: number

  usuario: Usuario = new Usuario();
  idUsuario = environment.id

  turismo: Turismo = new Turismo();
  listaTurismo: Turismo[]
  listaFiltrada: any = []

  constructor(
    private router: Router,
    private turismoService: TurismoService,
    private tipoService: TipoService,
    private authService: AuthService) {
  }

  ngOnInit() {
    window.scroll(0, 0)

    // if (environment.token == '') {
    //   alert('Sua sessão expirou, faça o login novamente.')
    //   this.router.navigate(['/home'])
    // }
    this.turismoService.refreshToken()
    this.authService.refreshToken()
    this.getAllTipos()
    this.getAllTurismos()
  }
  getAllTipos(){
    this.tipoService.getAllTipo().subscribe((resp: Tipos[])=>{
      this.listaTipos = resp
    })
  }
  findTiposById(){
    this.tipoService.getByIdTipo(this.idTipos).subscribe((resp: Tipos)=>{
      this.tipo = resp
    })
  }
  getAllTurismos(){
    this.turismoService.getAllTurismo().subscribe((resp: Turismo[])=>{
      this.listaTurismo = resp
      this.listaFiltrada = this.listaTurismo.sort((a, b) => a.preco - b.preco).slice(0,8)
    })
  }
  findUsuarioById(){
    this.authService.getUsuarioById(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }
  cadastrar(){

    this.tipo.id = this.idTipos
    this.turismo.tipo = this.tipo

    this.usuario.id = this.idUsuario
    this.turismo.usuario = this.usuario

    console.log(this.turismo)
    this.turismoService.postTurismo(this.turismo).subscribe((resp: Turismo)=>{
      this.turismo = resp
    alert('Cadastrado com sucesso! 🏖')
    this.turismo = new Turismo()
    this.getAllTurismos()
    })
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }
}
