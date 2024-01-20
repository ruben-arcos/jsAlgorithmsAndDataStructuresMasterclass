/**
    push
    ● This function should accept a value
    ● Create a new node using the value 
       passed to the function
    ● If there is no head property on the 
       list, set the head and tail to be the 
       newly created node
    ● Otherwise set the next property on 
       the tail to be the new node and set 
       the tail porperty on the list to be the 
       newly created node
    ● Increment the length by one
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
    const newNode = new Node(val)

    // if no head
    if (!this.head) {
        this.head = newNode;
        this.tail= this.head
    } else {
        this.tail.next = newNode;
        this.tail = newNode
    }
    this.length++
  }
}


let list = new SinglyLinkedList();
list.push(80);
list.push(85)

console.log(list)