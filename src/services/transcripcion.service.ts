import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Transcripcion } from '../interfaces/transcripcion';


@Injectable({
  providedIn: 'root'
})
export class TranscripcionService {

  constructor(private http:HttpClient) { }


  guardarTranscripcion( transcripcion:Transcripcion){

    return this.http.post(`${ environment.apiUrl }/api/nuevaTranscripcion`, transcripcion);
      
  }

  getTranscripciones ( idUsuario: string){
    return this.http.get(`${ environment.apiUrl }/api/transcripciones?idUsuario=${idUsuario}`);
  }
}
