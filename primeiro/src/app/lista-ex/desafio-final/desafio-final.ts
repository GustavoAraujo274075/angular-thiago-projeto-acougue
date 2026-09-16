import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})



export class DesafioFinal {

nomeAluno="";
qntDisciplinas = 0;

diminuirQnt(){
  this.qntDisciplinas--
}

aumentarQnt(){
  this.qntDisciplinas++
}

fazerMatricula(){
  alert("Matrícula realizada com sucesso! \nAluno: "+ this.nomeAluno + "\nQuantidade de Disciplinas: " + this.qntDisciplinas)
}

}
