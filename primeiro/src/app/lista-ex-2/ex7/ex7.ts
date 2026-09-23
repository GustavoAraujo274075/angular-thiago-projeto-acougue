import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7',
  standalone: false,
  templateUrl: './ex7.html',
  styleUrl: './ex7.scss',
})
export class Ex7 {

  disciplinas = [
    {nome:"Matemática"},
    {nome:"Português"},
    {nome:"Geografia"},
    {nome:"Inglês"},
    {nome:"Espanhol"},
    {nome:"Química"}
  ]

  


}
