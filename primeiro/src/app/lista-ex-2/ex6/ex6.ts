import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  pessoas = [
    { id: 1, nome: 'Carlos'},
    { id: 2, nome: 'Gustavo'}, 
    { id: 3, nome: 'Gabrielly'}]
  
  removerUltimo(){
    this.pessoas.pop()
  }

  limparLista(){
    this.pessoas = []
  }

  restaurarLista(){
    this.pessoas = [
      { id: 1, nome: 'Carlos'},
      { id: 2, nome: 'Gustavo'}, 
      { id: 3, nome: 'Gabrielly'}]
  }
    
}
