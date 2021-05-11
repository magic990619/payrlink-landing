import { useCallback, useEffect, useState } from 'react';
import * as utils from '../blockchain/utils';

const useSalesData = () => {
  const [salesData, setSalesData] = useState(null);

  const fetchSalesData = useCallback(async () => {
    try {
      const data = await utils.getCrowdsaleData();
      setSalesData(data);
      console.log("Sales Data:", data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchSalesData();
    let refreshInterval = setInterval(fetchSalesData, 10000);
    return () => clearInterval(refreshInterval);
  }, [fetchSalesData]);

  return salesData;
}

export default useSalesData;
