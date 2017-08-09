const CryptoJS = require('crypto-js')

class Link {

    constructor(next, data){
        this[CryptoJS.SHA256(linkedList)] = next
        this.data = data
    }

    genesis(){
        return this.genesis = 'start'
    }

}

// sample data
const arr = [4,3,2,1]

// the genesis block
let linkedList = {start: 'start'}

// creating the blockchain
for (let i = 0; i < arr.length; i++){
    linkedList = new Link(linkedList, arr[i])
}

console.log(JSON.stringify(linkedList))
