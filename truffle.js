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
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');
  
var mainNetPrivateKey = Buffer.from(process.env["MAINNET_PRIVATE_KEY"], "hex")
var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");
  
var ropstenPrivateKey = Buffer.from(process.env["ROPSTEN_PRIVATE_KEY"], "hex")
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");
  
  
module.exports = {
    networks: {
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*" // Match any network id
      },
      ropsten: {
        provider: ropstenProvider,
        // You can get the current gasLimit by running
        // truffle deploy --network rinkeby
        // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) =>
        //   console.log(result.gasLimit))
        gas: 4600000,
        gasPrice: web3.toWei("20", "gwei"),
        network_id: "3",
      },
      mainnet: {
        provider: mainNetProvider,
        gas: 4600000,
        gasPrice: web3.toWei("20", "gwei"),
        network_id: "1",
      }
    }
};
