import {FC} from "react";
import {TypeCurrency} from "../types";
import {Text, View} from "react-native";
import {AppColors} from "../../../../../../constants";
import {FontAwesome} from '@expo/vector-icons'


const Currency: FC<{ currency: TypeCurrency }> = ({currency}) => {
  return (
    <View style={{
      borderRadius: 9999,
      backgroundColor: AppColors.MAIN,
      width: 44,
      height: 44,
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 10
    }}>
      <View style={{
        borderRadius: 9999,
        width: 34,
        height: 34,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: AppColors.MAIN_HOVER
      }}>
        <FontAwesome
          color={AppColors.WHITE}
          name={currency === "RUB" ? 'ruble' : 'usd'}
          size={15}
        />
      </View>
    </View>
  )
}

export default Currency