import {FC} from "react";
import Header from "./Header";
import Layout from "../../layouts/Layout";
import Accounts from "./accounts/Accounts";
import ApplyNewProduct from "./apply-new-product/ApplyNewProduct";

const Home: FC = () => {
  return (
    <Layout>
      <Header/>
      <Accounts/>
      <ApplyNewProduct/>
    </Layout>
  );
};

export default Home;