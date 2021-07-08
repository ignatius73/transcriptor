import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Logged } from 'src/interfaces/logged';
import { User } from 'src/interfaces/user';
import { UsuariosService } from 'src/services/usuarios.service';
import { TranscripcionService } from 'src/services/transcripcion.service';
import { Transcripcion } from '../../../../interfaces/transcripcion';





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
transcripciones:Transcripcion[];
  
 

  
  constructor( private ruta: Router, public Usuario: UsuariosService, private _sanitizer: DomSanitizer, private transcrip: TranscripcionService ) {
    console.log(Usuario.Logged);
    

    
     

  }

  ngOnInit(): void {
    //console.log(`Usuario recibido en Usuario.Component ${this.Usuario.usuario._id}`);
    //console.log(`Usuario recibido en Usuario.Component ${JSON.stringify(this.Usuario.usuario)}`);
    //console.log(`Usuario recibido en Usuario.Component ${this.Usuario.usuario[0]._id}`);

   // this.transcrip.getTranscripciones(this.Usuario.usuario)
    

   
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
