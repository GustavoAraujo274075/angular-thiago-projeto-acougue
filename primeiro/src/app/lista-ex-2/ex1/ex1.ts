import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1',
  standalone: false,
  templateUrl: './ex1.html',
  styleUrl: './ex1.scss',
})
export class Ex1 {

  mensagemVisivel:boolean = true;
  mensagem = "";

  

  mostrarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
    if (this.mensagemVisivel == true) {
      this.mensagem = "Bem-vindo ao sistema";
    } else {
      this.mensagem = "";
      }
  }
    

}

