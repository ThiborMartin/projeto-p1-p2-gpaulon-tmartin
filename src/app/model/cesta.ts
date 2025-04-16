import { Cliente } from "./cliente";
import { Produto } from "./produto";

export class Cesta {
    public codigo:number=0;
    public cliente: Cliente = new Cliente;
    public valorTotal: number = 0;
    public itens: Produto[] = [];
}