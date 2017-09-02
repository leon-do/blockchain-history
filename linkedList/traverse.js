const CryptoJS = require('crypto-js')


const obj = {
    "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e": {
        "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e": {
            "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e": {
                "start": "start"
            },
            "data": "apple"
        },
        "data": "bananna"
    },
    "data": "car"
}


let current = obj


while (current.start !== 'start'){
    console.log(current.data)
    current = current[CryptoJS.SHA256(obj)]
}
