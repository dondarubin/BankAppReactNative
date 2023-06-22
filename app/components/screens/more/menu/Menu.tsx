import {FC} from "react";
import {View} from "react-native";
import {menuData} from "./list";
import MenuItem from "./MenuItem";

const Menu: FC = () => {
  return (
    <View>
      {menuData.map(item => <MenuItem key={item.title} item={item}/>)}
    </View>
  )
}

export default Menu;