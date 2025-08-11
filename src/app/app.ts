import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ServiciosService } from './services/Servicios.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('retitoenangular');
  public agregarService = inject(ServiciosService);
}
