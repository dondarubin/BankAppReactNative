import {FC} from "react";
import {IOtherItem} from "../types";
import {Pressable, Text, View} from "react-native";
import Icon from "./Icon";
import {AppColors} from "../../../../../../constants";
import {BOX_SHADOW} from "../../../../../utils/styles";
import {useAccounts} from "../../../home/accounts/useAccounts";
import {handleTransfer} from "../../handleTransfer";

const CASH_CARD_NUMBER = '1111 1111 1111 1111'

const OtherItem: FC<{ item: IOtherItem }> = ({item}) => {
  const {accounts} = useAccounts();

  return (
    <Pressable
      onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}
      style={{
        marginLeft: 16,
        borderRadius: 12,
        padding: 8,
        width: 96,
        height: 96,
        backgroundColor: AppColors.MAIN,
        ...BOX_SHADOW
      }}
    >
      <Icon iconName={item.iconName}/>
      <Text style={{
        color: AppColors.WHITE,
        fontSize: 12,
        lineHeight: 16,
        marginTop: 6
      }}>{item.title}</Text>
    </Pressable>
  );
};

export default OtherItem;