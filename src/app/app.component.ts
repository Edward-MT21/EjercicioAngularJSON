import { Component,OnDestroy, OnInit } from '@angular/core';
import  { ElementosService } from './elementos.service';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit{
  title = 'Proyecto Angular Consumir JSON';
  elementos: any = null;


  // Usamos este disparador porque la búsqueda de la lista de datos puede ser bastante larga,
  // por lo tanto, nos aseguramos de que los datos se obtengan antes de renderizar
  dtTrigger: Subject<any> = new Subject<any>();

  dtOptions: DataTables.Settings = {};

  constructor(private elementosService:ElementosService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.elementosService.consultarJSON()
      .subscribe(
        result => {
          this.elementos = result;
          this.dtTrigger.next();
        },
        error => {
          console.log('problemas');
        }
      );
  }

  ngOnDestroy(): void {
    // Dar de baja del evento
    this.dtTrigger.unsubscribe();
  }  

}
