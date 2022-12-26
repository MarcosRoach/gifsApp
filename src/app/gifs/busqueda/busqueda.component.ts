import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  // INYECTAR SERVICIO GIFSSERVICE
  constructor(private gifsService: GifsService) {}
  // INYECTAR SERVICIO GIFSSERVICE

  buscar() {
    // TOMAR VALOR DE INPUT
    const termino = this.txtBuscar.nativeElement.value.toLowerCase();
    // TOMAR VALOR DE INPUT

    if (termino.trim().length === 0) {
      return;
    } else {
      // AGREGAR VALOR AL ARRAY DEL SERVICIO
      this.gifsService.buscarGifs(termino);
      // AGREGAR VALOR AL ARRAY DEL SERVICIO

      // BORRAR INPUT
      this.txtBuscar.nativeElement.value = '';
      // BORRAR INPUT
    }
  }
}
