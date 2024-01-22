/**
    set() --> Changing the value of a node based on it's position in the Linked List
    ● This function should accept a value and an index
    ● Use your GET function to find the specific node
    ● If the node is not found, return false
    ● If the node is found, set the value of that node to be the value passed to the
       function and return true
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

  // The get() function retrieves a node from the linked list based on the specified index.
  get(index) {
    // Check if the index is out of bounds (less than 0 or greater than/equal to the length of the list).
    if (index < 0 || index >= this.length) {
      // Return null if the index is invalid.
      return null;
    }

    // Initialize a counter to keep track of the current position in the list.
    let counter = 0;
    // Start at the head of the list to traverse from the beginning.
    let current = this.head;

    // Continue traversing the list until the desired index is reached.
    while (counter !== index) {
      // Move to the next node in the list.
      current = current.next;
      // Increment the counter to track progress through the list.
      counter++;
    }
    // Return the node at the specified index.
    return current;
  }

  set(index, value) {
    // Use the get method to find the node at the specified index
    let foundNode = this.get(index);

    // Check if the node was found
    if (foundNode) {
      // If found, update the value of the node with the new value passed to the function
      foundNode.val = value;
      // Return true to indicate that the operation was successful
      return true;
    }
    // If the node was not found, return false
    return false;
  }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push(":)");

console.log(list);

/**
     set(index, value) {
     // Use the get method to find the specific node at the given index
    let foundNode = this.get(index);

    // If the node is not found, return false
    if (!findNode) {
      return false;
    } else {
         // If the node is found, set the value of that node to be the value passed to the function
      findNode.val = value;
      return true;
    }
  }
*/
