import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { NuevoUsuarioComponent } from './usuario/nuevo-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { FormularioUsuarioComponent } from './usuario/formulario-usuario/formulario-usuario.component';






@NgModule({
  declarations: [UsuarioComponent, NuevoUsuarioComponent, EditarUsuarioComponent,FormularioUsuarioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
