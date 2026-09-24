import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
  promocao: boolean;
}

interface Tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.scss',
})
export class Ex14 {

  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    { id: 1, nome: 'Teclado', quantidade: 10, preco: 100, promocao: true },
    { id: 2, nome: 'Mouse', quantidade: 0, preco: 50, promocao: false },
    { id: 3, nome: 'Monitor', quantidade: 5, preco: 900, promocao: true },
    { id: 4, nome: 'Headset', quantidade: 0, preco: 150, promocao: false },
    { id: 5, nome: 'Webcam', quantidade: 3, preco: 200, promocao: false },
    { id: 6, nome: 'Mousepad', quantidade: 8, preco: 40, promocao: true }
  ];

  tarefas: Tarefa[] = [
    { id: 1, titulo: 'Corrigir bug na tela de login', responsavel: 'Ana Silva', prioridade: 'alta', concluida: false },
    { id: 2, titulo: 'Atualizar documentação da API', responsavel: 'Carlos Eduardo', prioridade: 'baixa', concluida: true },
    { id: 3, titulo: 'Configurar ambiente de staging', responsavel: 'Beatriz Costa', prioridade: 'média', concluida: false },
    { id: 4, titulo: 'Otimizar consultas ao banco de dados', responsavel: 'Daniel Rocha', prioridade: 'alta', concluida: false },
    { id: 5, titulo: 'Desenhar protótipo do novo dashboard', responsavel: 'Fernanda Lima', prioridade: 'média', concluida: true },
    { id: 6, titulo: 'Organizar repositório de assets', responsavel: 'Gabriel Souza', prioridade: 'baixa', concluida: false }
  ];

}