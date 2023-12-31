import {View, Text} from "react-native";
import {FC, Fragment} from "react";
import {useAccounts} from "./useAccounts";
import Padding from "../../../ui/Padding";
import Loader from "../../../ui/Loader";
import {AppColors} from "../../../../../constants";
import AccountItem from "./item/AccountItem";

const Accounts: FC = () => {
  const {accounts, isLoading} = useAccounts();

  return (
    <Padding>
      {isLoading ? <Loader/> : accounts.length ? accounts.map((account, idx) => (
        <Fragment key={account._id}>
          <AccountItem account={account}/>
          {idx + 1 !== accounts.length && <View style={{
            paddingTop: 20,
            borderBottomColor: AppColors.WHITE,
            borderBottomWidth: 1,
            marginBottom: 24
          }}/>}
        </Fragment>
      )) : <Text style={{color: AppColors.WHITE, textAlign: 'center'}}>You don't have cards!</Text>}
    </Padding>
  );
};

export default Accounts;