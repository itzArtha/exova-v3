import Header from "../Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  const footer = props.footer ?? true;
  const forChat = props.forChat ?? false;
  return (
    <>
      <div
        className={`${
          forChat ? "flex flex-col h-screen overflow-hidden" : null
        }`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <Header isSelected={props.selectedNavLink} />
        <div
          className={`${props.className} ${
            forChat ? null : "md:mt-12 mt-4"
          } mx-2`}
        >
          {props.children}
        </div>
        {footer ? <Footer /> : null}
      </div>
    </>
  );
};
export default Layout;
