import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  equipe: string;
  nota:any;
  status: string;
  entregue: boolean;
}

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {

  mostrarConcluidos: boolean = true;

  projetos: Projeto[] = [
    { id: 1, titulo: 'Sistema de Vendas', equipe: 'A', nota: 8, status: 'Feito', entregue: true },
    { id: 2, titulo: 'Controle de Estoque', equipe: 'B', nota: 7, status: 'Pendente', entregue: false },
    { id: 3, titulo: 'Agenda Online', equipe: 'C', nota: null, status: 'Pendente', entregue: false },
    { id: 4, titulo: 'Corte Agil', equipe: 'A', nota: 5, status: 'Feito', entregue: true },
    { id: 5, titulo: 'Sistema de Biblioteca', equipe: 'B', nota: 9, status: 'Pendente', entregue: false }
  ];

  alterarStatus(projeto: Projeto) {
    if (projeto.status === 'Feito') {
      projeto.status = 'Pendente';
    } else {
      projeto.status = 'Feito';
    }
  }

  contarConcluidos() {
    return this.projetos.filter(projeto => projeto.status === 'Feito').length;
  }
}