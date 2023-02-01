import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';


import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];

  constructor(
    private activateRout: ActivatedRoute,
    private PaisService: PaisService
    ){};

  ngOnInit(): void {
    
    this.activateRout.params
      .pipe(
        switchMap( (param) => this.PaisService.getPaisPorCodigo( param['id'] )  ),
        tap( console.log )
      )
      .subscribe( pais => { this.pais = pais })
    // this.activateRout.params
    //   .subscribe( ({ id }) => {
    //     console.log(id);

    //     this.PaisService.getPaisPorCodigo( id )
    //       .subscribe( pais => {
    //         console.log(pais);
    //       } )

    //   } );
  }
}
