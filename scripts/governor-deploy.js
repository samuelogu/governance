const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const Governor = await hre.ethers.getContractFactory("Governor");
  const governor = await Governor.deploy();

  await governor.deployed();

  console.log("Governor contract deployed to:", governor.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
