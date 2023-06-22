import {FC} from "react";
import {IMessage} from "./types";
import {Text, View} from "react-native";
import {useAuth} from "../../../hooks/useAuth";
import {AppColors} from "../../../../constants";

const Message: FC<{ message: IMessage }> = ({message}) => {
  const {user} = useAuth()

  const isMsgByAuthUser = user?.uid === message.userId

  return (
    <View style={{
      flexDirection: "row",
      alignItems: "flex-end",
      borderRadius: 12,
      backgroundColor: isMsgByAuthUser ? AppColors.MAIN : AppColors.WHITE,
      alignSelf: isMsgByAuthUser ? "flex-end" : 'flex-start',
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      marginTop: 8,
      marginBottom: 8,
    }}>

      <Text style={{
        color: isMsgByAuthUser ? AppColors.WHITE : AppColors.BLACK
      }}>
        {message.text}
      </Text>
    </View>
  )
}

export default Message