/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "vintage evoke frost two apology bachelor steak year minimum offer glare gentle";

module.exports = {
  networks: {
    /*development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }*/
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/71808d54c4004a88a6dd13d11acbd5d4")
      },
      network_id: 1
    }
  }
};
