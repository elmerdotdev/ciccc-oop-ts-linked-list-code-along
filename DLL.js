// Doubly Linked List

class Node {
  constructor(data) {
    this.data = data
    this.prev = null // prev ref of the node
    this.next = null // next ref of the node
  }
}

class DLL {
  constructor() {
    this.head = null // first node pointer
    this.tail = null // last node pointer
    this.size = 0 // total number of nodes in list
  }

  isEmpty() {
    return this.head === null
  }

  length() {
    return this.size
  }

  insertAtFront(data) {
    const newNode = new Node(data)
    if (this.isEmpty()) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.size += 1
  }

  insertAtBack(data) {
    const newNode = new Node(data)
    if(this.isEmpty()) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.size += 1
  }

  insertAfter(target, value) {
    let runner = this.head

    while(runner) {
      if (runner.data === target) {
        const newNode = new Node(value)
        newNode.next = runner.next
        newNode.prev = runner

        if (runner.next) {
          runner.next.prev = newNode
        } else {
          this.tail = newNode
        }

        runner.next = newNode
        this.size += 1
        return true
      }
      runner = runner.next
    }
    return false
  }

  removeHead() {
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }
    this.size -= 1
  }

  removeTail() {
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    this.size += 1
  }

  print() {
    let runner = this.head
    const nodes = []
    while(runner) {
      nodes.push(runner.data)
      runner = runner.next
    }
    return nodes.join(' <-> ')
  }

  printReverse() {
    let runner = this.tail
    const nodes = []
    while (runner) {
      nodes.push(runner.data)
      runner = runner.prev
    }
    return nodes.join(' <-> ')
  }

  toArray() {
    let runner = this.head
    const arr = []
    while(runner) {
      arr.push(runner.data)
      runner = runner.next
    }
    return arr
  }
}

const firstnames = new DLL()
firstnames.insertAtFront("John")
firstnames.insertAtFront("Jack")
firstnames.insertAtFront("Jill")
firstnames.insertAtFront("Joe")

console.log(firstnames.print())
console.log("Outputing nodes as array...")
console.log(firstnames.toArray())

firstnames.insertAtBack("Jhonny")
console.log("Adding Jhonny to the end of the list...")
console.log(firstnames.print())
firstnames.insertAfter("Jill", "Mary")
console.log("Adding Mary between Jill and Jack...")
console.log(firstnames.print())
console.log("Removing Joe from the list...")
firstnames.removeHead()
console.log(firstnames.print())
console.log("Printing nodes in reverse...")
console.log(firstnames.printReverse())
console.log(firstnames.print())
console.log("Removing the last node from list...")
firstnames.removeTail()
console.log(firstnames.print())