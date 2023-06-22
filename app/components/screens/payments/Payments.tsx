import React, {FC} from "react";
import Layout from "../../layouts/Layout";
import Heading from "../../ui/Heading";
import Other from "./other/Other";
import Contacts from "./contacts/Contacts";

const Payments: FC = () => {
  return (
    <Layout>
      <Heading text={"Payments"}/>
      <Contacts/>
      <Other/>
    </Layout>
  );
};

export default Payments;