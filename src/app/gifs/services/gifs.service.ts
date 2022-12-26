import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftResponse, Gif } from '../interfaces/gifs.interfaces';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'Rm0BSzcHWCbj0uRXcXAxmKgELxDjYgic';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    // Cargar Local Storage Historial
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    // Cargar Local Storage Historial
  }

  buscarGifs(termino: string = '') {
    // SI EL TERMINO NO ESTA INCLUIDO EN EL ARRAY LO AGREGO
    if (!this._historial.includes(termino)) {
      this._historial.unshift(termino);

      // CORTAR ARREGLO PARA QUEDARME CON LOS 10 PRIMEROS
      this._historial = this._historial.splice(0, 10);

      // Grabar en Local Storage
      localStorage.setItem('historial', JSON.stringify(this._historial));
      // Grabar en Local Storage

      // CORTAR ARREGLO PARA QUEDARME CON LOS 10 PRIMEROS
    }
    // SI EL TERMINO NO ESTA INCLUIDO EN EL ARRAY LO AGREGO

    // LLAMAR A LA API GIPHY
    this.http
      .get<SearchGiftResponse>(
        `http://api.giphy.com/v1/gifs/search?api_key=Rm0BSzcHWCbj0uRXcXAxmKgELxDjYgic&q=${termino}&limit=10`
      )
      .subscribe((resp) => {
        this.resultados = resp.data;

        // Guardar en local storage
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
        // Guardar en local storage
      });

    // LLAMAR A LA API GIPHY
  }
}
