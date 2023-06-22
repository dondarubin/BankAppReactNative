import {FC} from "react";
import {IAccount} from "../types";
import {Text, View} from "react-native";
import {AppColors} from "../../../../../../constants";


const Balance: FC<{ account: IAccount }> = ({account}) => {
  const {balance, currency, name} = account;

  return (
    <View style={{
      width: "66.666667%",
      paddingTop: 20
    }}>
      <Text style={{
        color: AppColors.WHITE,
        fontSize: 15
      }}>
        {name}
      </Text>

      <Text style={{
        color: AppColors.WHITE,
        fontSize: 15,
        paddingTop: 10,
        fontWeight: "700",
      }}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: 'currency'
        }).format(balance)}
      </Text>
    </View>
  )
}

export default Balance