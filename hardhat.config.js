require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  abiExporter: {
    path: "./abi",
    clear: false,
    flat: true,
    // only: [],
    // except: []
  },
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
        contractSizer: {
          alphaSort: true,
          runOnCompile: true,
          disambiguatePaths: false,
        },
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "testnet",
  networks: {
    hardhat: {},
    ropsten: {
      url: `https://ropsten.infura.io/v3/84842078b09946638c03157f83405213`,
      accounts: [
        "2d0ea069297c05c5a7443b9f0b32b2087db90fce453aa47342862ee572612f36",
      ],
    },
    testnet: {
      url: `https://data-seed-prebsc-2-s2.binance.org:8545`,
      accounts: [
        "2d0ea069297c05c5a7443b9f0b32b2087db90fce453aa47342862ee572612f36",
      ],
    },

    rinkeby: {
      url: `https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213`,
      accounts: [
        "2d0ea069297c05c5a7443b9f0b32b2087db90fce453aa47342862ee572612f36",
      ],
    },
    ftmtest: {
      url: `https://rpc.testnet.fantom.network/`,
      accounts: [
        "2d0ea069297c05c5a7443b9f0b32b2087db90fce453aa47342862ee572612f36",
      ],
    },
    dyno: {
      url: `https://rpctest.dynochain.io/`,
      accounts: [
        "2d0ea069297c05c5a7443b9f0b32b2087db90fce453aa47342862ee572612f36",
      ],
    },
    baseTest: {
      url: `https://base-goerli.public.blastapi.io`,
      chainId: 84531,
      accounts: [
        "8dc41ee3b6b33c1d96a34e0a3462bfa967809f8900efe42aa6ed1e6171e74fdd",
      ],
    },
    bsc_test: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      chainId: 97,
      accounts: [
        "8dc41ee3b6b33c1d96a34e0a3462bfa967809f8900efe42aa6ed1e6171e74fdd",
      ],
    }
  },
  etherscan: {
    apiKey: {
      ropsten: "1RF6WGPIETERDRID3C5RB1PXQ1JU5JZQMP",
      rinkeby: "1RF6WGPIETERDRID3C5RB1PXQ1JU5JZQMP",
      bsc_test: "811MVSC9JBECN5TZHFYHN54R74IHZRJ98M",
      dyno: "bc658a4e-1cbd-4c88-a747-ee2394efad63",
      baseTest: "PLACEHOLDER_STRING",
    },
    customChains: [
      {
        network: "dyno",
        chainId: 7364,
        urls: {
          apiURL: "https://testnet.dynoscan.io/api",
          browserURL: "https://testnet.dynoscan.io/",
        },
      },
      {
        network: "bsc_test",
        chainId: 97,
        urls: {
          apiURL: "https://testnet.bscscan.com/api",
          browserURL: "https://testnet.bscscan.com/",
        },
      },
      {
        network: "baseTest",
        chainId: 84531,
        urls: {
          apiURL: "https://api-goerli.basescan.org/api",
          browserURL: "https://goerli.basescan.org",
        },
      },
    ],
  },
};
