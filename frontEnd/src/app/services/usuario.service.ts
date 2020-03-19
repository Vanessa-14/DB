import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  

  url:string = `http://localhost:3000`;

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.url}/customer`).toPromise();
  }

  obtenerUsuario(id: string) {
    return this.http.get(`${this.url}/customer/${id}`).toPromise();
  }

  registrarUsuario(usuario: UsuarioModel) {
    return this.http.post(`${this.url}/customer`, usuario).toPromise();
  }

  actualizarUsuario(id: string, usuario: UsuarioModel) {
    return this.http.put(`${this.url}/customer/${id}`, usuario).toPromise();
  }

  eliminarUsuario(id: string) {
    return this.http.delete(`${this.url}/customer/${id}`).toPromise();
  }
}
