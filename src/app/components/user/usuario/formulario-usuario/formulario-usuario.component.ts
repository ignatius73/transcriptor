import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logged } from 'src/interfaces/logged';
import { User } from 'src/interfaces/user';
import { UsuariosService } from 'src/services/usuarios.service';
import { TranscripcionService } from '../../../../../services/transcripcion.service';
import { Transcripcion } from '../../../../../interfaces/transcripcion';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
 
})
export class FormularioUsuarioComponent implements OnInit {
  logged:Logged;
  forma: FormGroup;
  usuario: User = {};
  imgPreview: string | ArrayBuffer;
  @Output()
  propagar= new EventEmitter<FormGroup>();
  transcrip: Transcripcion[];
  errores:any = '';

   
  constructor(private fb:FormBuilder, public usuarios:UsuariosService, public transcripciones: TranscripcionService) {
    console.log(usuarios.Logged);
    
   }

  ngOnInit(): void {
    console.log(`Usuario ${ this.usuarios.usuario }`);
    if ( this.usuarios.usuario ){
    this.usuario = this.usuarios.usuario[0];
    this.creaFormulario();
    this.resetFormulario();
    this.transcripciones.getTranscripciones( this.usuario._id).subscribe( ( resp )=>{
        if (resp['trans']){
          
          this.transcrip = resp['trans']; 
    } 
    });
  }else{
    this.logged = this.usuarios.Logged;
    this.usuario.email = this.logged.email;
    this.usuario.nombre = this.logged.given_name;
    this.usuario.img = this.logged.img;

    this.creaFormulario();
    this.forma.controls['email'].setValue(this.logged.email);
    this.forma.controls['email'].markAsTouched();
    this.forma.controls['nombre'].setValue(this.logged.given_name);
    this.forma.controls['nombre'].markAsTouched();
   
  }
  
  }

  creaFormulario(){
    this.forma = this.fb.group({
      "nombre"   : ['', Validators.required],
      "edad"     : ['', Validators.pattern('###')],
      "direccion":[''],
      "email"    :['', [Validators.required, Validators.email]],
      "img"      : [''],
      "plan"     : ['']
    })

    


  }

  selectImage(event){
    if (event.target.files.length > 0){
      const file = event.target.files[0];
      this.imgPreview = file;
      // preview de la img
      const reader = new FileReader();
      // leo el archivo seleccionado
      reader.onload = e => this.imgPreview = reader.result;
      reader.readAsDataURL(file);
    }
  }

  enviar(){
    console.log(this.forma);
    this.propagar.emit(this.forma);
    console.log(this.forma );
    /*this.forma.reset();
    this.imgPreview = null;*/
    
    

  }

  resetFormulario(){
    this.forma.reset({
      nombre: this.usuario.nombre,
      edad: this.usuario.edad,
      direccion: this.usuario.direccion,
      email: this.usuario.email,
      img: this.usuario.img,
      plan: this.usuario.plan
    })
    
  }

}
