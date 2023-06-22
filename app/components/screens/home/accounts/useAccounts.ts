import {useEffect, useState} from "react";
import {IAccount} from "./types";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {db} from "../../../../firebase";
import {useAuth} from "../../../../hooks/useAuth";

export const useAccounts = () => {
  const {user} = useAuth();
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => onSnapshot(
      query(collection(db, 'accounts'), where('userId', '==', user?.uid)),
      snapshot => {
        setAccounts(
          snapshot.docs.map(doc => ({
              _id: doc.id,
              ...doc.data()
            } as IAccount)
          )
        )

        setIsLoading(false)
      }
    ),
    []
  )
  return {accounts, isLoading}
}