const { task } = require("hardhat/config");

require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log("address :",account.address);
  }
});cl

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    localhost: {
      url: "http://localhost:8545",
      chainId: 1337
    },
    hardhat: {
      // default 
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.6.0"
      },
      {
        version: "0.8.0",
      }
    ]
  },
  mocha: {
    timeout: 20000
  }
};
