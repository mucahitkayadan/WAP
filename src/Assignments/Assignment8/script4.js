// Constructor function implementation
function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    function Node(value) {
        this.value = value;
        this.next = null;
    }

    this.add = function(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    };

    this.remove = function(value) {
        let currentNode = this.head;
        let previousNode = null;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                if (previousNode === null) {
                    this.head = currentNode.next;
                } else {
                    previousNode.next = currentNode.next;
                }

                if (currentNode === this.tail) {
                    this.tail = previousNode;
                }

                this.length--;
                break;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }
    };

    this.print = function() {
        let currentNode = this.head;
        let result = "LinkedList{";

        while (currentNode !== null) {
            result += currentNode.value;
            if (currentNode.next !== null) {
                result += ",";
            }
            currentNode = currentNode.next;
        }

        result += "}";
        console.log(result);
    };
}

// Usage
let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); // Expected Result: LinkedList{1,2,3}
linkedList.remove(2);
linkedList.print(); // Expected Result: LinkedList{1,3}