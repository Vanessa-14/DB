import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
 });

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  @Input() componentes: any;
  @Input() usuario: UsuarioModel;
  @Output() salida = new EventEmitter();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  actualizar() {
    this.usuarioService.actualizarUsuario(this.usuario._id, this.usuario).then((customer: any) => {
      Toast.fire(customer.msg, '', 'success');
      this.salida.emit();
      this.cancelar();
    }).catch((err: any) => {
      Toast.fire(err.error.msg, '', 'error');
    })

  }

  cancelar() {
    this.componentes.registrarComponent = true;
    this.componentes.actualizarComponent = false;
  }

}
