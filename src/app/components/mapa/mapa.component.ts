import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[]=[];

  lat = 51.678418;
  lng = 7.809007;

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { 
    
    if(localStorage.getItem('marcadores')){
      // console.log();
      this.marcadores= JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  agregarMarcador(evento){
    // console.log(evento.coords.lat);
    const nuevoMarcador= new Marcador(evento.coords.lat,evento.coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarMarcadores();
  }
  
  guardarMarcadores(){
    localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
    this.openSnackBar('Marcador Agregado', 'Cerrar');
  }

  borrarMarcador(pos: number){
    // console.log(pos);
    this.marcadores.splice(pos,1);
    this.guardarMarcadores();
    this.openSnackBar('Marcador Eliminado', 'Cerrar');
  }

  editarMarcador(marcador:Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('Se cierra el modal');
      console.log(result);

      if(!result){
        return;
      }

      marcador.titulo= result.titulo;
      marcador.desc=result.desc;
      this.guardarMarcadores();
      this.openSnackBar('Marcador Actualizado', 'Cerrar');

    });
  }

}
