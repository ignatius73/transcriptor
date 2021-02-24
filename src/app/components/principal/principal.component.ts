import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileItem } from '../../../../src/models/file-model';
import { Resultado } from 'src/interfaces/resultado';
import { AudiosService } from 'src/services/audios.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  archivos: Array <File>;
  archivo: FileItem[] = [];
  title = 'desgrabate';
  resultado: Resultado = { ok: false,
  message: ''};
  @ViewChild ('archivoUploader') archivoUploader:ElementRef;
  loading = false;


  constructor( private audiosService: AudiosService){}




imprime(ar: NgForm){
  console.log(ar);
}


onUpload(){
  this.loading= true;
  const formData = new FormData();

  for ( const propiedad in Object.getOwnPropertyNames(this.archivos)){

   const nuevoArchivo = new FileItem(this.archivos[propiedad]);
   formData.append('archivo',nuevoArchivo.archivo, nuevoArchivo.nombre);
   this.audiosService.enviaArchivo(formData).subscribe( (res:any) => {

      if ( res ){
       this.loading=false;
       this.resultado.ok =  res.ok;
       this.resultado.message = res.message;
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
