import {ActivityIndicator} from "react-native";
import {AppColors} from "../../../constants";

const Loader = () => {
  return <ActivityIndicator size={"large"} color={AppColors.MAIN}/>
};

export default Loader;