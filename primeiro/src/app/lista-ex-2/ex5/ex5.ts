import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  standalone: false,
  templateUrl: './ex5.html',
  styleUrl: './ex5.scss',
})
export class Ex5 {
  
  pessoas = [
    { id: 1, nome: 'Carlos'},
    { id: 2, nome: 'Gustavo'}, 
    { id: 3, nome: 'Gabrielly'}]

}
