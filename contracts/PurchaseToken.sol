// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PurchaseToken is ERC20, Ownable {
    constructor() ERC20("Purchase Token", "PT") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function fundMe(uint256 amount) public {
        _mint(msg.sender, amount);
    }
}