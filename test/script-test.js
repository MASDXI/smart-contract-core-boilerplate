const { expect, assert  } = require("chai");

describe("Describe", function() {

  let MyContract;
  let accounts;

  before(async () => {
    const contract = await ethers.getContractFactory("<CONTRACT_NAME_HERE>");
    MyContract = await contract.deploy();
    accounts = await ethers.getSigners();
    await MyContract.deployed();
  });

  it("success", async () => {
    /**
     * Do something here ...
     */
    expect().to.equal();
  });

  it("reverted", async () => {
    /**
     * Do something here ...
     */
    await expect().to.be.reverted;
  });

});
