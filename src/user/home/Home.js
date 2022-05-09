import Layout from "../../components/layouts/Layout";
import MainTextInput from "../../components/forms/MainTextInput";
import TextWithIcon from "../../components/badges/TextWithIcon";
import MainButton from "../../components/buttons/MainButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import MainProductList from "../../components/products/MainProductList";
import MainReviewList from "../../components/reviews/MainReviewList";
import PartnerList from "../../components/partners/PartnerList";
import MainCategoryList from "../../components/categories/MainCategoryList";

const Home = () => {
  return (
    <Layout selectedNavLink={"beranda"}>
      <div className="md:ml-32">
        <div className={"grid grid-cols-1 md:grid-cols-5 md:gap-2"}>
          <div className={"block md:hidden"}>
            <img
              className={"h-full w-full object-cover"}
              alt={"Header Banner"}
              src={
                "https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              }
            />
          </div>
          <div className={"mt-8 md:mt-24 col-span-2"}>
            <h1 className={"font-semibold text-3xl md:text-4xl leading-snug"}>
              Take your <span className={"text-blue-500"}>moment</span> and{" "}
              <span className={"text-blue-500"}>vacation</span> in Bali!
            </h1>
            <h1 className={"font-normal text-md text-gray-500 mt-3"}>
              Dokumentasikan liburan, kegiatan, dan acaramu bersama kami.
            </h1>
            <div className="hidden md:block">
              <div className={"grid grid-cols-2 gap-4 my-8"}>
                <TextWithIcon
                  mainClass="my-8"
                  imageClass="rounded-full"
                  icon={process.env.PUBLIC_URL + "/icons/cam.png"}
                  label="56+ jasa vidio/foto"
                />
                <TextWithIcon
                  mainClass="my-8"
                  imageClass="rounded-full"
                  icon={process.env.PUBLIC_URL + "/icons/freelance.png"}
                  label="37+ freelancer di Bali"
                />
              </div>
            </div>
            <div className={"mt-8 md:mt-0"}>
              <h1 className={"font-medium text-md mt-3"}>
                Cari nama kegiatan atau freelancer
              </h1>
              <div className="md:w-11/12 w-full">
                <MainTextInput placeholder={"Cari videografer wedding..."} />
              </div>
              <h1 className={"font-medium text-xs text-gray-500 mt-3"}>
                Pencarian terpopuler: Pernikahan, Liburan, Metatah
              </h1>
            </div>
            <div
              className={
                "md:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mt-12"
              }
            >
              <TextWithIcon
                mainClass="my-2"
                imageClass="rounded-lg"
                icon={process.env.PUBLIC_URL + "/icons/cam.png"}
                label="Jasa"
              />
              <TextWithIcon
                mainClass="my-2"
                imageClass="rounded-lg"
                icon={process.env.PUBLIC_URL + "/icons/freelance.png"}
                label="Freelancer"
              />
            </div>
          </div>
          <div className={"md:col-span-3 hidden md:block"}>
            <img
              className={"h-full object-cover"}
              alt={"Header Banner"}
              src={
                "https://images.unsplash.com/photo-1543257605-7f1c6ed9fe40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              }
            />
          </div>
        </div>
      </div>
      <div className={"md:container md:mx-auto mx-4"}>
        <div className={"md:mt-32 mt-20"}>
          <h1 className={"font-medium text-3xl"}>Kategori Exova</h1>
          <h1 className={"font-medium text-md text-gray-500 mt-2"}>
            Beberapa kategori dari Exova yang bisa kamu pilih!
          </h1>
          <div>
            <MainCategoryList categories={["", "", "", ""]} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:my-48 my-24 md:mx-24">
          <div className="md:mr-auto hidden md:block">
            <div>
              <div className="absolute">
                <div className="mt-6 ml-36 ">
                  <TextWithIcon
                    mainClass="bg-white p-2 shadow rounded-lg my-2"
                    imageClass="rounded-lg"
                    icon={process.env.PUBLIC_URL + "/icons/freelance-blue.png"}
                    label="37+ freelancer di Bali"
                  />
                </div>
              </div>
              <div className="absolute">
                <div className="ml-48 mt-24">
                  <TextWithIcon
                    mainClass="bg-white p-2 shadow rounded-lg my-2"
                    imageClass="rounded-lg"
                    icon={process.env.PUBLIC_URL + "/icons/cam-blue.png"}
                    label="56+ jasa vidio/foto"
                  />
                </div>
              </div>
              <img
                className="w-4/6 h-72 object-cover"
                src={
                  "https://www.exova.id/storage/users/231/products/61f3fafdc983c/1280/1643380250-54.jpg"
                }
                alt="Image"
              />
            </div>
          </div>
          <div>
            <h1 className="font-medium text-2xl">
              Mengapa menggunakan jasa{" "}
              <span className="text-blue-500"> Exova?</span>
            </h1>
            <p className={"font-normal text-md text-gray-500 mt-3"}>
              Kami akan memberikan yang terbaik dan tidak akan mengecewakan
              anda.
            </p>
            <div className="mt-12 p-2">
              <TextWithIcon
                mainClass="my-8"
                imageClass="rounded-lg"
                icon={process.env.PUBLIC_URL + "/icons/mudah.png"}
                label="Mudah mencari vidio/fotografer"
              />
              <TextWithIcon
                mainClass="my-8"
                imageClass="rounded-lg"
                icon={process.env.PUBLIC_URL + "/icons/bebas.png"}
                label="Bebas memilih vidio/fotografer"
              />
              <TextWithIcon
                mainClass="my-8"
                imageClass="rounded-lg"
                icon={process.env.PUBLIC_URL + "/icons/nego.png"}
                label="Nego harga sesuka hati"
              />
              <TextWithIcon
                mainClass="my-6"
                imageClass="rounded-lg"
                icon={process.env.PUBLIC_URL + "/icons/pembayaran.png"}
                label="Pembayaran mudah dan praktis"
              />
            </div>
            <div className="bg-blue-500 p-2 w-max rounded-lg">
              <TextWithIcon
                textClass="text-white"
                mainClass="bg-blue-500"
                imageClass="rounded-lg"
                icon={process.env.PUBLIC_URL + "/icons/bisa.png"}
                label="Bisa jual jasa skill vidio/foto kamu!"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="md:flex gap-8">
            <div className="my-auto">
              <h1 className="font-medium text-2xl">
                Jelajahi jasa atau freelancer kami
              </h1>
            </div>
            <SecondaryButton label="Lihat semua" />
          </div>
          <div className={"mt-12"}>
            <MainProductList products={[""]} />
          </div>
        </div>
        <div className="mt-20">
          <div className="my-auto text-center">
            <h1 className="font-medium text-2xl">Apa kata mereka?</h1>
          </div>
          <div className="overflow-x-auto overscroll-contain mt-4 hide-scroll">
            <div className="webkit-inline-box flex grid-cols-2 gap-2">
              <MainReviewList reviews={["", "", ""]} />
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="my-auto text-center">
            <h1 className="font-medium text-2xl">Support and Partners</h1>
          </div>
          <div className="overflow-x-auto overscroll-contain mt-12">
            <div className="webkit-inline-box flex grid-cols-2 gap-2">
              <PartnerList
                partnersLogo={[
                  "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/logo/2020/09/01/7379dfd8-c9cc-4fb9-896f-6374a766cefc-1598927204969-fab786a46eee63c306f89837093520a4.png",
                  "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/logo/2020/09/01/7379dfd8-c9cc-4fb9-896f-6374a766cefc-1598927204969-fab786a46eee63c306f89837093520a4.png",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="mt-32 md:mx-24">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-20">
            <div className="hidden md:block">
              <img
                className="object-cover w-full h-96"
                src="https://www.exova.id/storage/users/231/products/61f3fafdc983c/1280/1643380250-54.jpg"
                alt="Image"
              />
            </div>
            <div>
              <div>
                <TextWithIcon
                  textClass="text-black"
                  mainClass="my-2"
                  imageClass="rounded-full"
                  icon={process.env.PUBLIC_URL + "/icons/question.png"}
                  label="Punya keahlian dibidang foto/vidio?"
                />
                <TextWithIcon
                  textClass="text-black"
                  mainClass="my-2"
                  imageClass="rounded-full"
                  icon={process.env.PUBLIC_URL + "/icons/question.png"}
                  label="Bingung nyari klien?"
                />
              </div>
              <div className="mt-8">
                <h1 className="font-medium text-2xl">
                  Bergabung bersama <span className="text-blue-500">Exova</span>{" "}
                  dan jual jasa terbaikmu!
                </h1>
                <div className="mt-12">
                  <MainButton
                    className="w-max px-4"
                    label="Daftar menjadi freelancer sekarang"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-48 hidden md:block">
            <div className="absolute right-48 mt-56 grid grid-cols-2">
              <div>
                <span></span>
              </div>
              <h1 className="font-medium text-right text-3xl text-white">
                Dapatkan informasi terbaru dan penawaran spesial dari Kami!
              </h1>
            </div>
            <img
              className="w-full"
              src={process.env.PUBLIC_URL + "/banners/banner-footer.png"}
              alt={"Banner footer"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
