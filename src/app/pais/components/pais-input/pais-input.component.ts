import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
 

  @Output() onEnter  : EventEmitter<string> = new EventEmitter()
  @Output() onDebunce: EventEmitter<string> = new EventEmitter()

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe( valor => {
        this.onDebunce.emit( valor )
    } )
  }

  buscar() {
    this.onEnter.emit( this.termino );
  };

  teclaPresionada() {
    this.debouncer.next( this.termino );
  }

}
