import {FC} from "react";
import {IFooterItem} from "../../../../layouts/footer/types";
import {View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {AppColors} from "../../../../../../constants";


interface IIcon extends Pick<IFooterItem, 'iconName'> {
}

const Icon: FC<IIcon> = ({iconName}) => {
  return (
    <View style={{
      borderRadius: 9999,
      backgroundColor: AppColors.WHITE,
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32
    }}>
      <AntDesign size={19} name={iconName} color={AppColors.MAIN}/>
    </View>
  );
};

export default Icon;