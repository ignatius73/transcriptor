import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { UserModule } from './components/user/user.module';
import { AudiosService } from '../services/audios.service';
import { UsuariosService } from '../services/usuarios.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModule } from '@auth0/auth0-angular';
import { cred } from 'src/credentials';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PrincipalComponent
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    AuthModule.forRoot({
      domain: cred.domain,
      clientId: cred.clientId
    }),
    ReactiveFormsModule
  ],
  providers: [AudiosService,UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
