import {FC} from "react";
import {useContacts} from "./useContacts";
import {ScrollView, View} from "react-native";
import SubHeading from "../../../ui/SubHeading";
import Loader from "../../../ui/Loader";
import ContactItem from "./ContactItem";

const Contacts: FC = () => {
  const {contacts, isLoading} = useContacts();

  return (
    <View style={{
      marginTop: 32,
      marginBottom: 32,
    }}>
      <SubHeading text={'Phone transfers'}/>
      {isLoading ? <Loader/> :
        <ScrollView
          style={{marginTop: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          {contacts.map(contact => <ContactItem key={contact._id} contact={contact}/>)}
        </ScrollView>}
    </View>
  );
};

export default Contacts;