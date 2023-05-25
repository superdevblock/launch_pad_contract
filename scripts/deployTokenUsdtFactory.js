const { ethers } = require("hardhat");

async function main() {
  const BASEUSDT = await ethers.getContractFactory("TokenBaseUsdt");
  const token = await BASEUSDT.deploy();

  await token.deployed();

  console.log(`Deployed to ${token.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
