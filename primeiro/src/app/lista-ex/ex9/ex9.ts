import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  estoque: number = 0;
  item = '';

  aumentarEstoque(){
    this.estoque++
  }
  diminuirEstoque(){
    if (this.estoque > 0){
      this.estoque--
    }    
  }
}
