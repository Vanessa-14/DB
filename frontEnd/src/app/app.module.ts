import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './componets/usuario/usuario.component';
import { RegistrarComponent } from './componets/usuario/registrar/registrar.component';
import { ActualizarComponent } from './componets/usuario/actualizar/actualizar.component';
import { TablaComponent } from './componets/usuario/tabla/tabla.component';
import { NavbarComponent } from './componets/shared/navbar/navbar.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    RegistrarComponent,
    ActualizarComponent,
    TablaComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
