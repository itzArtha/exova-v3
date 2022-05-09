import Layout from "../../components/layouts/Layout";
import TextWithIcon from "../../components/badges/TextWithIcon";
import MainTextInput from "../../components/forms/MainTextInput";
import MainButton from "../../components/buttons/MainButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import MainBadge from "../../components/badges/MainBadge";
import SecondaryReview from "../../components/reviews/SecondaryReview";
import MainPricing from "../../components/pricings/MainPricing";
import Breadcumb from "../../components/layouts/Breadcumb";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextWithUnderscore from "../../components/TextWithUnderscore";
import MainProductList from "../../components/products/MainProductList";

const DetailProduct = () => {
  const [showDetails, setShowDetails] = useState("description");
  const breadcrumbs = [
    {
      label: "Jasa / freelancer",
      link: "./",
    },
    {
      label: "Detail jasa",
      link: "../products/slug",
    },
  ];
  return (
    <Layout className={"md:mx-24"}>
      <Breadcumb labels={breadcrumbs} />
      <div className="mt-12">
        <div>
          <h1 className="text-3xl font-base">Cinematic Bali Event</h1>
        </div>
        <div className="mt-4">
          <SecondaryReview> 4.8/5 (24 Ulasan)</SecondaryReview>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-5">
              <img
                className="w-full object-cover rounded-md"
                style={{ height: "538px" }}
                src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              />
            </div>
            <div className="col-span-1 grid-rows-4 gap-2">
              <div className="mb-2 cursor-pointer">
                <img
                  className="w-full h-32 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                />
              </div>
              <div className="my-2">
                <img
                  className="w-full h-32 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                />
              </div>
              <div className="mt-2">
                <img
                  className="w-full h-32 object-cover rounded-md"
                  src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                />
              </div>
              <div className="mt-2 relative">
                <img
                  className="w-full h-32 object-cover rounded-md"
                  style={{ filter: "brightness(40%)" }}
                  src="https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
                />
                <div className="absolute w-full py-2.5 bottom-10 top-12 inset-x-0 text-white text-sm text-center leading-4">
                  Lihat semua
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-16"}>
        <div className={"grid grid-cols-3 gap-12"}>
          <div className={"col-span-2"}>
            <div>
              <div className={"flex gap-4"}>
                <TextWithUnderscore
                  onClick={() => {
                    setShowDetails("description");
                  }}
                  initialValue={showDetails}
                  textName={"description"}
                >
                  Deskripsi
                </TextWithUnderscore>
                <TextWithUnderscore
                  onClick={() => {
                    setShowDetails("reviews");
                  }}
                  initialValue={showDetails}
                  textName={"reviews"}
                >
                  Ulasan
                </TextWithUnderscore>
              </div>
              <div className={"mt-8"}>
                {showDetails === "description" ? (
                  <p className={"text-gray-500 text-base text-justify"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus sed tortor cum pellentesque facilisi nec eget.
                  </p>
                ) : (
                  <p className={"text-gray-500 text-base text-justify"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className={"p-8 border border-gray-300 rounded-md"}>
            <div>
              <div>
                <MainPricing
                  promoPrice={"Rp500.000"}
                  actualPrice={"Rp1.500.000"}
                />
              </div>
              <div className={"mb-8"}>
                <SecondaryReview> 4.8/5 (24 Ulasan)</SecondaryReview>
              </div>
              <div>
                <MainBadge>Balinese Event</MainBadge>
              </div>
              <div className={"border-y border-gray-300 my-8"}>
                <TextWithIcon
                  mainClass="my-8"
                  imageClass="rounded-full"
                  icon={process.env.PUBLIC_URL + "/icons/mudah.png"}
                  label={
                    <div>
                      <div>
                        <span className={"font-medium text-base"}>
                          Exova Media
                        </span>
                      </div>
                      <div>
                        <Link
                          to={"../freelancers/abc"}
                          className={
                            "font-medium text-blue-500 hover:text-blue-600 duration-200 text-sm cursor-pointer"
                          }
                        >
                          Lihat detail profil
                        </Link>
                      </div>
                    </div>
                  }
                />
              </div>
              <div className={"mb-8"}>
                <h1 className={"text-xl font-medium"}>Cek ketersediaan</h1>
              </div>
              <div className={"mb-8 grid grid-cols-2 gap-2"}>
                <div>
                  <h1 className={"text-sm"}>Tanggal acara</h1>
                  <MainTextInput type={"date"} />
                </div>
                <div>
                  <h1 className={"text-sm"}>Seleai acara</h1>
                  <MainTextInput type={"date"} />
                </div>
              </div>
              <div>
                <MainButton className={"w-full"} label={"Chat Freelancer"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="md:flex gap-8">
            <div className="my-auto">
              <h1 className="font-medium text-2xl">
                Lainnya dari{" "}
                <span className={"text-blue-500"}>Exova Media</span>
              </h1>
            </div>
            <SecondaryButton label="Lihat semua" />
          </div>
          <div className={"mt-12"}>
            <MainProductList products={["", ""]} />
          </div>
        </div>
        <div className={"space-x-10 my-16 border-b"} />
        <div>
          <div className="md:flex gap-8">
            <div className="my-auto">
              <h1 className="font-medium text-2xl">Jasa terkait</h1>
            </div>
            <SecondaryButton label="Lihat semua" />
          </div>
          <div className={"mt-12"}>
            <MainProductList products={["", ""]} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default DetailProduct;
