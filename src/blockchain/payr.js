import { ethers } from 'ethers';
import * as utils from './utils';
import Crowdsale from './contracts/Crowdsale';
import PayrToken from './contracts/PayrToken';
import WEth from './contracts/WEth';
import { addresses } from './constants';

export class PAYR {
  constructor(provider, networkId, disconnect, options = {}) {

    this.web3 = utils.createWeb3(provider, options);
    this.networkId = networkId;
    this.disconnect = disconnect;
        
    const contract_options = {
      web3: this.web3,
      networkId: networkId,
      ...options
    }
    this.crowdsale = new Crowdsale(contract_options);
    this.payrtoken = new PayrToken(contract_options);
    this.weth = new WEth(contract_options);
  }

  async getInvestedPAYR(account) {
    const amount = await this.crowdsale.call("checkPAYRFunds", account);
    return this.web3.utils.fromWei(amount, "ether");
  }

  async getAccountInfo() {
    const account = this.web3.currentProvider.selectedAddress;
    const ethBalance = await utils.getEthBalance(account);
    const payrAmount = await this.getInvestedPAYR(account);
    return {
      ethBalance,
      payrAmount
    }
  }

  async getPayrAllowance() {
    const account = this.web3.currentProvider.selectedAddress;
    const allowance = await this.payrtoken.call("allowance", account, addresses.crowdsale[this.networkId]);
    return allowance;
  }

  async approvePayr() {
    try {
      const tx = await this.payrtoken.send("approve", null, addresses.crowdsale[this.networkId], ethers.constants.MaxUint256);
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async invest(amount) {
    try {
      const tx = await this.crowdsale.send("invest", {value: this.web3.utils.toWei(amount)});
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async withdraw() {
    try {
      const tx = await this.crowdsale.send("getPAYR", null);
      return tx;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
