import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';
import {signal}  from "@angular/core";
import {effect}  from "@angular/core";




@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  loadfromlocalstorage = (): Tarea[] => {
  const tarea = localStorage.getItem("tarea");
  return tarea ? JSON.parse(tarea)  : [];
};
  tareaguardada =  signal<Tarea[]>(this.loadfromlocalstorage());

  guardartarea = effect(() => {
      localStorage.setItem("tarea", JSON.stringify(this.tareaguardada()));
      console.log("Tarea guardada en localStorage");
  });

  AgregarTarea(tarea : Tarea) {
    this.tareaguardada.update(tareas => [...tareas, tarea]);
  }

  EliminarTarea(tareaAEliminar: Tarea) {
  this.tareaguardada.update(tareas =>
    tareas.filter(t => t.id !== tareaAEliminar.id)
  );
}

EliminarTodasLasTareas() {
  this.tareaguardada.update(() => []);
  this.resetId();
}

resetId(): void {
  localStorage.setItem("ultimoid", "0");
}

filtracionesdetareas(seccion: string): Tarea[] {
  return this.tareaguardada().filter(tarea => tarea.seccion === seccion);
}

}
