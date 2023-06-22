import {View, Text} from "react-native";
import {FC} from "react";
import {AppColors} from "../../../constants";
import Padding from "./Padding";

const Heading: FC<{ text: string, isCenter?: boolean }> = ({text, isCenter = false}) => {
  return (
    <Padding>
      <Text style={{
        fontSize: 24,
        lineHeight: 32,
        fontWeight: "700",
        color: AppColors.MAIN,
        textAlign: isCenter ? 'center' : "left"
      }}>
        {text}
      </Text>
    </Padding>
  );
};

export default Heading;