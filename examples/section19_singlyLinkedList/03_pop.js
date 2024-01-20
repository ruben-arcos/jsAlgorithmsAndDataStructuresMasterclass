/**
    pop
    ● If there are no nodes in the list, return undefined
    ● Loop through the list until you reach the tail
    ● Set the next property of the 2nd to last node to be null
    ● Set the tail to be the 2nd to last node
    ● Decrement the lenght of the list by 1
    ● Return the value of the node romoved


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
}

let list = new SinglyLinkedList();
list.push(80);
list.push(85);
list.push(90);

console.log(list);
