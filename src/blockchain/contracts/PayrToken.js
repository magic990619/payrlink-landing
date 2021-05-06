
import Contract from './Contract';
import abi from '../abis/payrtoken.json';
import { addresses } from '../constants';

class PayrToken extends Contract {
  constructor(options) {
    super(options, "payrtoken");
    this.contract = new this.web3.eth.Contract(abi, addresses.payrtoken[this.networkId]);
  }
}

export default PayrToken;