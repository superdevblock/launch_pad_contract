// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenBaseWeth is ERC20 {
    constructor() ERC20("TokenBaseWeth", "USDT") {
        _mint(msg.sender, 3000000000 * (10 ** 18));
    }
}
