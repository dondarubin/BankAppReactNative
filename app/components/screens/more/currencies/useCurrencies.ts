import {useEffect, useState} from "react";
import {ICurrency} from "./types";
import {Alert} from "react-native";
import {url} from "./api";

export const useCurrencies = () => {
  const [isLoading, setIsLodaing] = useState(true);
  const [currencies, setCurrencies] = useState<ICurrency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}&base_currency=RUB`)
        const result = await response.json()

        setCurrencies([
          {
            name: 'USD',
            value: (1 / result.data.USD.value).toFixed(2)
          },
          {
            name: 'EUR',
            value: (1 / result.data.EUR.value).toFixed(2)
          },
          {
            name: 'GBP',
            value: (1 / result.data.GBP.value).toFixed(2)
          }
        ])
      } catch (err: any) {
        Alert.alert('Error fetch currencies!', err)
      } finally {
        setIsLodaing(false)
      }
    }

    fetchData()
  }, [])

  return {isLoading, currencies}
}