import { Component } from '@angular/core';

@Component({
  standalone: false,
  templateUrl: './ex4.html',
  styleUrl: './ex4.scss',
})
export class Ex4 {

  nomeProduto = 'Teclado';
  quantidadeEstoque = 5;

  aumentarQuantidade(){
    this.quantidadeEstoque++
  }
  diminuirQuantidade(){
    if(this.quantidadeEstoque > 0){
      this.quantidadeEstoque--
    }
  }

}
