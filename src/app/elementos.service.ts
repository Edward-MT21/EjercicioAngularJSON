import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Elemento} from './elemento';

@Injectable({
  providedIn: 'root'
})
export class ElementosService {

  constructor(private http: HttpClient) { }

  consultarJSON() {
    return this.http.get<Elemento[]>("https://www.datos.gov.co/resource/ax5z-5ugh.json");
  }

}
