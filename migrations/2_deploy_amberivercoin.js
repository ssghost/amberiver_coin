var AmberiverCoin = artifacts.require("./contracts/AmberiverCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(AmberiverCoin);
};
