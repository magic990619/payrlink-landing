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
  return web3.utils.fromWei(balance, 'ether');
}

export const getCrowdsaleData = async () => {
  const web3 = getInfuraWeb3();
  const crowdsale = new Crowdsale({web3, networkId: constants.chainId});
  
  const currentPrice= await crowdsale.call("getCurrentPrice");
  const amountRaised = await crowdsale.call("amountRaised");
  const fundingGoal = await crowdsale.call("fundingGoal");
  const startTime = await crowdsale.call("start");
  const endTime = await crowdsale.call("deadline");
  const closed = await crowdsale.call("crowdsaleClosed");

  return {
    currentPrice: Number(currentPrice),
    amountRaised: Number(web3.utils.fromWei(amountRaised, 'ether')),
    fundingGoal: Number(web3.utils.fromWei(fundingGoal, 'ether')),
    startTime: Number(startTime),
    endTime: Number(endTime),
    closed
  }
}