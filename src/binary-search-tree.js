const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeroot = null; //корень bst
  }

  root() {
    // throw new NotImplementedError("Not implemented");
    if (this.treeroot === null) {
      return null;
    } else {
      return this.treeroot;
    }
  }

  add(data) {
    // throw new NotImplementedError("Not implemented");
    let newNode = new Node(data);

    if (this.treeroot === null) {
      this.treeroot = newNode;
    } else {
      this.addNode(this.treeroot, newNode);
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    // throw new NotImplementedError("Not implemented");
    return this.searchExists(this.treeroot, data) ? true : false;
  }

  searchExists(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.searchExists(node.left, data);
    } else if (data > node.data) {
      return this.searchExists(node.right, data);
    } else if (data == node.data) {
      return true;
    }
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
