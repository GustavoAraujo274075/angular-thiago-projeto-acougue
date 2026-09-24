import { Component } from '@angular/core';

interface Tarefa{
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.scss',
})
export class Ex13 {
  tarefas:Tarefa[] = [
    { id: 1, titulo: 'Corrigir bug na tela de login', responsavel: 'Ana Silva', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Atualizar documentação da API', responsavel: 'Carlos Eduardo', prioridade: 'baixa', concluida: true },
    { id: 3, titulo: 'Configurar ambiente de staging', responsavel: 'Beatriz Costa', prioridade: 'média', concluida: false },
    { id: 4, titulo: 'Otimizar consultas ao banco de dados', responsavel: 'Daniel Rocha', prioridade: 'alta', concluida: false },
    { id: 5, titulo: 'Desenhar protótipo do novo dashboard', responsavel: 'Fernanda Lima', prioridade: 'média', concluida: true },
    { id: 6, titulo: 'Organizar repositório de assets', responsavel: 'Gabriel Souza', prioridade: 'baixa', concluida: false }
  ];
  tamanho = this.tarefas.length

  todasConcluidas: boolean = false;

  verificarTarefas() {
    this.todasConcluidas = this.tarefas.every(tarefa => tarefa.concluida);
  }

}
