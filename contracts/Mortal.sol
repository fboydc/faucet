pragma solidity ^0.4.25;
import "./Owned.sol";


contract Mortal is Owned {
    
    function destroy() public onlyOwner {
        selfdestruct(owner);
    }
}