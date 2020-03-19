import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioModel } from '../../../models/usuario';
import Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  @Output() salida = new EventEmitter();
  usuario: UsuarioModel = new UsuarioModel();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {}

  registrar(forma: NgForm) {
    this.usuarioService.registrarUsuario(this.usuario).then((usuario: any) => {
      Toast.fire(usuario.msg, '', 'success');
      forma.reset();
      this.salida.emit();
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    });
  }

}
