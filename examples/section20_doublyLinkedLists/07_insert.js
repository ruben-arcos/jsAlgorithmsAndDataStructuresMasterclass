/**
    insert() --> Adding a node in a Doubly Linked List by a certain position
    ● If the index is less than zero or greater than or equal to the
       length return false
    ● If the index is 0, UNSHIFT
    ●  If the index is the same as the length, PUSH
    ● Use the GET method to access the index -1
    ● Set the next and prev properties on the correct nodes to link 
        everything together
    ● Increment the length
    ● Return true
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
  unshift(value) {
    // Create a new node with the value passed to the function
    let newNode = new Node(value);
    //If the length is 0
    if (this.length === 0) {
      // Set the head to be the new node
      this.head = newNode;
      // Set the tail to be the new node
      this.tail = newNode;
      // Otherwise
    } else {
      // Set the prev property on the head of the list to be the new node
      this.head.prev = newNode;
      // Set the next property on the new node to be the head property
      newNode.next = this.head;
      // Update the head to be the new node
      this.head = newNode;
    }
    // increment the length
    this.length++;
    // Return the list
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
    }
    if (index > this.length / 2) {
      for (let i = this.length - 1; i > index; i--) {
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }
  set(index, value) {
    // Retrieve the node at the specified index using the GET method
    let foundNode = this.get(index);

    // If a valid node is found, update its value and return true
    if (foundNode != null) {
      foundNode.val = value;
      return true;
    }
    // If the GET method returns null, return false
    return false;
  }
  // Insert a new node at a specified index with the given value
  insert(index, value) {
    // Check if the index is out of bounds
    if (index < 0 || index >= this.length) {
      return false;
    }

    // Insert at the beginning of the list (index 0)
    if (index === 0) {
      // Use the existing unshift method for efficient insertion at the beginning
      return !this.unshift(value);
      // Insert at the end of the list (index equals the length)
    } else if (index === this.length) {
      // Use the existing push method for efficient insertion at the end
      return !this.push(value);
      // Insert in the middle of the list
    } else {
      // Create a new node with the provided value
      let newNode = new Node(value);
      // Retrieve the node at the index before the insertion point
      let beforeNode = this.get(index - 1);
      // Retrieve the node that originally followed beforeNode
      let afterNode = beforeNode.next;

      // Link the new node to the rest of the list after the insertion point
      newNode.next = afterNode;
      newNode.prev = beforeNode;

      // Update the 'prev' pointer of the node following the insertion point
      afterNode.prev = newNode;
      // Update the 'next' pointer of the node before the insertion point to the new node
      beforeNode.next = newNode;

      // Increment the length to reflect the successful insertion
      this.length++;
      // Return true to indicate a successful insertion
      return true;
    }
  }
}

let list = new DoublyLinkedList();

console.log(list.push("Regina"));
console.log(list.push("Gretchen"));
console.log(list.push("Karen"));

/**
 * my solution

    // Insert a new node at a specified index with the given value
    insert(index, value) {
    // Check if the index is out of bounds
    if (index < 0 || index > this.length) {
        return false;
    }

    // Create a new node with the provided value
    let newNode = new Node(value);

    // Insert at the beginning of the list (index 0)
    if (index === 0) {
        // Use the existing unshift method for efficient insertion at the beginning
        this.unshift(value);
        return true;
    } 
    // Insert at the end of the list (index equals the length)
    else if (index === this.length) {
        // Use the existing push method for efficient insertion at the end
        this.push(value);
        return true;
    } 
    // Insert in the middle of the list
    else {
        // Retrieve the node at the index before the insertion point
        let prevNode = this.get(index - 1);

        // Link the new node to the rest of the list after the insertion point
        newNode.next = prevNode.next;

        // Link the new node backward to the node before the insertion point
        newNode.prev = prevNode;

        // Update the 'prev' pointer of the node following the insertion point
        prevNode.next.prev = newNode;

        // Update the 'next' pointer of the node before the insertion point to the new node
        prevNode.next = newNode;

        // Increment the length to reflect the successful insertion
        this.length++;

        // Return true to indicate a successful insertion
        return true;
    }
    }
*/
