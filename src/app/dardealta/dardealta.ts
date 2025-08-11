import { Component, signal, output } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';
import { ServiciosService } from '../services/Servicios.service';

@Component({
  selector: 'app-dardealta',
  imports: [],
  templateUrl: './dardealta.html',
  styleUrl: './dardealta.css',
  providers: [ServiciosService]
})
export class Dardealta {
  TituloTarea = signal('');
  SeccionTarea = signal('');
  DescripcionTarea = signal('');

  onTituloInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.TituloTarea.set(value);
  }

  onSeccionInput(event: Event) {
    const value = (event.target as HTMLInputElement)?.value || '';
    this.SeccionTarea.set(value);
  }

  onDescripcionInput(event: Event) {
    const value = (event.target as HTMLTextAreaElement)?.value || '';
    this.DescripcionTarea.set(value);
  }

  constructor(private agregarService: ServiciosService) {}

  AgregarTarea() {
    const nuevatarea : Tarea = {
      id: this.generateId(),
      titulo: this.TituloTarea(),
      seccion: this.SeccionTarea(),
      descripcion: this.DescripcionTarea()
    };
    if (!nuevatarea.titulo.trim() || !nuevatarea.seccion.trim() || !nuevatarea.descripcion.trim()) {
      alert("Todos los campos son obligatorios");
      return;
}
    this.agregarService.AgregarTarea(nuevatarea);
    this.resetForm();
    alert("Tarea agregada");
  }

  resetForm() {
      this.TituloTarea.set('');
      this.SeccionTarea.set('');
      this.DescripcionTarea.set('');
  }

  private generateId(): number {
    let id = localStorage.getItem("ultimoid");
    if (!id) {
      id = "0";
    }
    id = (Number(id) + 1).toString();
    localStorage.setItem("ultimoid", id.toString());
    return Number(id);
  }

}
