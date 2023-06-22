import {FC} from "react";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/Heading";
import {View} from "react-native";
import {services} from "./data";
import ServiceItem from "./item/ServiceItem";

const Services: FC = () => {
  return (
    <Layout>
      <Heading text={'Saratov'} isCenter={true}/>

      <View style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        marginTop: 20
      }}>
        {services.map(service => <ServiceItem key={service.title} service={service}/>)}
      </View>
    </Layout>
  );
};

export default Services;