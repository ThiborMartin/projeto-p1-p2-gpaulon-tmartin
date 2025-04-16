import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';

@Component({
  selector: 'app-vitrine',
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent {
  public mensagem: String = "";
  public produtos: Produto[] = [
    {"codigo":1, "nome":"PC Gamer DARK3", "valor":5800.00, "descritivo":"Gabinete Gamer, 4 fans RGB, Water Cooler RGB, Intel i7 - 12700GF, GPU - RTX 5090 Super, Fonte modular 1050w."},
    {"codigo":2, "nome":"PC Gamer SLACK2", "valor":3500.00, "descritivo":"Gabinete Gamer, 7 fans RGB, Intel i5 - 10400GF, GPU - GTX 1050TI, Fonte Thunder 500w."},
    {"codigo":3, "nome":"GeForce RTX4060", "valor":3100.00, "descritivo":"8GB GDDR6, Clock de memória: 17 Gbps, Entradas: 3 x DisplayPort 1.4a | 1 x HDMI 2.1a."},
    {"codigo":4, "nome":"AMD Radeon RX 6600", "valor":1800.00, "descritivo":"8GB GDDR6, Clock de memória: 14 Gbps, HDMI 2.1 VRR 3 x DisplayPort 1.4 com DSC."},
    {"codigo":5, "nome":"Monitor Samsung ODYSSEY 34\'", "valor":2600.00, "descritivo":"Ultra WQHD, 180Hz, Tela Ultrawide, DIsplay port e HDMI."},
    {"codigo":6, "nome":"Monitor AlienWare 32\'", "valor":1700.00, "descritivo":"FullHD 4k - QLED, 180Hz, Tela Ultrawide, Entrada HDMI."},
    {"codigo":7, "nome":"Headset Havit H2035U", "valor":120.00, "descritivo":"Falante: 50mm, Sensibilidade: 99dB±3, Resposta de frequência: 20Hz – 20kHz, Microfone:4,0 x 1,5 mm."},
    {"codigo":8, "nome":"Headset RedDragon Cadmus RGB", "valor":180.00, "descritivo":"Surround 7.1, Alta Imersão, Design com alça de cabeça, Design leve."},
    {"codigo":9, "nome":"Teclado RedDragon Valheim Rainbow", "valor":300.00, "descritivo":"Switches Redragon Brown, Acionamento Mecânico, Hot Swap, Formato Full Size, Layout ABNT2."}
  ];

  public comprar(item: Produto){
    let json = localStorage.getItem("cesta");
    let cesta = new Cesta();
    if(json!=null){   
      cesta = JSON.parse(json);
    } 
    cesta.itens.push(item);
    localStorage.setItem("cesta", JSON.stringify(cesta));
    this.mensagem = " adicionado ao carrinho";
  }
}
