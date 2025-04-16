import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  public obj: Cliente = new Cliente();
  public mensagem: string = "";
  exibirMensagem(msg: string) {
    this.mensagem = msg;
    setTimeout(() => {
      this.mensagem = '';
    }, 2500);
  }


  public cadastrar() {
    let lista: Cliente[] = [];
  
    const json = localStorage.getItem("clientes");
    if (json != null) {
      lista = JSON.parse(json);
    }

    const jaExiste = lista.some(c => c.email === this.obj.email);
    if (jaExiste) {
      this.exibirMensagem("❌ E-mail já cadastrado!");
      return;
    }
  
    lista.push(this.obj); // adiciona novo cliente
    localStorage.setItem("clientes", JSON.stringify(lista));
  
    this.exibirMensagem("✅ Cadastro realizado com sucesso!");
    this.obj = new Cliente(); // limpa o formulário
  }
}
