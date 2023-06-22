import {FC} from "react";
import {Linking, Pressable, Text, View} from "react-native";
import {IMoreItem} from "./types";
import {AppColors} from "../../../../../constants";
import {MaterialIcons} from "@expo/vector-icons";

const MenuItem: FC<{ item: IMoreItem }> = ({item}) => {
  return (
    <Pressable
      onPress={() => Linking.openURL(item.link)}
      style={{
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 16,
        backgroundColor: AppColors.WHITE,
        flexDirection: "row",
        borderRadius: 16,
      }}>
      <View style={{width: "83.333333%",}}>
        <Text style={{
          fontSize: 20,
          lineHeight: 28,
          fontWeight: "700",
          color: AppColors.MAIN
        }}>
          {item.title}
        </Text>

        <Text style={{
          marginTop: 4,
          color: AppColors.BLACK,
          opacity: 0.9,
          fontSize: 13
        }}>
          {item.description}
        </Text>
      </View>

      <View style={{
        borderRadius: 9999,
        backgroundColor: AppColors.BG_GRAY,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <MaterialIcons name={item.iconName} size={22} color={AppColors.MAIN}/>
      </View>
    </Pressable>
  )
}

export default MenuItem