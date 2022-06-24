const {
    QUORUM_PERCENTAGE,
    VOTING_PERIOD,
    VOTING_DELAY,
    GOVERNANCE_TOKEN_ADDRESS,
    TIMELOCK_ADDRESS,
} = require("../helper-hardhat-config");
const hre = require("hardhat");

async function main() {

    const GovernorContract = await hre.ethers.getContractFactory("GovernorContract");

    console.log("Deploying Governor contract and waiting for confirmations...")
    const Governor = await GovernorContract.deploy(
        GOVERNANCE_TOKEN_ADDRESS,
        TIMELOCK_ADDRESS,
        QUORUM_PERCENTAGE,
        VOTING_PERIOD,
        VOTING_DELAY);
    await Governor.deployed();
    console.log("Governor successfully deployed:", Governor.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
