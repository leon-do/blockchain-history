// https://karl.tech/learning-solidity-part-1-deploy-a-contract/
// https://ethereum.stackexchange.com/questions/11812/sending-value-with-transaction-using-metamask-and-browser-solidity

pragma solidity ^0.4.0;

contract message {

    // index 0
    uint public index;

    // create mapping
    mapping (uint => string) data;

    // store msg in data
    function sendMsg(string myMsg) returns (uint){
        index++;
        data[index] = myMsg;
        return index;
    }

    // input i, return message
    function getMsg(uint i) returns (string){
        return data[i];
    }

}
