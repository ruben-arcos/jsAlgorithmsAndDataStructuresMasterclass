/**
    pop() --> Removing a node from the END of the Doubly Linked List
    ● If there is no head, return undefined
    ● Store the current tail in a variable to return later
    ● If the length is 1, set the head and tail to be null
    ● Update the tail to be the previous Node
    ● Set the newTail's next to null
    ● Decrement the length
    ● Return the value returned
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
}

/*
my solution

pop() {
    // Check if the Doubly Linked List is empty
    if (!head) {
        // If empty, return undefined as there's nothing to pop
        return undefined;
    } else {
        // Declare variables to store the current tail and the value of the popped node
        let currentTail;
        let poppedValue;

        // Check if the length of the list is 1 (only one node in the list)
        if (this.length === 1) {
            // Update the head to be null, as there's only one node
            this.head = null;
            // Store the current tail in the variable
            currentTail = this.tail;
            // Update the tail to be null, as there's only one node
            this.tail = null;
            // Store the value of the popped node
            poppedValue = currentTail.val;
            // Disconnect the popped node by updating its next and prev pointers to null
            currentTail.next = null;
            currentTail.prev = null;
        }

        // Decrement the length as a node is being removed
        this.length--;

        // Return the value of the popped node (or undefined if the list had only one node)
        return poppedValue;
    }
}


*/
