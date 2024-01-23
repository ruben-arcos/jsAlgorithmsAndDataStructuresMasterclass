/*
    remove() - Removing a node from the Linked List at a SPECIFIC position
    ● If the index is less than zero or greater than the length, return undefined
    ● If the index is the same as the lenght -1, pop
    ● If the index is 0, shift
    ● Otherwise, using the GET method, access the node at the index -1
    ● Set the next property on that node to be the next of the next node
    ● Decrement the length
    ● Return the value of the node removed
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

  insert(index, value) {
    // Check if the index is out of bounds
    if (index < 0 || index > this.length) {
      return false;
    }
    // Create a new node with the given value
    let newNode = new Node(value);

    // Case: Inserting at the end of the list
    if (index === this.length) {
      // Append the new node to the end of the list
      this.push(value);
      return true;
      // Case: Inserting at the beginning of the list
    } else if (index === 0) {
      // Add the new node to the beginning of the list
      this.unshift(value);
      return true;
      // Case: Inserting at a specific position in the middle of the list
    } else {
      // Get the node before the desired position
      let prevNode = this.get(index - 1);
      // Set the next property of the new node to the current next
      newNode.next = prevNode.next;
      // Update the next property of the node before to point to the new node
      prevNode.next = newNode;
    }
    // Increment the length of the list
    this.length++;
    // Indicate that the insertion was successful
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
        return this.shift();
      } 

    if (index === this.length - 1) {
      return this.pop();
    }
    
    else {
      let prevNode = this.get(index - 1);
      let removed = prevNode.next
      prevNode.next = removed.next;

      this.length--;
      return removed;
    }
  }
}

let list = new SinglyLinkedList();

console.log(list.push(100));
console.log(list.push(201));
console.log(list.push(250));
console.log(list.push(350));

/**
  shorter version

  remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
 */