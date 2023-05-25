const { ethers } = require("hardhat");

async function main() {
  const _address = '0x60557846DAc1820A504F525E355f1695B330a539';
  
  const test = await ethers.getContractFactory("UniswapV2Factory");
  const res = await test.deploy(_address);
  await res.deployed();
  console.log("proxy address: ", res.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
