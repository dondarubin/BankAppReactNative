import {View, ScrollView} from "react-native";
import {FC, ReactNode} from "react";
import {AppColors} from "../../../constants";

interface ILayout {
  children: ReactNode,
  isScrollView?: boolean
}

export const styleCenter = {
  height: "100%",
  width: "100%",
  backgroundColor: AppColors.BG_GRAY,
  paddingTop: 48,
}

const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
  return (
    <View style={styleCenter}>
      {isScrollView ?
        <ScrollView>
          {children}
        </ScrollView>
        :
        children}
    </View>
  );
};

export default Layout;