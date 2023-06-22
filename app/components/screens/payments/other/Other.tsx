import {FC} from "react";
import {ScrollView, View} from "react-native";
import SubHeading from "../../../ui/SubHeading";
import {otherItems} from "./data";
import OtherItem from "./item/OtherItem";

const Other: FC = () => {
  return (
    <View>
      <SubHeading text={'Important transfers'}/>

      <ScrollView
        style={{paddingTop: 20, paddingBottom: 20,}}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        {otherItems.map(item => (
          <OtherItem key={item.title} item={item}/>
        ))}
      </ScrollView>
    </View>
  );
};

export default Other;