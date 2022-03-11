import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  nome = environment.nome
  foto = '../../assets/img/userIcon.png'


  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  logar() {
    this.auth.entrar(this.usuarioLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.usuarioLogin = resp
        this.router.navigate(['/home'])

        environment.nome =this.usuarioLogin.nome
        environment.foto =this.usuarioLogin.foto
        environment.id =this.usuarioLogin.id
        environment.token = this.usuarioLogin.token

        this.foto = environment.foto
      },
      error: erro => {
        if (erro.status == 401) {
          alert('Usuário ou senha incorretos!')
        }
      }
    })
  }

  sair() {
    this.router.navigate(['/home'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}
