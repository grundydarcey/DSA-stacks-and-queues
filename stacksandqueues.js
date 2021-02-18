//stacks can be implemented by using a singly linked list
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

//constructor method for stack, empty 1st node (null)
/*class Stack {
  constructor() {
    this.top = null;
  }
}*/

//you can push and pop to/from the top of stack
//O(1) constant complexity since only pushing
/*Push(data) {
  //if stack is empty, node will be the top of stack
  if (this.top === null) {
    this.top = new _Node(data, null);
    return this.top;
  }
  //if stack already has something, create a new node, add data to new node, and pointer point to top
  const node = new _Node(data, this.top);
  this.top = node;
}

//you can pop from the stack
pop() {
  //point the pointer to next item and replaces the top
  const node = this.top;
  this.top = node.next;
  return node.data;
}


//queues\
//use class node again for queues

class _Node {
  constructor(value) {
    this.value - value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    //first node
    this.first = null;
    //last node
    this.last = null;
  }
}

//main functions of a queue are enqueue - adds data to queue
//and dequeue - removes oldest data from front of queue
//enqueue - insertion
//dequeue - deletion

//code for enqueue operation - constant O(1)
enqueue(data) {
  const node = new _Node(data);
  if (this.first === null) {
    this.first = node;
  }
  if (this.last) {
    this.last.next = node;
  }
  this.last = node;
}

//code for dequeue removal operation - O(1)
dequeue() {
  //if queue is empty, then nothing to remove
  if (this.first === null) {
    return;
  }
  const node = this.first;
  this.first = this.first.next;
  //if this is the last item
  if (node === this.last) {
    this.last = null;
  }
  return node.value;
}
*/
//1. Create a stack class
class Stack {
  constructor() {
    this.top = null;
    
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    return this.top.data;
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    }
    return false;
  }

  display() {
    console.log(Stack);
  }

}

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log(starTrek.peek());
console.log(starTrek.isEmpty());

starTrek.display(); 

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let palindrome = new Stack();
  let testString = '';
  for (let i = 0; i < s.length; i++) {
    palindrome.push(s[i]);
  }
  for (let i = s.length; i > 0; i--) {
    testString += palindrome.pop();
  }
  return testString === s;
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));