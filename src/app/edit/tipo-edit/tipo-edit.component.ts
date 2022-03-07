import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipos } from 'src/app/model/Tipos';
import { TipoService } from 'src/app/service/tipo.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tipo-edit',
  templateUrl: './tipo-edit.component.html',
  styleUrls: ['./tipo-edit.component.css']
})
export class TipoEditComponent implements OnInit {

  tipo: Tipos = new Tipos()

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

    let id = this.route.snapshot.params['id']
    this.findByIdTipo(id)

  }

  findByIdTipo(id: number) {
    this.tipoService.getByIdTipo(id).subscribe((resp: Tipos) => {
      this.tipo = resp
    })
  }

  atualizar() {
    this.tipoService.putTipo(this.tipo).subscribe((resp: Tipos) => {
      this.tipo = resp
      alert('Tipo atualizado com sucesso!')
      this.router.navigate(['/tipo'])
    })
  }

}
