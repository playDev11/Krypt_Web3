// SPDX license identifier: MIT

pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionsCount;

    event Transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);



    struct TransferStruct{
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
}

    TransferStruct[] transactions;

    function addToBlockChain() public {
    
    }

    function getTransactions() public view returns (TransferStruct[] memory){
        // return transactions;
        
    }
    function getTransactionsCount() public view returns (uint256){
        // return transactionsCount;
    }

}