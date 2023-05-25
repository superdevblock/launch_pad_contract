const { ethers } = require("hardhat");

async function main() {
  const _v2address = '0xbFd82d19FC4C7f7920B53735ea06B15564588fCE';
  const _addressWETH = '0x153c63d9Dd6428e4f93fB972487742603C642153';
  
  const router = await ethers.getContractFactory("UniswapV2Router02");
  const res = await router.deploy(_v2address, _addressWETH);
  await res.deployed();  
  console.log("address: ", res.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
