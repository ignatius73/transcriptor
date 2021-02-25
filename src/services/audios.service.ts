import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FileItem } from 'src/models/file-model';
import { Resultado } from 'src/interfaces/resultado';
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AudiosService {

  constructor(private http: HttpClient) {}

 
   enviaArchivo(archivo: FormData){
       const apiurl = `${environment.apiUrl}/api/upload`;
       console.log(apiurl);
       
       return this.http.post(apiurl, archivo);
   }

   
}
