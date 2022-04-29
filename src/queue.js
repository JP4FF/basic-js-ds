const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    // throw new NotImplementedError("Not implemented");
    let curItem = this.queue;
    while (curItem) {
      return { value: curItem.value, next: curItem.next };
      curItem = curItem.next;
    }
  }

  enqueue(value) {
    // throw new NotImplementedError("Not implemented");
    let newNode = new ListNode(value);

    if (this.queue === null) {
      this.queue = newNode;
    } else {
      let curItem = this.queue;
      while (curItem.next) {
        curItem = curItem.next;
      }
      curItem.next = newNode;
    }
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    let deletedNode;
    if (this.queue !== null) {
      deletedNode = this.queue.value;
      this.queue = this.queue.next;
    }
    return deletedNode;
  }
}

module.exports = {
  Queue,
};
