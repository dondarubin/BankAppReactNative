import {FC} from "react";
import {Text, View} from "react-native";
import {AppColors} from "../../../../../constants";

export const Percent: FC<{ percent: number }> = ({percent}) => {
  return (
    <View style={{
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      position: "absolute",
      top: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle: 'solid',
      borderRightWidth: 27,
      borderTopWidth: 27,
      borderRightColor: 'transparent',
      borderTopColor: AppColors.MAIN,
      transform: [{rotate: '90deg'}]
    }}>

      <Text style={{
        width: 40,
        height: 40,
        position: "absolute",
        fontSize: 10,
        transform: [{rotate: '-40deg'}],
        top: -34,
        left: 7
      }}>
        {percent + '%'}
      </Text>
    </View>
  )
}

export default Percent