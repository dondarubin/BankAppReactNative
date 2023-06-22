import {FC} from "react";
import {Text, View} from "react-native";
import {useCurrencies} from "./useCurrencies";
import Loader from "../../../ui/Loader";
import {AppColors} from "../../../../../constants";

const Currencies: FC = () => {
  const {currencies, isLoading} = useCurrencies()

  return (
    <View style={{
      justifyContent: 'center',
      paddingTop: 12,
      paddingBottom: 12,
      marginTop: 20,
      backgroundColor: AppColors.WHITE,
      flexDirection: "row",
      borderRadius: 16,
    }}>
      {isLoading ? (<Loader/>) : currencies.map(cur => (
        <View
          key={cur.name}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "33.333333%",
          }}>

          <Text style={{
            fontSize: 12,
            lineHeight: 16,
            marginRight: 4,
            color: AppColors.MAIN
          }}>
            {cur.name}
          </Text>

          <Text style={{
            fontSize: 12,
            lineHeight: 16
          }}>
            {cur.value}
          </Text>
        </View>
      ))}
    </View>
  )
}

export default Currencies;