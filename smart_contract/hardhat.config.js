require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/wBI9wUmQqhgwY1O-cRIZ0gCD8K2SWrhs',
      accounts: ['a417dd24b4469000213dc834bdcb07bdb11ef66751954d972f83889d2867b03b'],
    },
  },
};