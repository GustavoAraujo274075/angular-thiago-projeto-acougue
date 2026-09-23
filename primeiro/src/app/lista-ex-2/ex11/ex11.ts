import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}


@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  somenteDisponiveis:boolean = false
  produtos: Produto[] = [
      { id: 1, nome: 'Teclado', preco: 120.00, quantidade: 5, promocao: true },
      { id: 2, nome: 'Mouse', preco: 75.90, quantidade: 10, promocao: false },
      { id: 3, nome: 'Monitor', preco: 899.90, quantidade: 3, promocao: false },
      { id: 4, nome: 'Headset', preco: 249.90, quantidade: 7, promocao: true },
      { id: 5, nome: 'Webcam', preco: 189.90, quantidade: 0, promocao: false }
    ];
  
  

}
