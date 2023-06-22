import {Text, TouchableOpacity, View} from "react-native";
import {FC} from "react";
import Padding from "../../ui/Padding";
import Avatar from "../../ui/Avatar";
import {useNavigation} from "@react-navigation/native";
import {AppColors} from "../../../../constants";
import {useProfile} from "../profile/useProfile";
import Loader from "../../ui/Loader";

const Header: FC = () => {
  const {navigate} = useNavigation();
  const {isLoading, name} = useProfile();

  return isLoading ? <Loader/> : (
    <Padding style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between'
    }}>
      <View>
        <TouchableOpacity onPress={() => navigate("Profile")}>
          <Text style={{
            fontSize: 24,
            lineHeight: 32,
            marginBottom: 8,
            color: AppColors.WHITE
          }}>
            Hello, {name}!
          </Text>
        </TouchableOpacity>

        <Text style={{
          fontSize: 16,
          lineHeight: 22,
          color: AppColors.MAIN
        }}>
          Welcome back
        </Text>
      </View>

      <Avatar name={name}/>
    </Padding>
  );
};

export default Header;