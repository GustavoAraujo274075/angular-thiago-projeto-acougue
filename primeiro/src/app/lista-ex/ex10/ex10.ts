import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  user = '';
  senha = '';
  userLogin = '';
  senhaLogin = '';
  cadastrado: boolean = false;
  mensagem = '';
  mensagemCadastrado = '';

  checarLogin() {
    if (this.userLogin === this.user && this.senhaLogin === this.senha) {
      this.mensagem = `Bem-vindo(a), ${this.userLogin}!`;
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }
}