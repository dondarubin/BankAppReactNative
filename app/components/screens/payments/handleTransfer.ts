import {IAccount} from "../home/accounts/types";
import {Alert} from "react-native";
import {collection, doc, getDoc, getDocs, limit, query, updateDoc, where} from "firebase/firestore";
import {db} from "../../../firebase";

export const handleTransfer = async (fromAccount: IAccount, cardNumber: string) => {
  Alert.prompt('Sum transfer', 'Enter the transfer amount:', async sum => {
    try {
      let accountToId = ''
      let currentToBalance = ''

      const querySnapshot = await getDocs(query(collection(db, 'accounts'),
        where('cardNumber', '==', cardNumber), limit(1)))

      querySnapshot.docs.forEach(doc => {
        accountToId = doc.id
      })

      const docRefTo = doc(db, 'accounts', accountToId)
      const docSnapTo = await getDoc(docRefTo)

      if (docSnapTo.exists()) {
        currentToBalance = docSnapTo.data().balance
      } else {
        Alert.alert('The card where you are sending money not found!')
        return
      }

      await updateDoc(docRefTo,
        {
          balance: currentToBalance + Number(sum)
        }
      )

      const docRefFrom = doc(db, 'accounts', fromAccount._id)

      await updateDoc(docRefFrom,
        {
          balance: fromAccount.balance - Number(sum)
        }
      )
      return
    } catch (err: any) {
      Alert.alert("Something went wrong...", "Transfer error!\n" + err)
    }
  })
}