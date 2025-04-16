import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public mensagem: string = "";
  public obj: Cliente = new Cliente();

  public logar(){
    let json = localStorage.getItem("cliente");
    if(json==null){
      this.mensagem = "Usuário não cadastrado, verifique!";
    }else{
      let clienteGravado = JSON.parse(json);
      if(this.obj.email==clienteGravado.email && this.obj.senha==clienteGravado.senha ){
        this.obj.logado = true;
        clienteGravado.logado = true;
        localStorage.setItem("cliente", JSON.stringify(clienteGravado));
        this.router.navigate(['/vitrine']).then(() => {
          window.location.reload(); 
        });
      }else{
        this.mensagem = "Email ou senha invalidos!!";
      }
    }
  }

  constructor(private router: Router){

  }
}
