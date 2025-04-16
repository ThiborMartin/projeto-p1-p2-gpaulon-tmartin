import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cliente } from '../model/cliente';
import { Cesta } from '../model/cesta';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-cesta',
  imports: [FormsModule, CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  public mensagem: string = "";
  exibirMensagem(msg: string) {
    this.mensagem = msg;
    setTimeout(() => {
      this.mensagem = '';
    }, 2500);
  }

  public objCesta: Cesta = new Cesta();
  public clienteLogado: Cliente | null = null;

  public cupom: string = '';
  public descontoAplicado: boolean = false;
  public valorComDesconto: number = 0;

  constructor(router: Router){
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const jsonCliente = localStorage.getItem("cliente");
      if (jsonCliente) {
        this.clienteLogado = JSON.parse(jsonCliente);
        if (this.clienteLogado?.logado) {
          const chaveCesta = `cesta-${this.clienteLogado.email}`;
          const jsonCesta = localStorage.getItem(chaveCesta);
          if (jsonCesta) {
            this.objCesta = JSON.parse(jsonCesta);
            if (!this.objCesta.cliente) {
              this.exibirMensagem("Sua cesta está vazia!");
            }
          } else {
            this.exibirMensagem("Sua cesta está vazia!");
          }
        } else {
          this.exibirMensagem("Você precisa estar logado para acessar o carrinho");
        }
      } else {
        this.exibirMensagem("Você precisa estar logado para acessar o carrinho");
      }
    } else {
      this.exibirMensagem("Ambiente sem localStorage");
    }
  }

  aplicarDesconto() {
    const cuponsValidos = ['PAULETE', 'NORTON', 'JANMYLLY'];
    if (cuponsValidos.includes(this.cupom.toUpperCase())) {
      const total = this.getTotalValor();
      this.valorComDesconto = total * 0.9;
      this.descontoAplicado = true;
      this.exibirMensagem("✅ Desconto aplicado com sucesso!");
    } else {
      this.descontoAplicado = false;
      this.exibirMensagem("❌ Cupom inválido!");
    }
  }

  atualizarQuantidade(item: Produto) {
    if (!this.clienteLogado) return;
    const chaveCesta = `cesta-${this.clienteLogado.email}`;
    const json = localStorage.getItem(chaveCesta);
    if (json) {
      const cesta: Cesta = JSON.parse(json);
  
      const itemEncontrado = cesta.itens.find(p => p.codigo === item.codigo);
      if (itemEncontrado) {
        itemEncontrado.qtd = item.qtd;
        itemEncontrado.valorTotal = item.qtd * item.valorUnitario;
      }
  
      cesta.valorTotal = cesta.itens.reduce((soma, i) => soma + i.valorTotal, 0);
      localStorage.setItem(chaveCesta, JSON.stringify(cesta));
      this.objCesta = cesta;
    }
  }

  getTotalItens(): number {
    const chaveCesta = this.clienteLogado ? `cesta-${this.clienteLogado.email}` : "";
    const json = localStorage.getItem(chaveCesta);
    if (!json) return 0;

    const cesta = JSON.parse(json);
    return cesta.itens.length;
  }

  getTotalValor(): number {
    const chaveCesta = this.clienteLogado ? `cesta-${this.clienteLogado.email}` : "";
    const json = localStorage.getItem(chaveCesta);
    if (!json) return 0;

    const cesta = JSON.parse(json);
    return cesta.itens.reduce((total: number, item: Produto) => total + item.valorUnitario * item.qtd, 0);
  }

  limparItem(item: Produto) {
    if (!this.clienteLogado) return;
    const chaveCesta = `cesta-${this.clienteLogado.email}`;
    const json = localStorage.getItem(chaveCesta);
    if (json) {
      const cesta: Cesta = JSON.parse(json);
      cesta.itens = cesta.itens.filter(p => p.codigo !== item.codigo);
      cesta.valorTotal = cesta.itens.reduce((soma, i) => soma + i.valorTotal, 0);
      localStorage.setItem(chaveCesta, JSON.stringify(cesta));
      this.objCesta = cesta;
      this.exibirMensagem(`❌ Item "${item.nome}" removido da cesta.`);
    }
  }

  limpar() {
    if (!this.clienteLogado) return;
    const chaveCesta = `cesta-${this.clienteLogado.email}`;
    this.objCesta = new Cesta();
    localStorage.removeItem(chaveCesta);
    this.exibirMensagem("Sua cesta está vazia!!!");
  }
}