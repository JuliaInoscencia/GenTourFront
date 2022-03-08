import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipos } from 'src/app/model/Tipos';
import { TipoService } from 'src/app/service/tipo.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tipo-delete',
  templateUrl: './tipo-delete.component.html',
  styleUrls: ['./tipo-delete.component.css']
})
export class TipoDeleteComponent implements OnInit {

  tipo: Tipos = new Tipos()
  idTipo:number

  constructor(
    private tipoService: TipoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou, faça login novamente. 🏝')
      this.router.navigate(['/home'])
    }

    this.idTipo = this.route.snapshot.params['id']
    this.findByIdTipo(this.idTipo)

  }

  findByIdTipo(id: number) {
    this.tipoService.getByIdTipo(this.idTipo).subscribe((resp: Tipos) => {
      this.tipo = resp
    })
  }

  apagar() {
    this.tipoService.deleteTipo(this.idTipo).subscribe(() => {
      alert('Tipo apagado com sucesso!')
      this.router.navigate(['/tipo'])
    })
  }

}
