
import Contract from './Contract';
import abi from '../abis/crowdsale.json';
import { addresses } from '../constants';

class Crowdsale extends Contract {
  constructor(options) {
    super(options, "crowdsale");
    this.contract = new this.web3.eth.Contract(abi, addresses.crowdsale[this.networkId]);
  }
}

export default Crowdsale;