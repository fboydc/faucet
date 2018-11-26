pragma solidity ^0.4.19;
import "./Mortal.sol";
import "./Faucet.sol";

contract Token is Mortal{
    Faucet _faucet;

    constructor(address _f) public{
        _faucet = Faucet(_f);
        _faucet.withdraw(0.1 ether);

    }

    function destroy() public onlyOwner {
        _faucet.destroy();
    }


}