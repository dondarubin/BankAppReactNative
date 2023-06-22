import {FC} from "react";
import Padding from "../../../ui/Padding";
import Button from "../../../ui/Button";
import {Alert} from "react-native";
import {asyncAlert} from "./asyncAlert";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {db} from "../../../../firebase";
import {useAuth} from "../../../../hooks/useAuth";
import {getRandomCardNumber} from "../../../../utils/getRandomCardNumber";

const ApplyNewProduct: FC = () => {
  const {user} = useAuth();

  const registerHandler = async () => {
    try {
      const currency = await asyncAlert({
        title: 'Currency',
        msg: 'Select account currency:',
        btns: {
          text: "RUB",
          resolveValue: 'RUB',
          textSecond: 'USD',
          resolveValueSecond: 'USD'
        },
      })

      const cardType = await asyncAlert({
        title: 'Card type',
        msg: 'Select Card type:',
        btns: {
          text: "Debit",
          resolveValue: 'SberCard Debit',
          textSecond: 'Travel',
          resolveValueSecond: 'SberCard Travel'
        },
      })

      await addDoc(collection(db, 'accounts'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType
      })
    } catch (err: any) {
      Alert.alert("Something went wrong...", "Error apply new product!\n" + err)
    }
  }

  return (
    <Padding style={{
      marginTop: 24,
    }}>
      <Button onPress={registerHandler} title={'Apply for a new product'}/>
    </Padding>
  )
}

export default ApplyNewProduct