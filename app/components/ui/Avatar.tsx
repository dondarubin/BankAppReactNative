import {View, Text} from "react-native";
import {FC} from "react";
import {AppColors} from "../../../constants";

interface IAvatar {
  name?: string | null
  size?: 'small' | 'large'
}

const Avatar: FC<IAvatar> = ({name, size = 'small'}) => {
  const isSmall = size === 'small';

  return (
    <View style={{
      borderRadius: 9999,
      backgroundColor: AppColors.WHITE,
      width: isSmall ? 36 : 48,
      height: isSmall ? 36 : 48,
      marginRight: isSmall ? 12 : 0,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{
        color: AppColors.MAIN,
        fontSize: isSmall ? 20: 20,
        lineHeight: isSmall ? 28: 28,
        fontWeight: '500',
      }}>
        {name?.slice(0, 1)}
      </Text>
    </View>
  );
};

export default Avatar;