pragma solidity ^0.4.24;
import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract AmberiverCoin is StandardToken {
  string public name = "AmberiverCoin"; 
  string public symbol = "ABCD";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
