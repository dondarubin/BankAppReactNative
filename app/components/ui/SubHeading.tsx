import {View, Text} from "react-native";
import {FC} from "react";
import {AppColors} from "../../../constants";
import Padding from "./Padding";

const SubHeading: FC<{ text: string, isCenter?: boolean }> = ({text, isCenter = false}) => {
  return (
    <Padding>
      <Text style={{
        fontSize: 20,
        lineHeight: 28,
        fontWeight: "700",
        color: AppColors.WHITE,
        textAlign: isCenter ? 'center' : "left"
      }}>
        {text}
      </Text>
    </Padding>
  );
};

export default SubHeading;