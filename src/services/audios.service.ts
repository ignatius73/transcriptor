import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FileItem } from 'src/models/file-model';
import { Resultado } from 'src/interfaces/resultado';
import { environment } from '../environments/environment';
import { io } from 'socket.io-client';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AudiosService {
  respuesta:any;
  transcripcion:any;
  


  constructor(private http: HttpClient, private socket:Socket) {
    

    this.socket.on('connect', ( )=>{
      console.log('Conectado al Servidor');

    });  
    this.socket.on('disconnect', ()=>{
      console.log('Desconectado al Servidor');

    });
  }

 
   enviaArchivo(archivo: FormData){

   
       const apiurl = `${environment.apiUrl}/api/convert`;
       console.log(apiurl);
       
      return this.http.post(apiurl, archivo);

     
     
   }



   procesaArchivo(resultado:Resultado){
    this.socket.emit('long-recognition', resultado);
    return this.socket.fromEvent('long-recognition');//.pipe(map((data) => data));


    
   /* const apiurl = `${environment.apiUrl}/api/upload`;
    console.log(apiurl);
    return this.http.post(apiurl, resultado);*/
    
}
   
}
