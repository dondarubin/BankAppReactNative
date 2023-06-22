import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query, where} from "firebase/firestore";
import {db} from "../../../firebase";
import {IMessage} from "./types";
import dayjs from "dayjs";

export const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => onSnapshot(
      query(collection(db, 'messages'), orderBy('timestamp', 'asc')),
      snapshot => {
        setMessages(
          snapshot.docs.map(doc => doc.data()?.timestamp ?
            ({
              _id: doc.id,
              ...doc.data(),
              timestamp: dayjs.unix(doc.data()?.timestamp.seconds).format('HH:mm')
            } as IMessage)
            :
            ({
              _id: doc.id,
              ...doc.data()
            } as IMessage)
          )
        )

        setIsLoading(false)
      }
    ),
    []
  )
  return {messages, isLoading}
}