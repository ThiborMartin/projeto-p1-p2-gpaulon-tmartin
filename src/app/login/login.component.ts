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

  constructor(private router: Router) {}

  exibirMensagem(msg: string) {
    this.mensagem = msg;
    setTimeout(() => {
      this.mensagem = '';
    }, 2500);
  }

  public logar() {
    const json = localStorage.getItem("clientes");

    if (json == null) {
      this.exibirMensagem("Usuário não cadastrado, verifique!");
      return;
    }

    const lista: Cliente[] = JSON.parse(json);

    const encontrado = lista.find(c =>
      c.email === this.obj.email && c.senha === this.obj.senha
    );

    if (encontrado) {
      encontrado.logado = true;
      localStorage.setItem("cliente", JSON.stringify(encontrado)); 
      this.router.navigate(['/vitrine']).then(() => window.location.reload());
    } else {
      this.exibirMensagem("Email ou senha inválidos!!");
    }
  }
}