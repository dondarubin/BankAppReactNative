import React, {FC} from "react";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/Heading";
import Padding from "../../ui/Padding";
import {Text} from "react-native";
import Currencies from "./currencies/Currencies";
import Menu from "./menu/Menu";
import {AppColors} from "../../../../constants";

const More: FC = () => {
  return (
    <Layout>
      <Heading text={'More'}/>
      <Padding>
        <Currencies/>

        <Menu/>

        <Text style={{
          textAlign: 'center',
          opacity: 0.5,
          marginTop: 16,
          marginBottom: 16,
          color: AppColors.WHITE
        }}>
          Version 1.1.1
        </Text>
      </Padding>
    </Layout>
  );
};

export default More;