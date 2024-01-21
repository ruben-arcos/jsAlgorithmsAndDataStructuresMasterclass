// Linked list is only a collection of nodes
// piece of data - val
// reference to next node - next

// Define a Node class to represent individual nodes in the linked list
class Node {
  constructor(val) {
    // The value of the node
    this.val = val;
    // Pointer to the next node in the list (initially set to null)
    this.next = null;
  }
}

// Define a SinglyLinkedList class to represent the linked list
class SinglyLinkedList {
  constructor() {
    // Pointer to the first node in the list (initially set to null)
    this.head = null;
    // Pointer to the last node in the list (initially set to null)
    this.tail = null;
    // Number of nodes in the list (initially set to 0)
    this.length = 0;
  }
  // Method to add a new node to the end of the linked list
  push(val) {
    // Create a new node with the given value
    const newNode = new Node(val);
    // Check if the list is empty
    if (!this.head) {
      // If the list is empty, the new node becomes both the head and the tail
      this.head = newNode;
      this.tail = this.head;
      // If the list is not empty, add the new node to the end of the list
    } else {
         // Set the next property of the current tail to the new node
      this.tail.next = newNode;
      // Update the tail to be the new node
      this.tail = newNode;
    }
    // Increment the length of the linked list
    this.length++;
  }
}

// nodes below
// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('How')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')

// Create a new instance of the SinglyLinkedList class
let list = new SinglyLinkedList();

// Add nodes to the linked list using the push method
list.push("Hello");
list.push("Goodbye");
// Log the resulting linked list to the console
console.log(list);
