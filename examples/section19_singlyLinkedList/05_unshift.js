/**
    unshift → Adding a new node to the beginning of the Linked List
    ● This function should accept a value
    ● Create a new node using the value passed to the function
    ● If there is no head property on the list, set the head and tail to 
       be the newly created node
    ● Otherwise set the newly created node's next property to be 
       the current head property on the list
    ● Set the head property on the list to be that newly create node
    ● Increment the length of the list by 1
    ● Return the linked list
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);

    // if no head
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // Check if the list is empty
    if (!this.head) {
      // If empty, return undefined (no node to remove)
      return undefined;
    } else {
      // Initialize pointers for traversal
      let currentNode = this.head;
      let newTail = currentNode;

      // Traverse the list until the last node is reached
      while (currentNode.next) {
        // Update newTail to the current node
        newTail = currentNode;
        // Move to the next node
        currentNode = currentNode.next;
      }

      // Update tail to the second-to-last node
      this.tail = newTail;
      // Set the next reference of the new tail to null, effectively removing the last node
      this.tail.next = null;
      // Decrease the length of the list
      this.length--;

      // Check if the list is now empty
      if (this.length === 0) {
        // If empty, set both head and tail to null
        this.head = null;
        this.tail = null;
      }
      // Return the removed last node
      return currentNode;
    }
  }
  shift() {
    // Check if the linked list is empty
    if (!this.head) {
      // If empty, return undefined as there is no node to remove
      return undefined;
    }
    // Create a variable to store the current head of the linked list
    let currentHead = this.head;
    // Update the head to be the next node in the linked list
    this.head = currentHead.next;
    // Decrement the length of the linked list by 1
    this.length--;

    // Check if the length has become 0 after the removal
    if (this.length === 0) {
      // If the length is 0, set the tail to null as the linked list is now empty
      this.tail = null;
    }
    // Return the removed node (the original head)
    return currentHead;
  }
  // Add a new node to the beginning of the linked list
  unshift(val) {
    // Create a new node with the given value
    let newNode = new Node(val);
    // Get the current head of the list
    let currentHead = this.head;

    // If there is no current head (empty list),
    // set both head and tail to the new node
    if (!currentHead) {
      this.head = newNode;
      this.tail = newNode;
      // If there is a current head,
    } else {
      // set the new node's next to the current head
      newNode.next = currentHead;
      // Update the head to be the new node
      this.head = newNode;
    }
    // Increment the length of the list
    this.length++;
    // Return the modified linked list
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(80);
list.push(85);
list.push(90);

console.log(list);

/* version 2
  unshift(val) {
    let newNode = new Node(val);
    // if no head
    if(!this.head) {
        // assing it to newNode
        this.head = newNode
        this.tail = newNode
        // if there's a head
    } else {
        // move current head to the next node
        newNode.next = this.head;
        // update the new head
        this.head = newNode;
    }
    // increase length of nodes
    this.length++;
    return this
  }
*/
