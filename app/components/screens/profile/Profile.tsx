import {FC} from "react";
import {useProfile} from "./useProfile";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/Heading";
import Padding from "../../ui/Padding";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import {useAuth} from "../../../hooks/useAuth";
import {AppColors} from "../../../../constants";
import {useUpdateProfile} from "./useUpdateProfile";
import {Text, View} from "react-native";

const Profile: FC = () => {
  const {logout} = useAuth()
  const {isLoading: isProfileLoading, name, setName, profile} = useProfile()
  const {isLoading, isSuccess, updateProfile} = useUpdateProfile(name, profile.docId);

  return (
    <Layout>
      <Heading isCenter={true} text={'Profile'}/>

      <Padding>
        {isSuccess && (
          <View style={{
            backgroundColor: AppColors.MAIN,
            padding: 12,
            paddingTop: 8,
            paddingBottom: 8,
            borderRadius: 12
          }}>
            <Text style={{color: AppColors.WHITE, textAlign: "center"}}>
              Profile update successfully
            </Text>
          </View>
        )}

        {(isProfileLoading || isLoading) ? (
          <Loader/>
        ) : (
          <>
            <Field onChange={setName} value={name} placeholder={'Enter name'}/>

            <Button onPress={updateProfile} title={'Update profile'}/>

            <Button
              colors={[AppColors.RED, AppColors.RED_HOVER]}
              onPress={logout}
              title={'Logout'}
            />
          </>
        )}
      </Padding>
    </Layout>
  );
};

export default Profile;