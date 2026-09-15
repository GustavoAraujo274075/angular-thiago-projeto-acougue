import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  contagem: number = 0;

  aumentarContagem(){
    this.contagem++
  }
  diminuirContagem(){
    if (this.contagem > 0){
      this.contagem--
    }  
  }
}
