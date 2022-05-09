import Stars from "../reviews/Stars";
import MainButton from "../buttons/MainButton";
import { useCallback, useEffect, useState } from "react";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import MainTextInput from "../forms/MainTextInput";
import MainTextArea from "../forms/MainTextArea";
import MainRatingList from "../reviews/MainRatingList";

const TimelineWork = ({ offerStatus, loginAs }) => {
  const [isUploadFileOrLink, setUploadFileOrLink] = useState("files");
  const [files, setFiles] = useState([]);
  const [workReview, setWorkReview] = useState({
    stars: "",
    starsErrorMsg: "",
    reviewBody: "",
    reviewBodyErrorMsg: "",
  });

  const setWorkReviewCallback = useCallback(
    (callbackData) => {
      setWorkReview({ ...workReview, stars: callbackData.stars });
    },
    [workReview]
  );

  useEffect(() => {
    const snapSrcUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = "your-client-key-goes-here";
    const script = document.createElement("script");
    script.src = snapSrcUrl;
    script.setAttribute("data-client-key", myMidtransClientKey);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmitReview = () => {
    if (workReview.reviewBody && workReview.stars) {
      console.log(workReview);
    } else if (!workReview.reviewBody) {
      setWorkReview({
        ...workReview,
        reviewBodyErrorMsg: "Review tidak boleh kosong",
      });
    } else if (!workReview.stars) {
      setWorkReview({
        ...workReview,
        starsErrorMsg: "Penilaian tidak boleh kosong",
      });
    }
  };

  const handlePayment = () => {
    window.snap.pay("16511533644");
  };

  return (
    <>
      <ol className="ml-4 relative border-l border-gray-200">
        {/*Order Created Start*/}
        {(offerStatus === "offerCreated" ||
          offerStatus === "paymentCreated" ||
          offerStatus === "workStarted" ||
          offerStatus === "workFinished") && (
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                className="w-3 h-3 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-base font-normal">
              Order dibuat
            </h3>
            <span className="block mb-2 text-xs font-normal leading-none text-gray-400">
              January 13th, 2022
            </span>
            <p className="my-4 text-sm font-normal text-gray-400">
              Menjadi videografer jav
            </p>
          </li>
        )}
        {/*Order Created End*/}
        {/*Payment Start*/}
        {(offerStatus === "paymentCreated" ||
          offerStatus === "offerCreated" ||
          offerStatus === "workStarted" ||
          offerStatus === "workFinished") && (
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                className="w-3 h-3 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-base font-normal">
              Pembayaran
            </h3>
            {offerStatus !== "offerCreated" ? (
              <span className="block mb-2 text-xs font-normal leading-none text-gray-400">
                January 14th, 2022
              </span>
            ) : null}
            <p className="my-4 text-sm font-normal text-gray-400">
              {offerStatus === "offerCreated"
                ? "Menunggu pembayaran sebesar Rp200.000"
                : "Telah dibayarkan sebesar Rp200.000 melalui BANK BNI"}
            </p>
            {offerStatus === "offerCreated" && loginAs === "user" ? (
              <div className={"mt-2"}>
                <div className={"mb-2"}>
                  <MainButton
                    onClick={() => {
                      handlePayment();
                    }}
                    className={"w-full"}
                    label={"Bayar"}
                  />
                </div>
              </div>
            ) : null}
          </li>
        )}
        {/*Payment End*/}
        {/*Work Start*/}
        {(offerStatus === "workStarted" ||
          offerStatus === "paymentCreated" ||
          offerStatus === "workFinished") && (
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                className="w-3 h-3 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-base font-normal">
              Bekerja
            </h3>
            <span className="block mb-2 text-xs font-normal leading-none text-gray-400">
              January 14th, 2022
            </span>
            {loginAs === "freelancer" ? (
              <div className={"my-4"}>
                <p className="text-sm font-normal text-gray-400">
                  Kirim pekerjaan:
                </p>
                <div className={"flex justify-center gap-2 my-2"}>
                  <MainButton
                    disabled={isUploadFileOrLink === "links"}
                    onClick={() => {
                      setUploadFileOrLink("links");
                    }}
                    label={"Kirim Link"}
                  />
                  <MainButton
                    disabled={isUploadFileOrLink === "files"}
                    onClick={() => {
                      setUploadFileOrLink("files");
                    }}
                    label={"Upload File"}
                  />
                </div>
                {isUploadFileOrLink === "files" ? (
                  <div>
                    <FilePond
                      files={files}
                      onupdatefiles={setFiles}
                      allowMultiple={true}
                      maxFiles={3}
                      server="/api"
                      name="files"
                      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                    />
                  </div>
                ) : (
                  <div className={"flex gap-2"}>
                    <div className={"w-full"}>
                      <MainTextInput placeholder={"Link"} />
                    </div>
                    <div className={"p-6 cursor-pointer"}>
                      <span>
                        <i className="fa-solid fa-paper-plane text-blue-500"></i>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : null}
            <div className={"my-4"}>
              <p className="text-sm font-normal text-gray-400">
                Hasil pekerjaan:
              </p>
              <a href={"/"} target={"_blank"} className={"text-blue-500"}>
                https://www.pornhub.com
              </a>
            </div>
          </li>
        )}
        {/*Work End*/}
        {/*Finish Start*/}
        {offerStatus === "workFinished" && (
          <li className="mb-10 ml-6">
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <svg
                className="w-3 h-3 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-base font-normal">
              Selesai
            </h3>
            <span className="block mb-2 text-xs font-normal leading-none text-gray-400">
              January 16th, 2022
            </span>
            <div className={"my-4"}>
              <div>
                <Stars starsTotal={5} />
              </div>
              <p className="text-sm font-normal text-gray-400">Keren mantep</p>
            </div>
            <MainRatingList
              errorMsg={workReview.starsErrorMsg}
              setWorkReview={setWorkReviewCallback}
              label={"Berikan Penilaian"}
            />
            {loginAs === "user" ? (
              <div className={"my-4"}>
                <MainTextArea
                  errorMsg={workReview.reviewBodyErrorMsg}
                  value={workReview.reviewBody}
                  onChange={(e) => {
                    setWorkReview({
                      ...workReview,
                      reviewBody: e.target.value,
                      reviewBodyErrorMsg: "",
                    });
                  }}
                  placeholder={"Not bad..."}
                  label={"Berikan ulasan"}
                />
                <MainButton
                  onClick={() => {
                    handleSubmitReview();
                  }}
                  className={"w-full"}
                  label={"Kirim Ulasan"}
                />
              </div>
            ) : null}
          </li>
        )}
        {/*Finish End*/}
      </ol>
    </>
  );
};
export default TimelineWork;
