import {FC} from "react";
import {Image, Text, View} from "react-native";
import {AppColors} from "../../../../constants";


const Header: FC = () => {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: 'center',
      paddingTop: 4,
      paddingBottom: 4,
      marginBottom: 8,
      marginTop: 16,
    }}>
      <View style={{borderRadius: 9999, backgroundColor: AppColors.WHITE, marginRight: 10}}>
        <Image source={require('../../ui/images/sberLogo.png')}/>
      </View>

      <View>
        <Text style={{
          fontSize: 14,
          lineHeight: 20,
          color: AppColors.MAIN,
          fontWeight: "500"
        }}>
          Support
        </Text>

        <Text style={{
          fontSize: 12,
          lineHeight: 16,
          color: AppColors.WHITE
        }}>
          We are there 24/7
        </Text>
      </View>
    </View>
  )
}

export default Header