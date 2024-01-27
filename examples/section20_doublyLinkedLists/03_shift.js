/**
    shift() --> Removing a node from the BEGINNING of the Doubly Linked List
    ● If length is 0, return undefined
    ● Store the current head property in a variable (we'll call it old head)
    ● If the length is one
        ∙ Set the head to be null
        ∙Set the tail to be null
    ● Update the head to be the next of the old head
    ● Set the head's prev property to null
    ● Set the old head's next to null
    ● Decrement the length
    ● Return old head
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
  pop() {
    // Check if the Doubly Linked List is empty
    if (!this.head) {
      // If empty, return undefined as there's nothing to pop
      return undefined;
    }

    // Store the node to be popped in a variable
    let poppedNode = this.tail;

    // Check if the length of the list is 1 (only one node in the list)
    if (this.length === 1) {
      // Update both head and tail to null as there's only one node
      this.head = node;
      this.tail = node;
    } else {
      // Update the tail to the previous node
      this.tail = poppedNode.prev;
      // Disconnect the popped node by updating its next and prev pointers to null
      this.tail.next = null;
      poppedNode.prev = null;
    }
    // Decrement the length as a node is being removed
    this.length--;
    // Return the popped node
    return poppedNode;
  }
  shift() {
    // If the linked list is empty, return undefined
    if (this.length === 0) {
      return undefined;
    }

    // Store the current head in a variable
    let oldHead = this.head;

    // Check if there's only one node in the list
    if (this.length === 1) {
      // If yes, update both head and tail to null
      this.head = null;
      this.tail = null;
    } else {
      // Update the head to be the next node after the old head
      this.head = oldHead.next;

      // Disconnect the old head from the list by updating its prev and next pointers
      oldHead.prev = null;
      oldHead.next = null;

      // Decrement the length as a node is being removed
      this.length--;

      // Return the removed node (old head)
      return oldHead;
    }
  }
}

let list = new DoublyLinkedList();

console.log(list.push("Harry"));
console.log(list.push("Ron"));
console.log(list.push("Hermione"));

/**
 my solution: 

    shift() {
        // If length is 0, return undefined
        if (this.length === 0) {
        return undefined;
        }

        // Store the current head property in a variable
        let oldHead = this.head;

        // If the length is one
        if (this.length === 1) {
        // Set the head to be null
        this.head = null;
        // Set the tail to be null
        this.tail = null;
        // Update the head to be the next of the old head
        this.head = oldHead.next;
        // Disconnect the old head from the list
        // Set the head's prev property to null
        oldHead.prev = null;
        // Set the old head's next to null
        oldHead.next = null;
        // Decrement the length
        this.length--;
        // Return old head
        return oldHead;
        }
    }
*/
