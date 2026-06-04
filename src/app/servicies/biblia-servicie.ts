import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BibliaServicie {

  constructor(
    private http: HttpClient,  // para manejar las peticiones http 
  ){}

  public esquema_recibir(){

    return{
      "verision" : '', 
      "libro" : '',
      "capitulo" : '',
      "versiculo" : '',
      "versiculocont" : ''
    }

  }

  public obtenerDatos(dato:number):Observable<any> {
        return this.http.get<any>(`${environment.url_api}/estructura/?value=${dato}`);
  }

  public getVersiculo(libro: number, capitulo: number, versiculo: number): Observable<any> {
    return this.http.get<any>(`${environment.url_api}/versiculo/?libro=${libro}&capitulo=${capitulo}&versiculo=${versiculo}`);
}

}
