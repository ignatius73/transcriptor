import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/user';
import { UsuariosService } from '../../../../../services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  user:User;

  constructor( usuario:UsuariosService) { }

  ngOnInit(): void {
  }

}
