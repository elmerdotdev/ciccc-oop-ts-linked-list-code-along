// Singly Linked List
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SLL {
  constructor() {
    this.head = null // first node in our list
    this.size = 0 // total nodes in our list
  }

  // returns total number of nodes
  length() {
    return this.size
  }

  // check if list is empty
  isEmpty() {
    return this.head === null
  }

  // reset the list
  clear() {
    this.head = null
    this.size = 0
  }

  // adds a node to the beginning (head)
  insertAtFront(data) {
    const newHead = new Node(data)
    newHead.next = this.head
    this.head = newHead
    this.size += 1
  }

  // adds a node to the end (tail)
  insertAtBack(data) {
    const newTail = new Node(data)
    if (this.isEmpty()) {
      this.head = newTail
    } else {
      let runner = this.head
      while (runner.next) {
        runner = runner.next
      }
      runner.next = newTail
      this.size += 1
    }
  }

  // insert a new node after a specific node
  insertAfter(target, value) {
    let runner = this.head

    while (runner) {
      if (runner.data === target) {
        const newNode = new Node(value)
        newNode.next = runner.next // set newNode next ref to the current runner's next ref
        runner.next = newNode // set current runner's next ref to newNode
        this.size += 1
        return true
      }
      runner = runner.next
    }
    return false
  }

  // removes the first node (head)
  removeHead() {
    const previousHead = this.head
    this.head = previousHead.next
    this.size--
    return `Removed node ${previousHead.data}`
  }

  // output the list as a string
  print() {
    let runner = this.head
    const nodes = []

    while(runner !== null) {
      nodes.push(runner.data)
      runner = runner.next
    }

    return nodes.join(' -> ')
  }

  // check if node exist
  contains(value) {
    let runner = this.head
    let iterations = 0

    while (runner !== null) {
      iterations += 1
      if (runner.data === value) {
        return { iterations, found: true }
      }
      runner = runner.next
    }

    return { iterations, found: false }
  }

  // remove node from list
  removeNode(value) {
    if (this.isEmpty()) {
      return false
    }

    if (this.head === value) {
      this.removeHead()
      return true
    }

    let runner = this.head

    while (runner.next !== null) {
      if (runner.next.data === value) {
        runner.next = runner.next.next
        this.size--
        return true
      }
      runner = runner.next
    }

    return false
  }

  // return nodes as array
  toArray() {
    let arr = []
    let runner = this.head
    while(runner) {
      arr.push(runner.data)
      runner = runner.next
    }
    return arr
  }

  // insert multiple nodes at the end of the list
  insertAtBackMany(values) {
    for (let val of values) {
      this.insertAtBack(val)
    }
  }
}


const numbers = new SLL() // create our list
numbers.insertAtFront(10)
numbers.insertAtFront(20)
numbers.insertAtFront(30)
numbers.insertAtFront(40)
numbers.insertAtFront(50)

console.log(numbers.print())
console.log("Removing node 50...")
console.log(numbers.removeHead())
console.log(numbers.print())
const result = numbers.contains(30)
console.log('Look for node 30...')
console.log(`Found ${result.found} after ${result.iterations} iterations.`)
numbers.removeNode(20)
console.log(numbers.print())

numbers.insertAtBack(5)
console.log("Adding 5 as the tail node...")
console.log(numbers.print())
console.log("Outputing nodes as array...")
console.log(numbers.toArray())
console.log("Adding 70 after node 30...")
numbers.insertAfter(30, 70)
console.log(numbers.print())
console.log("Adding more nodes...")
numbers.insertAtBackMany([1, 2, 3, 4])
console.log(numbers.print())