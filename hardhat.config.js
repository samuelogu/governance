require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config()
const privateKey = process.env.privateKey;
const infuraKey = process.env.infuraKey;
const etherscanApiKey = process.env.etherscan_api_key;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraKey}`, //Infura url with projectId
      accounts: [privateKey] // add the account that will deploy the contract (private key)
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: etherscanApiKey
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
