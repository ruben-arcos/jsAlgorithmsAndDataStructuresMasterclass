/**
    push() --> Takes a value and adds a new node to the END of the Doubly Linked List
    ● Create a new node with the value passed to the function
    ● If the head property is null set the head and tail to be the newly created node
    ● If not, set the next property on the tail to be that node 
    ● Set the previous property of the newly created node to be the tail
    ● Set the tail to be the newly created node
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // Create a new node with the given value
    let newNode = new Node(val);

    // If the linked list is empty, set both head and tail to the new node
    if (this.length === 0) {
      // If the linked list is not empty:
      this.head = newNode;
      this.tail = newNode;
      // If the linked list is not empty:
    } else {
      // 1. Set the next property of the current tail to the new node
      this.tail.next = newNode;
      // 2. Set the previous property of the new node to the current tail
      newNode.prev = this.tail;
      // 3. Update the tail to be the new node
      this.tail = newNode;
    }
    // Increment the length
    this.length++;
    // Return the updated linked list
    return this;
  }
}
