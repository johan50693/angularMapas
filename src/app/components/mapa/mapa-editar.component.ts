import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Marcador } from 'src/app/classes/marcador.class';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marcador) {
      console.log(data);

      this.forma= this.fb.group({
        'titulo': this.data.titulo,
        'desc': this.data.desc
      });
    }

  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.forma.value);
    this.dialogRef.close(this.forma.value);
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
