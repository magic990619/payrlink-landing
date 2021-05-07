import * as utils from './utils';
import Crowdsale from './contracts/Crowdsale';
import PayrToken from './contracts/PayrToken';
import WEth from './contracts/WEth';


export class PAYR {
  constructor(provider, networkId, options = {}) {

    this.web3 = utils.createWeb3(provider, options);
    
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

  async getAccountInfo(account) {
    const ethBalance = await utils.getEthBalance(account);
    const payrAmount = await this.getInvestedPAYR(account);
    return {
      ethBalance,
      payrAmount
    }
  }
}
