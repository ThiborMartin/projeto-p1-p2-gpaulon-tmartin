import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { Cesta } from '../model/cesta';

@Component({
  selector: 'app-cesta',
  imports: [FormsModule, CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  public mensagem: string = "";

  public obj: Cesta = new Cesta();

  constructor(router: Router){
    let json = localStorage.getItem("cesta");
    if(json==null){
      this.mensagem = "Sua cesta esta vazia!!!";
    } else {
      this.obj = JSON.parse(json);
    }
  }

  limpar(){
    this.obj = new Cesta();
    localStorage.removeItem("cesta");
    this.mensagem = "Sua cesta esta vazia!!!";
  }
}
