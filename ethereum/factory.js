import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
require('dotenv').config();

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  process.env.ABI
);

export default instance;
