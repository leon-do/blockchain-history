var Tx = require('ethereumjs-tx');
const Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/2HSUZ74pwuqqG9FGfpCg'))
// --------------------------------------

var privateKey = new Buffer('505bdbc30b8f84d06dbfb4c780a5504c87a2a13731f11c41c0f9b4247b719985', 'hex')

var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount('0x5873E7b7F909B4F76ce4B7B3338DB674F1aC3a02')),
    gasPrice: web3.toHex(20000000000),
    gasLimit: web3.toHex(100000),
    to: '0xbdfF8E485fCdb8f0Ac81A45ad349c44FAA5322B4',
    value: '0x00',
    data: 'nodejs'
}

var tx = new Tx(rawTx);
tx.sign(privateKey);

var serializedTx = tx.serialize();

web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
  if (err)
  {
      console.log(err)
  } else {
      console.log(hash); // "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385"
  }
});
