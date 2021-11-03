import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto Angular Consumir JSON';
  articulos: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://www.datos.gov.co/resource/ax5z-5ugh.json")
      .subscribe(
        result => {
          this.articulos = result;
        },
        error => {
          console.log('problemas');
        }
      );
  }

}
