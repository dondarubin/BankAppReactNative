import {Text, TouchableHighlight} from "react-native";
import {AppColors} from "../../../constants";
import {FC} from "react";

interface IButton {
  onPress: () => void,
  title: string,
  colors?: [string, string],
  style?: any
}

const Button: FC<IButton> = (
  {
    onPress,
    title,
    style = {},
    colors = [AppColors.MAIN, AppColors.MAIN_HOVER]
  }
) => {

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={{
        backgroundColor: colors[0],
        borderRadius: 12,
        width: '100%',
        marginTop: 16,
        marginBottom: 16,
        paddingTop: 12,
        paddingBottom: 12,
        ...style
      }}
    >
      <Text style={{textAlign: "center", color: "white"}}>{title}</Text>
    </TouchableHighlight>
  )
};

export default Button;