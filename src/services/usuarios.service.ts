import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logged } from '../interfaces/logged';
import { User } from 'src/interfaces/user';
import { environment } from '../environments/environment';





@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
email: string;
Logged:Logged = {};
usuario:User;
existe:boolean = false;
img:string;

  

  constructor( private http:HttpClient) {
      
   }

   getUsuario():any{
    this.consultaUsuario$().subscribe( (resp) =>{
     if (!resp["user"]) {
       console.log(resp.message);
      return false;
     }else{
       this.usuario = resp['user'];
       return true;
     }
      
    } );
    
   }

   consultaUsuario$( ): Observable<any>{
     const param: string = this.Logged.email;
     return this.http.get(`${ environment.apiUrl }/api/usuario?email=${ this.Logged.email}`)         
         };

    nuevoUsuario( usuario:User):Observable<any>{
      this.usuario = usuario;
      console.log( this.usuario);
      return this.http.post(`${ environment.apiUrl }/api/nuevoUsuario`, this.usuario);
    }
    
   
   
}
