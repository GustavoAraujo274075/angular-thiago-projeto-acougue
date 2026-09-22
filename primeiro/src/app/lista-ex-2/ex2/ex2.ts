import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  standalone: false,
  templateUrl: './ex2.html',
  styleUrl: './ex2.scss',
})
export class Ex2 {

  usuarioLogado: boolean = false; 
  mensagem = "Usuário autenticado!";
  textoBotao = "Entrar";

  alterarTextBotao() {
    this.usuarioLogado = !this.usuarioLogado;

    if (this.usuarioLogado) {
      this.textoBotao = "Sair";
    } else {
      this.textoBotao = "Entrar";
    }
  }
}

