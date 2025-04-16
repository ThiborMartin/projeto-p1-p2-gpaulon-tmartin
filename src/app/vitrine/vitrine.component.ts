import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public mensagem: String = "";
  exibirMensagem(msg: string) {
    this.mensagem = msg;
    setTimeout(() => {
      this.mensagem = '';
    }, 2500);
  }

  public clienteLogado: Cliente | null = null;

  public produtos: Produto[] = [
    {"codigo":1, "nome":"PC Gamer DARK3", "valorUnitario":5800.00, "descritivo":"Gabinete Gamer, 4 fans RGB, Water Cooler RGB, Intel i7 - 12700GF, GPU - RTX 5090 Super, Fonte modular 1050w.", "qtd": 0, "valorTotal": 0.00},
    {"codigo":2, "nome":"PC Gamer SLACK2", "valorUnitario":3500.00, "descritivo":"Gabinete Gamer, 7 fans RGB, Intel i5 - 10400GF, GPU - GTX 1050TI, Fonte Thunder 500w.", "qtd": 0, "valorTotal": 0.00},
    {"codigo":3, "nome":"GeForce RTX4060", "valorUnitario":3100.00, "descritivo":"8GB GDDR6, Clock de memória: 17 Gbps, Entradas: 3 x DisplayPort 1.4a | 1 x HDMI 2.1a.", "qtd": 0, "valorTotal": 0.00},
    {"codigo":4, "nome":"AMD Radeon RX 6600", "valorUnitario":1800.00, "descritivo":"8GB GDDR6, Clock de memória: 14 Gbps, HDMI 2.1 VRR 3 x DisplayPort 1.4 com DSC.", "qtd": 0, "valorTotal": 0.00},
    {"codigo":5, "nome":"Monitor Samsung ODYSSEY 34'", "valorUnitario":2600.00, "descritivo":"Ultra WQHD, 180Hz, Tela Ultrawide, DIsplay port e HDMI.", "qtd": 0, "valorTotal": 0.00},
    {"codigo":6, "nome":"Monitor AlienWare 32'", "valorUnitario":1700.00, "descritivo":"FullHD 4k - QLED, 180Hz, Tela Ultrawide, Entrada HDMI.", "qtd": 0, "valorTotal": 0.00},
    {"codigo":7, "nome":"Headset Havit H2035U", "valorUnitario":120.00, "descritivo":"Falante: 50mm, Sensibilidade: 99dB±3, Resposta de frequência: 20Hz – 20kHz, Microfone:4,0 x 1,5 mm.", "qtd": 0, "valorTotal": 0.00},
    {"codigo":8, "nome":"Headset RedDragon Cadmus RGB", "valorUnitario":180.00, "descritivo":"Surround 7.1, Alta Imersão, Design com alça de cabeça, Design leve.", "qtd": 0, "valorTotal": 0.00},
    {"codigo":9, "nome":"Teclado RedDragon Valheim Rainbow", "valorUnitario":300.00, "descritivo":"Switches Redragon Brown, Acionamento Mecânico, Hot Swap, Formato Full Size, Layout ABNT2.", "qtd": 0, "valorTotal": 0.00}
  ];

  public comprar(item: Produto) {
    const jsonCliente = localStorage.getItem("cliente");
    if (jsonCliente != null) {
      this.clienteLogado = JSON.parse(jsonCliente);
      if (this.clienteLogado?.logado === true) {
        const chaveCesta = `cesta-${this.clienteLogado.email}`;
        let jsonCesta = localStorage.getItem(chaveCesta);
        let cesta = new Cesta();

        if (jsonCesta != null) {
          cesta = JSON.parse(jsonCesta);
        } else {
          cesta.cliente = this.clienteLogado;
          cesta.itens = [];
        }

        const itemExistente = cesta.itens.find(p => p.codigo === item.codigo);

        if (itemExistente) {
          itemExistente.qtd += 1;
          itemExistente.valorTotal = itemExistente.qtd * item.valorUnitario;
        } else {
          const novoItem: Produto = { ...item, qtd: 1, valorTotal: item.valorUnitario };
          cesta.itens.push(novoItem);
        }

        cesta.valorTotal = cesta.itens.reduce((soma, p) => soma + p.valorTotal, 0);
        localStorage.setItem(chaveCesta, JSON.stringify(cesta));

        this.exibirMensagem(`✅ ${item.nome} adicionado ao carrinho`);
        console.log("Cesta atual:", cesta);
      } else {
        this.exibirMensagem("⚠️ Você precisa estar logado para utilizar o carrinho");
      }
    }
  }
}
