const CryptoJS = require('crypto-js')

class Link {

    constructor(next, data){
        this[CryptoJS.SHA256(linkedList)] = next
        this.data = data
    }

}

// sample data
const arr = ['apple', 'bananna', 'car']

// the genesis block
let linkedList = {start: 'start'}

// creating the blockchain
for (let i = 0; i < arr.length; i++){
    linkedList = new Link(linkedList, arr[i])
}

console.log(JSON.stringify(linkedList, null, 4))
