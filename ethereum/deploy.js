const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "hour switch dragon evil direct review night cube plug car whisper consider",
  "https://rinkeby.infura.io/ZT6L5w5ms63zxXeeoMBu"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({
      from: accounts[0],
      gas: "1000000",
      gasPrice: web3.utils.toWei("2", "gwei")
    });

  console.log("address", result.options.address);
};

deploy();

// ADDRESS 0x03108DA7b1eff8bD5B76A9f88729Feeb35Ffe271
