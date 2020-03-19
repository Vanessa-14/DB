import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../../models/usuario';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  searchTex
  @Input() usuarios: any;
  @Input() componentes: any;
  @Output() salida = new EventEmitter();
  @Output() actualizarUsuarios = new EventEmitter();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {}

  mostrarActualizar(id: string) {
    this.componentes.registrarComponent = false;
    this.componentes.actualizarComponent = true;
    this.salida.emit(id);
  }

  eliminar(usuario: UsuarioModel) {
    Swal.fire({
      title: `¿Estás seguro qué deseas eliminar a ${usuario.strFirst_Name}?`,
      text: 'No se pueden revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí.',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.usuarioService.eliminarUsuario(usuario._id).then((customer: any) => {
          Toast.fire(customer.msg, '', 'success');
          this.componentes.registrarComponent = true;
          this.componentes.actualizarComponent = false;
          this.actualizarUsuarios.emit();
        }).catch((err: any) => {
          Toast.fire(err.error.msg, '', 'error');
        });
      }
    });
  }

}
