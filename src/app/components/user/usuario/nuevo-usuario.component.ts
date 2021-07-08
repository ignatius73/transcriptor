import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/interfaces/user';
import { UsuariosService } from '../../../../services/usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {
  usuario: User = {};
  user: any;
  forma: FormGroup;


  constructor( private usuerios:UsuariosService) { }

  ngOnInit(): void {
  }

  procesarPropagar(e:FormGroup){

    this.usuario.email = e.controls['email'].value;
    this.usuario.nombre = e.controls['nombre'].value;
    this.usuario.edad = e.controls['edad'].value;
    this.usuario.direccion = e.controls['direccion'].value;
    this.usuario.img = e.controls['img'].value;
    this.usuario.plan = e.controls['plan'].value;

    this.usuerios.nuevoUsuario(this.usuario).subscribe( ( resp )=>{
      console.log(resp);
    });
    
   
  }

}
