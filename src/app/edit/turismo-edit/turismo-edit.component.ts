import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipos } from 'src/app/model/Tipos';
import { Turismo } from 'src/app/model/Turismo';
import { TipoService } from 'src/app/service/tipo.service';
import { TurismoService } from 'src/app/service/turismo.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-turismo-edit',
  templateUrl: './turismo-edit.component.html',
  styleUrls: ['./turismo-edit.component.css']
})
export class TurismoEditComponent implements OnInit {

  turismo: Turismo = new Turismo()
  tipo: Tipos = new Tipos()
  listaTipos: Tipos[]
  idTipo: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private turismoService: TurismoService,
    private tipoService: TipoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente. 🏝')
      this.router.navigate(['/home'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTurismo(id)
    this.findAllTipos()
  }

  findAllTipos() {
    this.tipoService.getAllTipo().subscribe((resp: Tipos[]) => {
      this.listaTipos = resp
    })
  }

  findByIdTurismo(id: number) {
    this.turismoService.getByIdTurismo(id).subscribe((resp: Turismo) => {
      this.turismo = resp
    })
  }

  findByIdTipo() {
    this.tipoService.getByIdTipo(this.idTipo).subscribe((resp: Tipos) => {
      this.tipo = resp
    })
  }

  atualizar() {
    this.tipo.id = this.idTipo
    this.turismo.tipo = this.tipo

    this.turismoService.putTurismo(this.turismo).subscribe((resp: Turismo) => {
      this.turismo = resp
      alert('Atualização efetuada com sucesso! 🏝')
      this.router.navigate(['/home'])
    })
  }

}
