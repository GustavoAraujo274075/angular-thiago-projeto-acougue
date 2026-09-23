import { Component } from '@angular/core';

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})
export class Ex12 {

  produtos = [
    { nome: 'Teclado', quantidade: 3 },
    { nome: 'Mouse', quantidade: 2 },
    { nome: 'Monitor', quantidade: 5 }
  ];

  nomeNovoProduto = "";
  quantidadeNovoProduto = 0;

  cadastrarProduto() {
    if (this.nomeNovoProduto && this.quantidadeNovoProduto >= 0) {

      this.produtos.push({
        nome: this.nomeNovoProduto,
        quantidade: this.quantidadeNovoProduto
      });

      this.nomeNovoProduto = "";
      this.quantidadeNovoProduto = 0;
    }
  }

  excluirProduto(index: number) {
    this.produtos.splice(index, 1);
  }
}