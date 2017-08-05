const EthereumTx = require('ethereumjs-tx')
const Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/2HSUZ74pwuqqG9FGfpCg'))
// --------------------------------------

const message = 'this is a message on the blockchain'

// Sign Transaction
const privateKey = new Buffer('505bdbc30b8f84d06dbfb4c780a5504c87a2a13731f11c41c0f9b4247b719985', 'hex')
const txParams = {
    nonce: '0x' + web3.eth.getTransactionCount('0x5873E7b7F909B4F76ce4B7B3338DB674F1aC3a02').toString(16),
    gasPrice: '0x' + Number(600000).toString(16),
    to: '0xbdfF8E485fCdb8f0Ac81A45ad349c44FAA5322B4',
    gasLimit: '0x' + Number(600000).toString(16),
    chainId: 4,
    data: message
}
const tx = new EthereumTx(txParams)
tx.sign(privateKey)
const signedTransaction = '0x' + tx.serialize().toString('hex')


// send transaction
web3.eth.sendRawTransaction(signedTransaction, { gas: 200000 }, (err, hash) => {
    if (err) {
        console.log(err)
    } else {
        console.log(hash)
    }
})
