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
  // =====================================================
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
  // =====================================================
  has(data) {
    // throw new NotImplementedError("Not implemented");
    return this.searchExists(this.treeroot, data);
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
  // =====================================================
  find(data) {
    // throw new NotImplementedError("Not implemented");
    let findedNode = this.searchNode(this.treeroot, data);
    return findedNode;
  }

  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }
  // =====================================================
  remove(data) {
    // throw new NotImplementedError("Not implemented");
    return !(this.removeNode(this.treeroot, data) === false);
  }

  removeNode(node, data) {
    if (node === null) {
      return false;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let currNode = node.right;
      while (currNode.left !== null) {
        currNode = currNode.left;
      }
      node.data = currNode.data;

      node.right = this.removeNode(node.right, currNode.data);
      return node;
    }
  }
  // =====================================================
  min() {
    // throw new NotImplementedError("Not implemented");
    if (this.treeroot === null) {
      return null;
    } else {
      return this.minNode(this.treeroot);
    }
  }

  minNode(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.minNode(node.left);
    }
  }
  // =====================================================
  max() {
    // throw new NotImplementedError("Not implemented");
    if (this.treeroot === null) {
      return null;
    } else {
      return this.maxNode(this.treeroot);
    }
  }

  maxNode(node) {
    if (node.right === null) {
      return node.data;
    } else {
      return this.maxNode(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
