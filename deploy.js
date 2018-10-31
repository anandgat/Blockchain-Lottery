const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface , bytecode} = require('./compile');

const provider = new HDWalletProvider(
  'drop grit huge palace lemon glove require curtain leg second guide consider',
  'https://rinkeby.infura.io/0f3df6af93374f13be4eea4d21378bdf'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account',accounts[0]);

const result =  await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: '0x'+bytecode})
  .send({gas:'1000000', from: accounts[0]});

  console.log('contract deployed to',result.options.address);
};

deploy();
