import Web3 from 'web3';
import * as constants from './constants';
import Crowdsale from './contracts/Crowdsale';

export const createWeb3 = (provider, options = {}) => {

  var realProvider;

  if (typeof provider === 'string') {
    if (provider.includes('wss')) {
      realProvider = new Web3.providers.WebsocketProvider(
        provider,
        options.ethereumNodeTimeout || 10000,
      );
    } else {
      realProvider = new Web3.providers.HttpProvider(
        provider,
        options.ethereumNodeTimeout || 10000,
      );
    }
  } else {
    realProvider = provider;
  }

  return new Web3(realProvider);
}

export const getBrowserWeb3 = () => {
  let web3 = null;
  if (window.ethereum) {
    web3 = createWeb3(window.ethereum);
  }
  // Legacy DApp Browsers
  else if (window.web3) {
    web3 = createWeb3(window.web3.currentProvider);
  }
  // Non-DApp Browsers
  else {
    console.log('You have a problem with web3!');
    return null;
  }
  return web3;
}

export const getInfuraWeb3 = () => {
  const infura_web3 = createWeb3(constants.rpcUrl);
  return infura_web3;  
}

export const formatAddress = (address) => {
  return address.slice(0, 6) + '...' + address.slice(-6)
}

export const getEthChainInfo = () => {
  return {chainId: constants.chainId, rpcUrl: constants.rpcUrl};
}

export const getEthBalance = async (addr) => {
  const web3 = getInfuraWeb3();
  const balance = await web3.eth.getBalance(addr);
  return web3.utils.fromWei(balance);
}

export const getCrowdsaleData = async () => {
  const web3 = getInfuraWeb3();
  const crowdsale = new Crowdsale({web3, networkId: constants.chainId});
  
  const amountRaised = await crowdsale.call("amountRaised");
  const startTime = await crowdsale.call("start");
  const endTime = await crowdsale.call("deadline");
  const publishTime = await crowdsale.call("publishDate");

  const data = {
    currentPrice: 192000,
    amountRaised: toFixed(Number(web3.utils.fromWei(amountRaised)), 1),
    fundingGoal: 125,
    startTime: Number(startTime),
    endTime: Number(endTime),
    publishTime: Number(publishTime),
  }

  // data.startTime = Math.floor(Date.UTC(2021, 5, 4, 0, 0, 0) / 1000);
  // data.endTime = Math.floor(Date.UTC(2021, 5, 21, 0, 0, 0) / 1000);
  const percentage = toFixed(data.amountRaised / data.fundingGoal * 100, 1);
  const now = Math.floor(Date.now() / 1000);

  var status = 0;
  if (now < data.startTime) status = 1;
  else if (now < data.endTime) status = 2;
  else if (now < data.publishTime) status = 3;
  else status = 4;

  return {...data, percentage, status};
}

export const toFixed = (num, digit) => {
  var fixed_num = Number(num).toFixed(digit)
  return Number(fixed_num.toString());
}