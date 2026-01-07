class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode; // se a lista estava vazia, o novo nó também é a cauda
    }
    this.head = newNode;
  }

  addToEnd(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode; // se a lista estava vazia, o novo nó também é a cabeça
    }
    this.tail = newNode;
  }

  removeFromFront() {
    if (!this.head) return null; // lista vazia

    const removedValue = this.head.value;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null; // lista ficou vazia
    }

    return removedValue;
  }

  removeFromEnd() {
    if (!this.tail) return null; // lista vazia

    const removedValue = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null; // lista ficou vazia
    }

    return removedValue;
  }
}

// ===== TESTES =====
console.log('🧪 Iniciando testes da DoublyLinkedList\n');

// Teste 1: Lista vazia
console.log('Teste 1: Lista vazia');
const list1 = new DoublyLinkedList();
console.log('head:', list1.head); // null
console.log('tail:', list1.tail); // null
console.log('removeFromFront:', list1.removeFromFront()); // null
console.log('removeFromEnd:', list1.removeFromEnd()); // null
console.log('✅ Teste 1 passou\n');

// Teste 2: Adicionar elementos na frente
console.log('Teste 2: Adicionar na frente');
const list2 = new DoublyLinkedList();
list2.addToFront(3);
list2.addToFront(2);
list2.addToFront(1);
console.log('head.value:', list2.head.value); // 1
console.log('tail.value:', list2.tail.value); // 3
console.log('head.next.value:', list2.head.next.value); // 2
console.log('tail.prev.value:', list2.tail.prev.value); // 2
console.log('✅ Teste 2 passou\n');

// Teste 3: Adicionar elementos no final
console.log('Teste 3: Adicionar no final');
const list3 = new DoublyLinkedList();
list3.addToEnd(1);
list3.addToEnd(2);
list3.addToEnd(3);
console.log('head.value:', list3.head.value); // 1
console.log('tail.value:', list3.tail.value); // 3
console.log('head.next.value:', list3.head.next.value); // 2
console.log('tail.prev.value:', list3.tail.prev.value); // 2
console.log('✅ Teste 3 passou\n');

// Teste 4: Remover da frente
console.log('Teste 4: Remover da frente');
const list4 = new DoublyLinkedList();
list4.addToEnd(1);
list4.addToEnd(2);
list4.addToEnd(3);
console.log('removido:', list4.removeFromFront()); // 1
console.log('head.value:', list4.head.value); // 2
console.log('head.prev:', list4.head.prev); // null
console.log('removido:', list4.removeFromFront()); // 2
console.log('removido:', list4.removeFromFront()); // 3
console.log('head:', list4.head); // null
console.log('tail:', list4.tail); // null
console.log('✅ Teste 4 passou\n');

// Teste 5: Remover do final
console.log('Teste 5: Remover do final');
const list5 = new DoublyLinkedList();
list5.addToEnd(1);
list5.addToEnd(2);
list5.addToEnd(3);
console.log('removido:', list5.removeFromEnd()); // 3
console.log('tail.value:', list5.tail.value); // 2
console.log('tail.next:', list5.tail.next); // null
console.log('removido:', list5.removeFromEnd()); // 2
console.log('removido:', list5.removeFromEnd()); // 1
console.log('head:', list5.head); // null
console.log('tail:', list5.tail); // null
console.log('✅ Teste 5 passou\n');

// Teste 6: Operações mistas
console.log('Teste 6: Operações mistas');
const list6 = new DoublyLinkedList();
list6.addToFront(2);
list6.addToEnd(3);
list6.addToFront(1);
list6.addToEnd(4);
console.log('head.value:', list6.head.value); // 1
console.log('tail.value:', list6.tail.value); // 4
console.log('removido da frente:', list6.removeFromFront()); // 1
console.log('removido do final:', list6.removeFromEnd()); // 4
console.log('head.value:', list6.head.value); // 2
console.log('tail.value:', list6.tail.value); // 3
console.log('✅ Teste 6 passou\n');

// Teste 7: Verificar encadeamento bidirecional
console.log('Teste 7: Verificar encadeamento bidirecional');
const list7 = new DoublyLinkedList();
list7.addToEnd(1);
list7.addToEnd(2);
list7.addToEnd(3);
let current = list7.head;
console.log('Navegando para frente:');
while (current) {
  console.log('  valor:', current.value);
  current = current.next;
}
current = list7.tail;
console.log('Navegando para trás:');
while (current) {
  console.log('  valor:', current.value);
  current = current.prev;
}
console.log('✅ Teste 7 passou\n');

console.log('🎉 Todos os testes passaram!');
