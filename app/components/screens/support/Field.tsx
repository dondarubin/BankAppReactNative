import {FC, useState} from "react";
import {useAuth} from "../../../hooks/useAuth";
import {Alert, Pressable, TextInput, View} from "react-native";
import {AppColors} from "../../../../constants";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../../../firebase";

const Field: FC = () => {
  const {user} = useAuth()
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      if (message === '') return
      await addDoc(collection(db, 'messages'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        text: message
      })
    } catch (err: any) {
      Alert.alert('Error add new message!: ' + err)
    } finally {
      setMessage('');
    }
  }

  return (
    <View style={{
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <TextInput
        placeholder={'Enter your message'}
        onChangeText={setMessage}
        value={message}
        autoCapitalize={'none'}
        style={{
          backgroundColor: AppColors.WHITE,
          borderRadius: 12,
          padding: 12,
          width: "83.333333%",
          height: 45,
        }}/>

      <Pressable onPress={handleSendMessage}>
        <MaterialCommunityIcons
          name={'send-circle-outline'}
          size={42}
          style={{color: AppColors.MAIN}}/>
      </Pressable>
    </View>
  )
}

export default Field