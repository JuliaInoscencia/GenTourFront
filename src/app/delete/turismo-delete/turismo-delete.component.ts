import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Turismo } from 'src/app/model/Turismo';
import { TurismoService } from 'src/app/service/turismo.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-turismo-delete',
  templateUrl: './turismo-delete.component.html',
  styleUrls: ['./turismo-delete.component.css']
})
export class TurismoDeleteComponent implements OnInit {

  turismo: Turismo = new Turismo()
  idTurismo: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private turismoService: TurismoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente. 🏝')
      this.router.navigate(['/home'])
    }

    this.idTurismo = this.route.snapshot.params['id']
    this.findByIdTurismo(this.idTurismo)
  }

  findByIdTurismo(id:number) {
    this.turismoService.getByIdTurismo(id).subscribe((resp: Turismo) => {
      this.turismo = resp
    })
  }

  apagar() {
    this.turismoService.deleteTurismo(this.idTurismo).subscribe(() => {
      alert('Turismo apagado com sucesso! 🏝')
      this.router.navigate(['/home'])
    })
  }

}
