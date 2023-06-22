import {ImageBackground, View} from "react-native";
import {FC} from "react";
import {IAccount} from "../types";
import Currency from "./Currency";
import Balance from "./Balance";
import {AppColors} from "../../../../../../constants";

const AccountItem: FC<{ account: IAccount }> = ({account}) => {

  return (
    <View style={{
      backgroundColor: AppColors.MAIN,
      borderRadius: 20,
      padding: 15,
      width: "100%",
      height: 200
    }}>
      <ImageBackground
        style={{width: 50, height: 50}}
        source={require('../../../../ui/images/chip.png')}
        resizeMode={'contain'}
      />

      <Currency currency={account.currency}/>
      <Balance account={account}/>
    </View>
  )
}

export default AccountItem