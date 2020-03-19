import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './componets/usuario/usuario.component';

const routes: Routes = [
  {path: 'crud', component: UsuarioComponent},
  { path: '**', component:  UsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
