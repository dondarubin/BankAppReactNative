import {FC} from "react";
import {IContact} from "./types";
import {Pressable, Text} from "react-native";
import Avatar from "../../../ui/Avatar";
import {AppColors} from "../../../../../constants";
import {handleTransfer} from "../handleTransfer";
import {useAccounts} from "../../home/accounts/useAccounts";

const ContactsItem: FC<{ contact: IContact }> = ({contact}) => {
  const {accounts} = useAccounts()

  return (
    <Pressable
      onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}
      style={{
        marginRight: 4,
        marginLeft: 16,
        alignItems: "center",
      }}>
      <Avatar size={'large'} name={contact.displayName}/>

      <Text style={{
        color: AppColors.WHITE,
        marginTop: 4,
        fontSize: 12,
        lineHeight: 16,
      }}>
        {contact.displayName}
      </Text>
    </Pressable>
  );
};

export default ContactsItem;