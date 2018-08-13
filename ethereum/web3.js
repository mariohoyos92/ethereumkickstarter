import Web3 from "web3";

let web3;

typeof window !== "undefined" && typeof window.web3 !== undefined
  ? (web3 = new Web3(window.web3.currentProvider))
  : (web3 = new Web3(
      new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/ZT6L5w5ms63zxXeeoMBu"
      )
    ));

export default web3;
