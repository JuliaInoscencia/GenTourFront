import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  userSenha: string
  userTipo: string

  constructor(private auth: AuthService, private route: Router) {}

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.userSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.userTipo = event.target.value
  }

  cadastrar(){
    
    if(this.usuario.senha != this.userSenha){
      alert('Senhas Erradas')
    } else {
      this.auth.cadastrar(this.usuario).subscribe((resp:Usuario) =>{
        this.usuario = resp;
        alert('Usuario criado com sucesso.')
        this.route.navigate(['/entrar'])
      } )
    }


  }
}
