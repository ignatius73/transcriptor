import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileItem } from '../../../../src/models/file-model';
import { Resultado } from 'src/interfaces/resultado';
import { AudiosService } from 'src/services/audios.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { User } from 'src/interfaces/user';
import { TranscripcionService } from '../../../services/transcripcion.service';
import { Transcripcion } from 'src/interfaces/transcripcion';

import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  archivos: Array <File>;
  archivo: FileItem[] = [];
  voces: string = '1';
  title = 'desgrabate';
  resultado: Resultado = { ok: false,
  message: ''};
  @ViewChild ('archivoUploader') archivoUploader:ElementRef;
  loading = false;
  transcripto: Transcripcion = {};
  
  


  constructor( private audiosService: AudiosService, private usuario:UsuariosService, private transcripcion:TranscripcionService){
    
  }
   




imprime(ar: NgForm){
  console.log(ar);
}


onUpload(){
  this.loading= true;
  const formData = new FormData();
  console.log(this.voces);

  for ( const propiedad in Object.getOwnPropertyNames(this.archivos)){

   const nuevoArchivo = new FileItem(this.archivos[propiedad]);
   formData.append('archivo',nuevoArchivo.archivo, nuevoArchivo.nombre);
   formData.append('voces', this.voces);
  /* setTimeout(() => {
    
    this.resultado.message = "Parece que la transcripción está tardando bastante. Cuando finalice la verás aquí reflejada";
}, 10000);*/
   this.audiosService.enviaArchivo(formData).subscribe( (res:any) => {

      if ( res ){
      
       this.resultado.ok =  res.ok;
       //this.resultado.message = res.message;
       this.resultado.extension = res.extension;
       this.resultado.filename = res.filename;
       this.resultado.voces = this.voces;
       this.resultado.ruta = res.ruta;
      
      
       console.log(res);
      
       this.audiosService.procesaArchivo(this.resultado).subscribe( (resp:any) =>{
         console.log(resp);
         
         if (resp){
          this.loading = false; 
          this.transcripto.texto = resp.message;
          console.log(this.usuario.usuario);
          this.transcripto.idUsuario = this.usuario.usuario[0]._id;
          this.resultado.message = resp.message;
          console.log(this.transcripto);
          this.transcripcion.guardarTranscripcion(this.transcripto).subscribe( (res:any) =>{
            if( res ){
              console.log(res);
            }
          });
         
        }

       

      });
        
  }

   });




}

}

onFileChange( e: any ){

  this.archivos = e.target.files;

}

limpiar( f: NgForm ): void{
  f.reset();
  this.archivoUploader.nativeElement.value = null;

}




}
