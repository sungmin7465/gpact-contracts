module.exports = {
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        runs: 2**32-1,
        enabled: true
      }
    }
  },
};
