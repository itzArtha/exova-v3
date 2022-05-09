import PricingOffer from "./PricingOffer";
import DescriptionOffer from "./DescriptionOffer";
import ResultOffer from "./ResultOffer";
import SentOffer from "./SentOffer";
import CompleteOffer from "./CompleteOffer";
import OfferModal from "../modals/OfferModal";
import { useCallback, useState } from "react";
import MenuOffer from "./MenuOffer";

const OfferContent = ({ offerModal, setOfferModal, setOfferStatus }) => {
  const [pages, setPages] = useState("price");
  const [offerDetail, setOfferDetail] = useState({
    projectName: "",
    projectNameErrorMsg: "",
    projectDescription: "",
    projectDescriptionErrorMsg: "",
    maximumRevision: 0,
    projectPrice: "",
    projectPriceErrorMsg: "",
    projectResult: "",
    projectStartAt: "",
    projectStartAtErrorMsg: "",
    projectEndAtErrorMsg: "",
    projectEndAt: "",
    sent: "",
  });

  const setPriceCallback = useCallback(
    (value) => {
      setOfferDetail({
        ...offerDetail,
        projectPrice: value.projectPrice,
        projectPriceErrorMsg: "",
      });
    },
    [offerDetail]
  );

  const setDescriptionCallback = useCallback(
    (value) => {
      setOfferDetail({
        ...offerDetail,
        projectDescription: value.projectDescription,
        projectDescriptionErrorMsg: "",
      });
    },
    [offerDetail]
  );

  const setNameCallback = useCallback(
    (value) => {
      setOfferDetail({
        ...offerDetail,
        projectName: value.projectName,
        projectNameErrorMsg: "",
      });
    },
    [offerDetail]
  );

  const setRevisionCallback = useCallback(
    (value) => {
      setOfferDetail({
        ...offerDetail,
        maximumRevision: value.maximumRevision,
      });
    },
    [offerDetail]
  );

  const setStartAtCallback = useCallback(
    (value) => {
      setOfferDetail({
        ...offerDetail,
        projectStartAt: value.projectStartAt,
        projectStartAtErrorMsg: "",
      });
    },
    [offerDetail]
  );

  const setEndAtCallback = useCallback(
    (value) => {
      setOfferDetail({
        ...offerDetail,
        projectEndAt: value.projectEndAt,
        projectEndAtErrorMsg: "",
      });
    },
    [offerDetail]
  );

  const handleNextPage = () => {
    if (pages === "price" && offerDetail.projectPrice === "") {
      setOfferDetail({
        ...offerDetail,
        projectPriceErrorMsg: "Harga gak boleh kosong!",
      });
      return false;
    } else if (pages === "description" && offerDetail.projectName === "") {
      setOfferDetail({
        ...offerDetail,
        projectNameErrorMsg: "Nama proyek gak boleh kosong!",
      });
      return false;
    } else if (
      pages === "description" &&
      offerDetail.projectDescription === ""
    ) {
      setOfferDetail({
        ...offerDetail,
        projectDescriptionErrorMsg: "Deskripsi proyek gak boleh kosong!",
      });
      return false;
    } else if (pages === "result" && offerDetail.projectStartAt === "") {
      setOfferDetail({
        ...offerDetail,
        projectStartAtErrorMsg: "Tanggal mulai proyek gak boleh kosong!",
      });
      return false;
    } else if (pages === "result" && offerDetail.projectEndAt === "") {
      setOfferDetail({
        ...offerDetail,
        projectEndAtErrorMsg: "Tanggal berakhir proyek gak boleh kosong!",
      });
      return false;
    } else if (pages === "complete") {
      // Handle send to API logic
    }
    setPages(
      getPages().nextPage === "" ? handleBackToChat() : getPages().nextPage
    );
  };

  const getPages = () => {
    switch (pages) {
      case "price":
        return {
          component: (
            <PricingOffer
              offerDetail={offerDetail}
              setPriceCallback={setPriceCallback}
            />
          ),
          nextPage: "description",
          previousPage: "",
          buttonLabel: "Selanjutnya",
        };
      case "description":
        return {
          component: (
            <DescriptionOffer
              setDescriptionCallback={setDescriptionCallback}
              setNameCallback={setNameCallback}
              setRevisionCallback={setRevisionCallback}
              offerDetail={offerDetail}
            />
          ),
          nextPage: "result",
          previousPage: "price",
          buttonLabel: "Selanjutnya",
        };
      case "result":
        return {
          component: (
            <ResultOffer
              offerDetail={offerDetail}
              setEndAtCallback={setEndAtCallback}
              setStartAtCallback={setStartAtCallback}
            />
          ),
          nextPage: "sent",
          previousPage: "description",
          buttonLabel: "Selanjutnya",
        };
      case "sent":
        return {
          component: <SentOffer offerDetail={offerDetail} />,
          nextPage: "complete",
          previousPage: "result",
          buttonLabel: "Kirim",
        };
      case "complete":
        return {
          component: <CompleteOffer />,
          nextPage: "",
          previousPage: "",
          buttonLabel: "Kembali ke Chat",
        };
      default:
        return "Error";
    }
  };

  const handleBackToChat = () => {
    setPages("price");
    setOfferModal(false);
    setOfferStatus("offerCreated");
  };

  return (
    <div>
      <OfferModal
        onClick={() => {
          handleNextPage();
        }}
        buttonLabel={getPages().buttonLabel}
        title={"Penawaran kerja"}
        showModal={offerModal}
        backTo={getPages().previousPage}
        onBackButton={() => {
          setPages(getPages().previousPage);
        }}
        handleClose={() => {
          setOfferModal(false);
        }}
      >
        {pages === "complete" ? null : <MenuOffer pages={pages} />}
        <div className={"content"}>{getPages().component}</div>
      </OfferModal>
    </div>
  );
};
export default OfferContent;
