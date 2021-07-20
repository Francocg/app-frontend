import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const endpoint = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor(private http: HttpClient) { }

  getArchivos(idusuario: number) {
    return this.http.get(`${endpoint}/archivos/${idusuario}`);
  }

  subirArchivos(file: File, idusuario: number, nombre_file: string){
    const formData = new FormData();
    formData.append('file', file, nombre_file);
    return this.http.post(`${endpoint}/archivos/${idusuario}`, formData);
  }

  deleteArchivo(idarchivo: number) {
    return this.http.delete(`${endpoint}/archivos/${idarchivo}`);
  }

  updateArchivos(file: File, idarchivo: number, nombre_file: string){
    const formData = new FormData();
    formData.append('file', file, nombre_file);
    return this.http.put(`${endpoint}/archivos/${idarchivo}`, formData);
  }


}
