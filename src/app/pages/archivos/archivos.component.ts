import { Component, OnInit } from '@angular/core';
import { ArchivoService } from '../../services/archivo.service';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.css']
})
export class ArchivosComponent implements OnInit {

  archivos:[] = [];
  idusuario: number;
  srcResult: any;
  cargando: boolean = true;
  fileUpload: File;

  constructor(private archivoService: ArchivoService, private authService: AuthService) { 
    this.idusuario = authService.usuario.idusuario;
  }

  ngOnInit(): void {
    this.archivoService.getArchivos(this.idusuario).subscribe( (resp: any) => {
      this.archivos = resp.archivos;     
      this.cargando = false;      
    });

  }

  subirArchivo(file: File){
    this.fileUpload = file;    
  }

  aceptarUpload(){
    if(!this.fileUpload){
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Seleccione un archivo'
      })
    }
    const nombre_file = this.fileUpload.name;
    this.archivoService.subirArchivos(this.fileUpload, this.idusuario, nombre_file).subscribe( (resp: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Hey',
        text: 'Archivo subido correctamente!'
      })  
      this.ngOnInit();
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.error.msg,
      })
    })  
  }


  deleteArchivo(idarchivo: number): void{
    Swal.fire({
      title: 'Are you sure?',
      text: "No podrá revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.archivoService.deleteArchivo(idarchivo).subscribe( (resp: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Hey',
            text: 'Archivo Eliminado correctamente!'
          })  
          this.ngOnInit();
        }, err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo eliminar el Archivo..',
          })    
        })
      }
    })
  }

  async uploadArchivo(archivo: any){
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
    })

    if(file){

      const nombre_file = file.name;
      this.archivoService.updateArchivos(file, archivo.idarchivo, nombre_file).subscribe( (resp: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Hey',
          text: 'Archivo modificado correctamente!'
        })  
        this.ngOnInit();
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.msg,
        })
      })  
      
    }
    
  }

}
