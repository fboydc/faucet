pragma solidity ^0.4.24;
import "./Mortal.sol";


contract Faucet is Mortal{

    event Withdrawal(address indexed to, uint amount);
    event Deposit(address indexed from, uint amount);
   
    
    function withdraw(uint withdraw_amount) public {
        require(withdraw_amount <= 1 ether, "Insufficient balance in faucet for withdrawal request");
        msg.sender.transfer(withdraw_amount);
        emit Withdrawal(msg.sender, withdraw_amount);
    }
    
    function() external payable{
        emit Deposit(msg.sender, msg.value);
    }
}