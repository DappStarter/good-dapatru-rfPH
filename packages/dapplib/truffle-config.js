require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit food ecology return magic mixture inside light army gentle'; 
let testAccounts = [
"0x83091e7e2372b75d3f41dc544b3bb213e74bc9b96cee9f8317fcd20d9aa574b3",
"0x77e70348cf19c8dcb5d97e74cb4373c347f2cee9acd5f0c57fe997521d2655bc",
"0x2dcbb8b96210f9246742dd5dbe0f4a3109d210d9d3e2a1ab8d6315c04199690e",
"0x39304dd5aadaa3e0f19664920ae71e1278787129eb0ebaccc0c63658815f0545",
"0x15d7750fd3585235198397e94c97d5eb443d01bb9dc953173658b23033d4bb8e",
"0xab16445ecbaf00a3b4d2fb83e930bd1cd2ed6ffb9aba47bef8e9226dd439671a",
"0xa50380f9fd86ab639f4584579a7847fec5f5f550a4238b5710c9938919677429",
"0x4c81fd683d79285bc34b94d623f608182b71d46195e6754c47712016f079a76e",
"0xc005812e1aea8f5620928d83d5dfef3705921785d72be83a7efa0424dd51d519",
"0x025ad778bfbe0dba1ddbe852f6e8bc712961ff11c7432e857e604c1d1178ed53"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

