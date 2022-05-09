import Layout from "../../components/layouts/Layout";
import Breadcumb from "../../components/layouts/Breadcumb";
import MainTextInput from "../../components/forms/MainTextInput";
import MainProductList from "../../components/products/MainProductList";
import MainSelectInput from "../../components/forms/MainSelectInput";
import { useState } from "react";
import MainFreelancerList from "../../components/freelancers/MainFreelancerList";

const Products = () => {
  const [selectedType, setType] = useState("jasa");
  const [selectedCategory, setCategory] = useState("all-category");

  const breadcrumbs = [
    {
      label: "Jasa / freelancer",
      link: "./",
    },
  ];
  return (
    <Layout selectedNavLink={"products"} className={"md:mx-24"}>
      <Breadcumb labels={breadcrumbs} />
      <div className={"mx-auto text-center mt-12"}>
        <h2 className={"font-medium text-lg"}>
          Cari nama kegiatan atau nama freelancer sesuai keinginanmu
        </h2>
        <div className={"mt-6 mx-auto w-1/3"}>
          <MainTextInput placeholder={"Contoh: Metatah, Prewedding, etc "} />
        </div>
      </div>
      <div className={"my-10"} />
      <div className={"flex justify-between"}>
        <div className={"my-auto"}>
          <h2 className={"font-medium text-2xl"}>Jasa atau freelancer</h2>
        </div>
        <div className={"flex gap-4"}>
          <div>
            <MainSelectInput
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option value={"jasa"}>Jasa</option>
              <option value={"freelancer"}>Freelancer</option>
            </MainSelectInput>
          </div>
          <div>
            <MainSelectInput
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value={"all-category"}>Semua Kategori</option>
              <option value={"praweding"}>Prawedding</option>
            </MainSelectInput>
          </div>
        </div>
      </div>
      <div className={"mt-8"}>
        {selectedType === "jasa" ? (
          <MainProductList products={["", ""]} />
        ) : (
          <MainFreelancerList freelancers={["", ""]} />
        )}
      </div>
    </Layout>
  );
};
export default Products;
