import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { UsuarioComponent } from './components/user/usuario/usuario.component';
import { EditarUsuarioComponent } from './components/user/usuario/editar-usuario/editar-usuario.component';
import { NuevoUsuarioComponent } from './components/user/usuario/nuevo-usuario.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'principal', component : PrincipalComponent, canActivate:[AuthGuard] },
  { path: 'user', component : UsuarioComponent },
  { path: 'user/editarUsuario', component : EditarUsuarioComponent },
  { path: 'user/nuevoUsuario', component : NuevoUsuarioComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
