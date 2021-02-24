import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Logged } from 'src/interfaces/logged';
import { User } from 'src/interfaces/user';
import { UsuariosService } from 'src/services/usuarios.service';





@Component({
  selector: 'app-user',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
Logged:Logged;
@Input()
forma: FormGroup;
usuario: User;
imgPreview: string | ArrayBuffer;
existe:boolean;
img: SafeResourceUrl;
  
 

  
  constructor( private ruta: Router, public Usuario: UsuariosService, private _sanitizer: DomSanitizer,  ) {
    console.log(Usuario.Logged);

    
     

  }

  ngOnInit(): void {
    console.log(this.Usuario.usuario);
    
    

    
   
   /* this.Usuario.consultaUsuario$().subscribe( ( resp ) =>{
            
      console.log(resp);
      if(!resp['user']){
        this.existe= false;
      }else{
        this.Usuario.usuario = resp['user'];
        this.existe = true;
      }
    });
 */

//this.existe = this.Usuario.existe;

   
  }

  





}
