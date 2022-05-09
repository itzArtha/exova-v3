import Layout from "../layouts/Layout";

const AboutUs = () => {
  const founders = () => {
    const FOUNDERS = [
      {
        name: "Artha",
        avatar:
          "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/artha.JPG",
      },
      {
        name: "Krisna",
        avatar:
          "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/krisna.jpeg",
      },
      {
        name: "Yusa",
        avatar:
          "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/yusa.jpeg",
      },
      {
        name: "Mamet",
        avatar:
          "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/mamet.JPG",
      },
    ];

    return FOUNDERS.map((founder, key) => (
      <div>
        <img
          className={"h-72 w-full object-cover"}
          src={founder.avatar}
          alt={founder.name}
        />
      </div>
    ));
  };

  return (
    <Layout>
      <div className={"mx-24"}>
        <div className={"mx-32"}>
          <h2 className={"font-base text-4xl text-center leading-normal"}>
            Kami menyediakan jasa dokumentasi{" "}
            <span className={"text-blue-500"}>terbaik</span> yang{" "}
            <span className={"text-blue-500"}>tidak akan </span>
            mengecewakan Anda
          </h2>
        </div>
        <div className={"mt-24"}>
          <img
            className={"mx-auto w-full"}
            src={process.env.PUBLIC_URL + "/founders/bertiga.png"}
          />
        </div>
        <div className={"mt-24"}>
          <h2 className={"text-center font-medium text-xl"}>Cerita Exova</h2>
          <div className={"grid grid-cols-2 gap-16 mt-12"}>
            <div>
              <img src={process.env.PUBLIC_URL + "/founders/duo.png"} />
            </div>
            <div>
              <p className={"font-normal text-gray-500"}>
                Sejarah Exova bermula ketika sang founder "Artha" ingin
                membangun sebuah perusahaan e-commerce. Dia memang sangat
                bertekad sekali, Tekad yang sudah bulat ingin membangun
                perusahaan yang sukses muncul ketika ia sakit hati karena harus
                berpisah tanpa alasan yang jelas dengan pacarnya saat masih di
                bangku SMA. Setelah itu, dia belajar dan belajar giat tentang
                dunia teknologi & programming. Tak lama belajar, dia pun merilis
                layanannya yang dia beri nama "curhatskuy" sebuah platform untuk
                saling bertukar cerita masalah asmara. Namun, setelah update
                versi 2.0, dia memberhentikan layanannya karena ingin serius
                membangun perusahaan. <br /> <br /> Lantas, dalam perjalanannya
                membangun exova ini, dia mengajak sang co-founder "Ngurah
                Krisna" untuk bergabung. Dikala itu nama Exova masih "Kayana
                Entertainment", karena memang awalnya mereka ingin membuat
                sebuah game. Bahkan sudah seperempat perjalanan, namun akhirnya
                produksi game berhenti dan mulai serius membangun “Platform
                Penyedia Jasa Online” yang akhirnya mereka beri nama Exova. Nama
                Exova pun diambil dari kisah 2 founder yang lumayan mirip. Di
                mana mereka berdua sama ditinggal pacarnya, yang mana disini
                diambil kata mantan atau dalam bahasa inggrisnya (EX) lalu
                mereka bertekad bulat (O) untuk menyukseskan (VA) atau
                kepanjangannya Virtual Arts jika digabungkan semua jadilah nama
                Exova.
              </p>
            </div>
          </div>
        </div>
        <div className={"mt-24"}>
          <h2 className={"font-base text-4xl text-left leading-normal"}>
            "Make a better place for{" "}
            <span className={"text-blue-500"}>photographer, videographer</span>{" "}
            and their
            <span className={"text-blue-500"}> ecosystem</span>"
          </h2>
          <p className={"text-lg text-gray-500 mt-8"}>- Exova</p>
        </div>
        <div className={"grid grid-cols-4 gap-2 mt-24"}>{founders()}</div>
      </div>
    </Layout>
  );
};
export default AboutUs;
