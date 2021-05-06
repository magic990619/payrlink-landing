import * as utils from './utils';
import Crowdsale from './contracts/PayrToken';
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
}
