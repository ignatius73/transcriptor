import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private _usuarios:UsuariosService, router:Router) {
    
    }
  
  


  ngOnInit(): void {
    
}


}