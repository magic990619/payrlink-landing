import { useCallback, useEffect, useState } from 'react';

import BigNumber from 'bignumber.js';
import usePayr from './usePayr';
import { useWallet } from 'use-wallet';

const useAllowance = () => {
  const [allowance, setAllowance] = useState(new BigNumber(0));
  const { account } = useWallet();
  const payr = usePayr();

  const fetchAllowance = useCallback(async () => {
    try {
      const _allowance = await payr.getAllowance();
      setAllowance(new BigNumber(_allowance));
      console.log("Allowance: ", _allowance);
    } catch (e) {
      console.log(e);
    }
  }, [payr]);

  useEffect(() => {
    if (account && payr) {
      fetchAllowance();
      let refreshInterval = setInterval(fetchAllowance, 10000);
      return () => clearInterval(refreshInterval);
    }
  }, [account, payr, fetchAllowance]);

  return allowance.toNumber() !== 0;
}

export default useAllowance;
