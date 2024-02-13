class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertToEmptyList(node) {
        this.head = node;
        this.tail = node;
        this.size++;
        return;
    }

    insertFirst(data) {
        const newNode = new Node(data);
        if(this.size === 0) {
            insertToEmptyList(newNode)
        }
        newNode.next = this.head;
        this.head = newNode;
        this.size++
    }

    insertLast(data) {
        const newNode = new Node(data);
        if(this.size === 0) {
            insertToEmptyList(newNode)
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    insertAt(data, pos) {
        if(pos < 0 || pos > this.size) {
            throw new Error("position out of bound!")
        }
        if(pos === 0) {
            this.insertFirst(data);
            return;
        }
        if(pos === this.size) {
            this.insertLast(data);
            return;
        }
        const newNode = new Node(data);
        let current = this.head, prev = null;
        for(let i=0;i<=pos;i++) {
            prev = current;
            current = current.next;
        }
        newNode.next = current.next;
        prev.next = newNode;
        this.size++;
        current = null; prev = null;
    }

    deletionPreReq() {
        if(this.size === 0) {
            console.log("List is empty!");
            return;
        }
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }
    }

    deleteFirst() {
        this.deletionPreReq();
        this.head = this.head.next;
        this.size--
    }

    deleteLast() {
        this.deletionPreReq();
        let current = this.head;
        while(current.next.next) {
            prev = current;
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        this.size--;
        current = null;
    }

    deleteAt(pos) {
        if(pos < 0 || pos > this.size) {
            throw new Error("position out of bound!")
        }
        if(this.size === 0) {
            console.log("List is empty!");
            return;
        }
        if(pos === 0) {
            this.deleteFirst();
            return;
        }
        if(pos === this.size) {
            this.deleteLast();
            return;
        }
        let current = this.head, prev = null;
        for(let i = 0; i<=pos; i++) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        current.next = null;
        this.size--;
        prev = null; current = null;
    }
}