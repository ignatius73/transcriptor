import { Component, OnInit } from '@angular/core';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuariosService } from '../../../services/usuarios.service';
import { User } from '../../../interfaces/user';
import { Router } from '@angular/router';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  img : any = '';
  user: User;
  existe:boolean;
  url: string;

 


  constructor( public auth0: AuthService, 
               private _sanitizer: DomSanitizer, 
               private usuario:UsuariosService, 
               private route:Router,
               
               ) { 
                  this.url = window.location.href;
                  console.log( this.url );
                  this.auth0.user$.subscribe( (user )=>{
                  if ( user ){
                    usuario.Logged.email = user.email;
                    usuario.Logged.given_name = user.given_name;
                    usuario.Logged.img = user.picture;
                    

                    // usuario.email = this.usuario.Logged.email;
                    this.img = this._sanitizer.bypassSecurityTrustResourceUrl(user.picture);
                    
                    usuario.consultaUsuario$().subscribe( ( resp ) =>{
                      
                      if(resp['user']){
                        console.log(resp['user']);
                        usuario.usuario = resp['user'];
                        usuario.existe = true;
                        this.route.navigate(['/user']);
                      }else{
                        usuario.existe = false;
                        this.route.navigate(['/user/nuevoUsuario']);
                      }
                      
                    });
                    
                  }
                    
                    
                });
    
    





  }

  ngOnInit(): void {
    
    
         }

      
         
 


}
