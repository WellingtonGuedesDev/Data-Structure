# Estruturas de Dados Básicas em JavaScript

Este repositório contém exemplos simples de implementação de várias estruturas de dados básicas em JavaScript. Cada uma dessas estruturas é fundamental para a construção de algoritmos eficientes e para a solução de diversos problemas em ciência da computação.

1. [Pilha (Stack)](#1-pilha-stack)
2. [Fila (Queue)](#2-fila-queue)
3. [Lista Encadeada (Linked List)](#3-lista-encadeada-linked-list)
4. [Árvore (Tree)](#4-árvore-tree)
5. [Grafo (Graph)](#5-grafo-graph)
6. [Tabela Hash (Hash Table)](#6-tabela-hash-hash-table)

### 1. Pilha (Stack)

A pilha segue o princípio **LIFO** (Last In, First Out), onde o último elemento inserido é o primeiro a ser removido.  
Exemplo: Imagine uma pilha de pratos, quando adicionamos um prato, colocamos ele no topo da pilha, quando queremos retira-lo, removemos o que está no topo.

No contexto de BigO, a pilha é uma estrutura de complexidade O(1), pois não interamos sobre todos os elementos para realizar uma operação.

Exemplos de uso para essa estrutura são:
- Histórico de navegação (voltar e avançar)
- Desfazer (ctrl + z)
- Um carrosel de fotos pode usar esta estrutura para navegar entre as fotos.

**Operações principais**:
- `push()`: Adiciona um item no topo da pilha.
- `pop()`: Remove e retorna o item do topo.
- `peek()`: Retorna o item do topo sem removê-lo.
- `isEmpty()`: Verifica se a pilha está vazia.

[Veja a implementação da Pilha aqui](./scripts/stack.js)

### 2. Fila (Queue)

A fila segue o princípio **FIFO** (First In, First Out), onde o primeiro elemento inserido é o primeiro a ser removido.  
Exemplo: uma fila de pessoas em um banco, onde o primeiro da fila é o primeiro a ser atendido.

**Operações principais**:
- `enqueue()`: Adiciona um item ao final da fila.
- `dequeue()`: Remove e retorna o primeiro item.
- `peek()`: Retorna o primeiro item sem removê-lo.
- `isEmpty()`: Verifica se a fila está vazia.

[Veja a implementação da Fila aqui](./scripts/queue.js)

