var owned = artifacts.require("./Owned.sol");
var mortal = artifacts.require("./Mortal.sol");
var faucet = artifacts.require("./Faucet.sol");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "fence worth home merit increase honey marriage right area timber pelican rely spy lazy scrub";

module.exports = function(deployer) {
  deployer.deploy(owned)
  .then(()=>owned.deployed())
  .then(()=>deployer.deploy(mortal))
  .then(()=>mortal.deployed())
  .then(()=>deployer.deploy(faucet))
  .then(()=>faucet.deployed());
};
