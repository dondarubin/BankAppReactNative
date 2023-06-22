import {View, Text, Pressable} from "react-native";
import {FC, useState} from "react";
import {styleCenter} from "../../layouts/Layout";
import {useAuth} from "../../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import {AppColors} from "../../../../constants";

interface IData {
  email: string,
  password: string
}

const Auth: FC = () => {
  const {isLoading, login, register} = useAuth()
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState({} as IData);

  const authHandler = async () => {
    const {email, password} = data;

    if (isReg) await register(email, password)
    else await login(email, password)

    setData({} as IData)
  }

  return (
    <View style={styleCenter}>
      <View style={{
        height: '100%',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: '75%'}}>

          <Text style={{
            color: AppColors.WHITE,
            textAlign: "center",
            fontSize: 24,
            marginBottom: 8,
            lineHeight: 32,
            fontWeight: "700",
          }}>
            {isReg ? 'Sign Up' : 'Sign In'}
          </Text>

          {isLoading ? <Loader/> : <>
            <Field
              value={data.email}
              placeholder="Enter email"
              onChange={value => setData({...data, email: value})}
            />

            <Field
              value={data.password}
              placeholder="Enter password"
              onChange={value => setData({...data, password: value})}
              isSecure={true}
            />

            <Button title={'Let`s go!'} onPress={authHandler}/>

            <Pressable onPress={() => setIsReg(!isReg)}>
              <Text style={{
                color: AppColors.WHITE,
                opacity: 0.3,
                textAlign: "right",
                fontSize: 14,
                lineHeight: 20,
              }}>
                {isReg ? 'Login' : 'Register'}
              </Text>
            </Pressable>
          </>}
        </View>
      </View>
    </View>
  );
};

export default Auth;