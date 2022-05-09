import { Route } from "react-router-dom";
import Home from "../user/home/Home";
import DetailProduct from "../user/products/DetailProduct";
import ScrollToTop from "./ScrollToTop";
import Products from "../user/products/Products";
import PublicProfile from "../freelancers/PublicProfile";
import AboutUs from "../components/abouts/AboutUs";
import Chat from "../dual/Chat";

const Router = () => {
  return (
    <>
      <ScrollToTop />
      <Route path={"/"} component={Home} exact />
      <Route path={"/products"} component={Products} exact />
      <Route path={"/products/:slug"} component={DetailProduct} exact />
      <Route path={"/freelancers/:slug"} component={PublicProfile} exact />
      <Route path={"/i/about-us"} component={AboutUs} exact />
      <Route path={"/chats"} component={Chat} exact />
      <Route path={"/chats/:channelId"} component={Chat} exact />
    </>
  );
};
export default Router;
