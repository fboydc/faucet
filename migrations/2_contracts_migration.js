var Migrations = artifacts.require("./Faucet.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
