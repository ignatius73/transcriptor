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
  Logged:Logged;
  forma: FormGroup;
  usuario: User;
  imgPreview: string | ArrayBuffer;
  @Output()
  propagar= new EventEmitter<FormGroup>();
  transcrip: Transcripcion[];
   
  constructor(private fb:FormBuilder, public usuarios:UsuariosService, public transcripciones: TranscripcionService) {
    
    
   }

  ngOnInit(): void {
    this.usuario = this.usuarios.usuario[0];
    this.creaFormulario();
    this.resetFormulario();
    this.transcripciones.getTranscripciones( this.usuario._id).subscribe( ( resp )=>{
        if (resp['trans']){
          
          this.transcrip = resp['trans']; 
    } 
    });
  }

  creaFormulario(){
    this.forma = this.fb.group({
      "nombre"   : ['', Validators.required],
      "edad"     : ['', Validators.pattern('###')],
      "direccion":[''],
      "email"    :['', [Validators.required, Validators.email]],
      "img"      : [''],
      "estado"   : [''],
      "google"   : [''],
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
    this.propagar.emit(this.forma);
    console.log(this.forma );
    this.forma.reset();
    this.imgPreview = null;
    

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
