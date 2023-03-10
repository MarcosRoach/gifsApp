import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get historial() {
    return this.gifsService.historial;
  }

  // INYECTAR SERVICIO GIFSSERVICE
  constructor(private gifsService: GifsService) {}
  // INYECTAR SERVICIO GIFSSERVICE

  // Buscar por termino guardado
  buscar(termino: string) {
    this.gifsService.buscarGifs(termino);
  }
}
