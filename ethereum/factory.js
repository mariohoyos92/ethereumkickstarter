import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xedc6B63D7385f25dbA0B61136f57Af5164DcCDe9"
);

export default instance;
