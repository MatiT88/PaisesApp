import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false ;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) {}

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPorCapital( termino )
      .subscribe ( (paises: Country[]) => {
        this.paises = paises;
        

      }, (error) => {
        this.hayError = true;
        this.paises = [];
      } );
  }

}
