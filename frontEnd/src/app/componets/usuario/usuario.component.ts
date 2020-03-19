import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });
 
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  componentes: any = {
    tablaComponent: true,
    registrarComponent: true,
    actualizarComponent: false,
    id: ''
  };
  usuarios: any;
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios($event?) {
    this.usuarioService.obtenerUsuarios().then((customers: any) => {
      this.usuarios = customers.customers;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'warning');
      this.usuarios = [];
    });
  }

  obtenerUsuario(id) {
    this.usuarioService.obtenerUsuario(id).then((customer: any) => {
      this.usuario = customer.customers;
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    });
  }

}
