const { ethers } = require("hardhat");

async function main() {
  const BASEWETH = await ethers.getContractFactory("TokenBaseWeth");
  const token = await BASEWETH.deploy();

  await token.deployed();

  console.log(`Deployed to ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
