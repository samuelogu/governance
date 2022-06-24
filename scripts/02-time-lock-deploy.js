const { MIN_DELAY, proposers } = require("../helper-hardhat-config");

const hre = require("hardhat");

async function main() {

    console.log("----------------------------------------------------")

    const Locker = await hre.ethers.getContractFactory("TimeLock");

    console.log("Deploying TimeLock and waiting for confirmations...")
    const TimeLock = await Locker.deploy(MIN_DELAY, proposers, []);
    await TimeLock.deployed();
    console.log("TimeLock successfully deployed:", TimeLock.address);

}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});