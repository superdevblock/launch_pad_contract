// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  // const logic = '0xd62335b4a0b39241982113b99aba10c39874c89e';
  // // const admin = '0x99043BE6678C008eB8f6402fd371eb406E0a1644'; // main
  // const admin = '0x9631f755c78035295Ba48593546444a5B5dA2d98'; // test
  // // const data = "0x8129fc1c" // initialize
  // const data = "0x485cc9550000000000000000000000003a50bf8640568689121025ab47939429c6c3bb2f0000000000000000000000001499bc77d8cd8c1505cdb5de0351756de6d78eba"
  
  // const test = await ethers.getContractFactory("TransparentUpgradeableProxy");
  // const res = await test.deploy(logic, admin, data);
  // await res.deployed();
  // console.log("proxy address: ", res.address);

  
  const logic = '0x22c88c6c8e5c040b6287900295a1dd5e9f2f3f09';
  // const admin = '0x99043BE6678C008eB8f6402fd371eb406E0a1644'; // main
  const admin = '0x9631f755c78035295Ba48593546444a5B5dA2d98'; // test
  // const data = "0x8129fc1c" // initialize
  const data = "0x035a1d4b0000000000000000000000002ab546e905113a88be9bd64f5abd85dc6a0d64f9000000000000000000000000977405ceb99fe83e615bff163f677d14134a3a79000000000000000000000000397ee24215b546e4e2fd608a6b227d2cf989930c00000000000000000000000094940e068eb775066e2e4577572cbd96117221ec000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000071afd498d000000000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000071afd498d0000000000000000000000000000000000000000000000000000000aa87bee53800000000000000000000000000000000000000000000000000000000000000003e80000000000000000000000000000000000000000000000000000000000000001"
  
  const test = await ethers.getContractFactory("TransparentUpgradeableProxy");
  const res = await test.deploy(logic, admin, data);
  await res.deployed();
  console.log("proxy address: ", res.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
