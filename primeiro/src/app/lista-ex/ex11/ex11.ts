import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})

//Objetivo: Integrar bindings em uma pequena funcionalidade de compra.
//Crie a apresentação de um produto com nome, preço, quantidade, total e botão para adicioná-lo ao carrinho.
//Mouse Gamer
//Preço: R$ 120,00
//Quantidade: 1 [-] [+]
//Total: R$ 120,00
//[Adicionar ao carrinho]
// A quantidade mínima é 1.
// Os botões + e - alteram a quantidade.
// O total é atualizado automaticamente.
// O botão - fica desabilitado quando a quantidade for 1.
// Ao adicionar, mostre uma mensagem contendo quantidade e produto.


export class Ex11 {
  
valor = 2360;
quantidade = 1;
total = this.valor;

aumentarQnt(){
  this.quantidade++
  this.calcularTotal()
}
diminuirQnt(){
  this.quantidade--
  this.calcularTotal()
}

calcularTotal(){
  this.total = this.quantidade*this.valor;
}
confirmacaoCarrinho(){
  alert("Pedido adicionado ao carrinho! TOTAL DA COMPRA: " + this.total + " reais.");
}

}
