import {View, Text} from "react-native";
import React, {FC} from "react";

interface IPadding {
  children: React.ReactNode;
  style?: any
}

const Padding: FC<IPadding> = ({children, style = {}}) => {
  return (
    <View style={{
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
      ...style
    }}>
      {children}
    </View>
  );
};

export default Padding;