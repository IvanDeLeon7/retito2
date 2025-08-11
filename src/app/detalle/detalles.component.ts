import { Component, Inject } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detalles',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {

  constructor(
    public dialogRef: MatDialogRef<DetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public tarea: Tarea
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
