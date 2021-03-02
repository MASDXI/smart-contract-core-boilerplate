# hardhat-boilerplate
## Prerequisite
for using this bolierplate.
- OS Linux or MacOS
- nodejs
- npm

``` bash
$ npm install
```

This boilerplate including bundle dependencies and plugin for hardhat.
- [hardhat](https://www.npmjs.com/package/hardhat)
- [@nomiclabs/hardhat-ethers]()
- [@nomiclabs/hardhat-waffle](https://www.npmjs.com/package/@nomiclabs/hardhat-waffle)
- [@openzeppelin/contracts](https://www.npmjs.com/package/@nomiclabs/hardhat-ethers)  
  ###### @openzeppelin/contracts not supported in Window.
- [ethereum-waffle](https://www.npmjs.com/package/ethereum-waffle)
- [ethers](https://www.npmjs.com/package/ethers)
- [chai](https://www.npmjs.com/package/chai)

You can remove directory that you doesn't need adding directory (e.g. utils, helpers)  
for keep the project clean as much as possible.

``` text
Project Directory Structure
.
├── contracts
│   ├── interface
│   └── libraries
├── hardhat.config.js
├── package.json
├── package-lock.json
├── README.md
├── scripts
│   └── script.js
└── test
    └── script-test.js
```