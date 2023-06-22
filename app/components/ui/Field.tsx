import { TextInput} from "react-native";
import {FC} from "react";
import {AppColors} from "../../../constants";

interface IField {
  onChange: (val: string) => void,
  value: string
  placeholder: string,
  isSecure?: boolean
}

const Field: FC<IField> = ({onChange, placeholder, value, isSecure}) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      secureTextEntry={isSecure}
      autoCapitalize={"none"}
      style={{
        width: '100%',
        borderRadius: 12,
        backgroundColor: "#F3F4F6",
        color: AppColors.BG_GRAY,
        marginTop: 12,
        padding: 12
      }}
    />
  )
};

export default Field;