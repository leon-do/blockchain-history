const arr = ['yes', 'eye', 'mde', 'dis', 'grt', 'thn', 'sym' ,'bol', 'mth', 'A++', 'spl', 'ing', 'F--']

let linkedList = 0;
for (let i = 0; i < arr.length; i++){
    linkedList = {
        data: arr[i],
        next: linkedList
    }
}
console.log(linkedList)
