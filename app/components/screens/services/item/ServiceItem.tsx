import {FC} from "react";
import {IService} from "../types";
import {Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {MaterialIcons} from "@expo/vector-icons";
import Percent from "./Percent";
import {AppColors} from "../../../../../constants";
import { getRandomGradient } from "./getRandomGradient";



const ServiceItem: FC<{ service: IService }> = ({service}) => {
  return (
    <View style={{marginBottom: 16}}>
      <View style={{
        borderRadius: 12,
        overflow: "hidden",
        width: 56,
        height: 56,
        marginLeft: 16,
        marginRight: 16,
      }}>
        <LinearGradient
          colors={getRandomGradient()}
          style={{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}
        >
          <Percent percent={service.percent}/>
          <MaterialIcons name={service.iconName} size={30} color={AppColors.WHITE}/>
        </LinearGradient>

      </View>

      <Text style={{
        fontSize: 12,
        lineHeight: 16,
        textAlign: 'center',
        marginTop: 6,
        color: AppColors.WHITE
      }}>
        {service.title}
      </Text>
    </View>
  )
}

export default ServiceItem