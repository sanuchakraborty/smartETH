// https://eth-rinkeby.alchemyapi.io/v2/Kjj3GP86d-TYtGlYnHd4nGpcv9jcydnm


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/Kjj3GP86d-TYtGlYnHd4nGpcv9jcydnm',
      accounts: ['aaa4e968a0798eada505a6655f7d2bc6e68a85e7399209492630d0edb84746af'],
    },
  },
};