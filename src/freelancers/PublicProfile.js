import Layout from "../components/layouts/Layout";
import MainButton from "../components/buttons/MainButton";
import TextWithUnderscore from "../components/TextWithUnderscore";
import { useState } from "react";
import MainProductList from "../components/products/MainProductList";
import PricingList from "../components/pricings/PricingList";
import AboutFreelancer from "../components/freelancers/AboutFreelancer";

const PublicProfile = () => {
  const [showDetails, setShowDetails] = useState("albums");
  const [showAllAlbums, setAllAlbums] = useState(["", ""]);
  const [showAllProjects, setAllProjects] = useState(["", "", "", ""]);

  const getDetail = () => {
    switch (showDetails) {
      case "albums":
        return <MainProductList products={showAllAlbums} />;
      case "projects":
        return <MainProductList products={showAllProjects} />;
      case "pricings":
        return (
          <PricingList
            pricings={[{ hello: "haha" }, { hello: "haha" }, { hello: "haha" }]}
          />
        );
      case "about":
        return <AboutFreelancer />;
      default:
        return "";
    }
  };

  return (
    <Layout>
      <div className={"mt-8 grid grid-cols-2 gap-4"}>
        <div className={"md:ml-24"}>
          <div>
            <img
              className={"w-32 h-32 rounded-full object-cover"}
              src={
                "https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              }
              alt={"Profile Picture"}
            />
          </div>
          <div className={"mt-6"}>
            <h1 className={"font-medium text-blue-500 text-2xl"}>
              Ngurah Krisna
            </h1>
          </div>
          <div className={"my-3"}>
            <p className={"font-normal text-sm text-gray-400"}>
              Denpasar, Bali
            </p>
          </div>
          <div>
            <h1 className={"font-medium text-black text-3xl"}>
              Professional Photographer with Cinematic enthusiast
            </h1>
          </div>
          <div className={"mt-6"}>
            <MainButton className={"w-24"} label={"Hire me"} />
          </div>
        </div>
        <div className={"relative"}>
          <div
            className={
              "bg-blue-500 w-1/2 top-0 right-16 ml-auto relative h-5/6"
            }
          />
          <div>
            w
            <img
              className={"w-4/5 h-80 object-cover top-16 absolute"}
              src={
                "https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              }
              alt={"Profile Picture"}
            />
          </div>
        </div>
      </div>
      <div className={"md:mx-24 mt-28"}>
        <div className={"flex gap-12"}>
          <TextWithUnderscore
            onClick={() => {
              setShowDetails("albums");
            }}
            initialValue={showDetails}
            textName={"albums"}
          >
            Albums
          </TextWithUnderscore>
          <TextWithUnderscore
            onClick={() => {
              setShowDetails("projects");
            }}
            initialValue={showDetails}
            textName={"projects"}
          >
            Project selesai (2)
          </TextWithUnderscore>
          <TextWithUnderscore
            onClick={() => {
              setShowDetails("pricings");
            }}
            initialValue={showDetails}
            textName={"pricings"}
          >
            Daftar harga
          </TextWithUnderscore>
          <TextWithUnderscore
            onClick={() => {
              setShowDetails("about");
            }}
            initialValue={showDetails}
            textName={"about"}
          >
            Tentang freelancer
          </TextWithUnderscore>
        </div>
        <div className={"mt-12"}>{getDetail()}</div>
      </div>
    </Layout>
  );
};
export default PublicProfile;
