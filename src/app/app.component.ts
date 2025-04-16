import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cliente } from './model/cliente';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-p1-p2-gpaulon-tmartin';
  public termoBusca: string = "";
  public mensagem: string = "";

  public clienteLogado: Cliente | null = null;

  public buscar(){
    if (this.termoBusca.trim()) {
      this.router.navigate(['/busca'], { queryParams: { q: this.termoBusca } });
    }
  }
  
  logout(){
    let json = localStorage.getItem("cliente");
    if(json != null){
      let clienteLogado = JSON.parse(json);
      clienteLogado.logado = false;
      localStorage.setItem("cliente", JSON.stringify(clienteLogado));
      this.clienteLogado = null;
      this.router.navigate(['/login']);
    }else{
      this.mensagem = "JSON e null";
    }
  }

  constructor(private router: Router) {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      let json = localStorage.getItem("cliente");
      if(json != null){
        this.clienteLogado = JSON.parse(json);
        if(this.clienteLogado != null && this.clienteLogado.logado === true){
          this.mensagem = "Olá, " + this.clienteLogado.nome;
        }
      }else{
        this.clienteLogado = null;
        this.mensagem = "Não logado";
      }
    }else{
      this.mensagem = "Ambiente sem localStorage";
    }
  }
}
