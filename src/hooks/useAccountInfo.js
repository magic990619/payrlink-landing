import { useCallback, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import * as utils from '../blockchain/utils';
import usePayr from './usePayr';

const useAccountInfo = () => {
  const [accountLoading, setAccountLoading] = useState(false);
  const [ethBalance, setEthBalance] = useState(0);
  const [payrAmount, setPayrAmount] = useState(0);
  const { account } = useWallet();
  const payr = usePayr();

  const fetchAccountInfo = useCallback(async () => {
    try {
      const accountInfo = await payr.getAccountInfo();
      console.log("Account Info:", accountInfo);
      setEthBalance(utils.toFixed(accountInfo.ethBalance, 4));
      setPayrAmount(utils.toFixed(accountInfo.payrAmount, 4));
      setAccountLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [payr]);

  useEffect(() => {
    if (account && payr) {
      setAccountLoading(true);
      fetchAccountInfo();
      let refreshInterval = setInterval(fetchAccountInfo, 10000);
      return () => clearInterval(refreshInterval);
    }
  }, [account, payr, fetchAccountInfo]);

  return {accountLoading, ethBalance, payrAmount};
}

export default useAccountInfo;
