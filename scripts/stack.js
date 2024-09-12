class Stack {
    constructor() {
        this.items = [];
    }

    // Adiciona item ao topo da pilha
    push(item) {
        this.items.push(item);
    }

    // Remove item do topo da pilha
    pop(item) {
        if (this.isEmpty()) {
            return "A pilha esta vazia";
        }

        this.items.pop(item);
    }

    // Verificar o primeiro elemento sem remove-lo
    peek() {
        if(this.isEmpty()) {
            return "A pilha esta vazia"
        }

        return this.items[this.items.length - 1]
    }

    // Verifica se a pilha esta vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Retorna o tamanho da pilha
    size() {
        return this.items.length;
    }
}

const pilha = new Stack()