import { Component, inject, OnInit} from '@angular/core';
import { ServiciosService } from '../services/Servicios.service';
import { Tarea } from '../interfaces/tarea.interface';
import { DetallesComponent } from '../detalle/detalles.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listado',
  imports: [],
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class Listado implements OnInit {
  tareas : Tarea[] = [];
  filtrado = false;
  seccionFiltrada = '';
  tareasFiltradas: Tarea[] = [];

  constructor(
    private AgregarService: ServiciosService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tareas = this.AgregarService.loadfromlocalstorage();
  }

  getListado(): Tarea[] {
    return this.AgregarService.tareaguardada();
  }

  Filtrarporseccion(seccion: string): void {
    this.filtrado = true;
    console.log(this.filtrado);
    console.log(seccion);
    this.seccionFiltrada = seccion;
    this.tareasFiltradas = this.AgregarService.filtracionesdetareas(seccion);
  }


  DeshacerFiltros(): void {
    this.filtrado = false;
    this.seccionFiltrada = '';
    this.tareasFiltradas = [];
  }

  verdetalles(tarea: Tarea){
    const dialogRef = this.dialog.open(DetallesComponent, {
      width: '500px',
      data: tarea
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
    });
  }

  Eliminar(tarea: Tarea) {
    console.log("Tarea eliminada", tarea);
    this.AgregarService.EliminarTarea(tarea);
    alert("Tarea eliminada");

  }

  EliminarTodo() {
    this.AgregarService.EliminarTodasLasTareas();
    alert("Todas las tareas eliminadas");
  }

}
