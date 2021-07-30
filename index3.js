class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    root = null;

    add(data) {
        const newNode = new Node(data);

        if (this.root === null){
            this.root = new Node(data);
            return;
        }

        let currentNode = this.root;

        while (currentNode.next !== null){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        
    }
    centerAdd(data){
        const newNode = new Node(data);
        let findElement = this.root;
        while (findElement){
            findElement = findElement.next;
            if (findElement.data === 3){
                findElement.next = newNode;
                newNode.data = findElement.next.next;
                findElement.next.data = data;
                return;
            }
        }
    }

    deleteElement(data){
        let findElement = this.root;
        while (findElement) {
            if (findElement.next !== null) {
                if (findElement.next.data === data) {
                    findElement.next = findElement.next.next;
                }
            }
            findElement = findElement.next;
        }
    }

    toArray(){
       const arr = [];
        let findElement = this.root;
        while (findElement){
            arr.push(findElement.data);
            findElement = findElement.next;
        }
        return arr;
    }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.centerAdd(34);
linkedList.add(4);
linkedList.add(5);
linkedList.deleteElement(4);
let arr = linkedList.toArray();
console.log(arr);
console.log(JSON.stringify(linkedList.root));