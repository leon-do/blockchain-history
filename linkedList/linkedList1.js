class Link {

    constructor(next, data){
        this.next = next
        this.data = data
    }

}

const arr = ['yes', 'eye', 'mde', 'dis', 'grt', 'thn', 'sym' ,'bol', 'mth', 'A++', 'spl', 'ing', 'F--']

let linkedList = 0;
for (let i = 0; i < arr.length; i++){
    linkedList = new Link(linkedList, arr[i])
}

console.log(JSON.stringify(linkedList))
