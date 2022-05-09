import ChatBubble from "./ChatBubble";
import MainTextInput from "../forms/MainTextInput";
import MainButton from "../buttons/MainButton";
import TimelineWork from "./TimelineWork";
import { useCallback, useState } from "react";
import OfferContent from "../offers/OfferContent";
import DangerButton from "../buttons/DangerButton";
import MainModal from "../modals/MainModal";

const ChatAndOffer = ({ channelId, chatData, loginAs, setCallbackMessage }) => {
  const [offerModal, setOfferModal] = useState(false);
  const [cancelModal, setCancelModal] = useState(false);

  // OfferCreated, paymentCreated, workStarted, workFinished
  const [offerStatus, setOfferStatus] = useState(chatData.offerStatus);
  const [message, setMessage] = useState({
    senderId: chatData.senderId,
    senderProfilePicture: chatData.senderProfilePicture,
    channelId: channelId,
    messageBody: "",
    messageAttachments: null,
    sentAt: new Date().toDateString(),
  });

  const callbackSetPages = useCallback(
    (pagesCallback) => {
      setOfferModal(pagesCallback);
    },
    [offerModal]
  );

  const callbackSetOfferStatus = useCallback((status) => {
    setOfferStatus(status);
  }, []);

  const handleOfferModal = () => {
    setOfferModal(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.messageBody.length > 0) {
      setCallbackMessage(message);
      setMessage({ ...message, messageBody: "", messageAttachments: null });
    }
  };

  return (
    <>
      <div className={"flex w-full col-span-3"}>
        <OfferContent
          setOfferModal={callbackSetPages}
          offerModal={offerModal}
          setOfferStatus={callbackSetOfferStatus}
        />
        <div className={"w-3/4 py-2 border-b border-r border-gray-300"}>
          <div
            className={
              "text-center py-2 flex justify-center gap-2 cursor-pointer"
            }
          >
            <div className={"w-10 m-0.5 h-10"}>
              <img
                className={"w-full h-full rounded-full object-cover"}
                src={chatData.recipientProfilePicture}
                alt={chatData.recipientName}
              />
            </div>
            <div className={"my-auto"}>
              <span>{chatData.recipientName}</span>
            </div>
          </div>
          <div className={"relative w-full border-t border-gray-300"}>
            <div
              className={
                "overflow-auto h-screen hide-scroll flex-col-reverse flex"
              }
            >
              <ChatBubble
                chatMessages={chatData.chatMessages}
                senderId={chatData.senderId}
              />
            </div>
            <div className={"absolute w-full bottom-16 pb-4 bg-white px-2"}>
              <form onSubmit={handleSendMessage} method={"post"}>
                <div className={"flex"}>
                  <div className={"p-6 cursor-pointer"}>
                    <span>
                      <i className="fa-solid fa-paperclip"></i>
                    </span>
                  </div>
                  <div className={"w-full"}>
                    <MainTextInput
                      value={message.messageBody}
                      onChange={(e) => {
                        setMessage({ ...message, messageBody: e.target.value });
                      }}
                      placeholder={"Hi"}
                    />
                  </div>
                  <div className={"p-6 cursor-pointer"}>
                    <button type={"submit"}>
                      <i className="fa-solid fa-paper-plane text-blue-500"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={"w-2/5 py-3"}>
          <div className={"text-center py-4"}>Status order</div>
          <div
            className={
              "p-4 overflow-auto h-screen flex flex-col hide-scroll border-t border-gray-300"
            }
          >
            <div className={"text-left"}>
              <span>Diskusikan ruang lingkup pekerjaan Kamu</span>
              <p className={"text-xs text-gray-500 mt-2 leading-normal"}>
                Cara bekerja:
                <br />
                1. Freelancer membuat penawaran kerja
                <br />
                2. Tunggu pemberi kerja melakukan pembayaran di fastwork
                <br />
                3. Freelancer mulai bekerja
                <br />
                4. Kirimkan hasil kerja akhir
                <br />
                5. Freelancer akan menerima pembayaran setelah pemberi kerja
                menyetujui hasil kerja akhir
              </p>
            </div>
            <div className={"mt-8"}>
              <MainButton
                className={"w-full"}
                label={"Lihat History Transaksi"}
              />
            </div>
            {offerStatus === "notCreated" && loginAs === "freelancer" ? (
              <div className={"mt-8"}>
                <div className={"mb-2"}>
                  <MainButton
                    onClick={() => {
                      handleOfferModal();
                    }}
                    className={"w-full"}
                    label={"Buat penawaran"}
                  />
                </div>
              </div>
            ) : null}
            {offerStatus === "notCreated" ? (
              <div className={"mt-24"}>
                <img
                  className={"w-48 mx-auto"}
                  src={process.env.PUBLIC_URL + "/icons/chat-empty.svg"}
                  alt={"Icon"}
                />
                <p className={"text-center mt-4 text-sm"}>
                  Tunggu sampe freelancer buat penawaran, baru timeline kerja
                  mau keliatan
                </p>
              </div>
            ) : (
              <div className={"my-12"}>
                <TimelineWork loginAs={loginAs} offerStatus={offerStatus} />
              </div>
            )}
            {offerStatus !== "notCreated" ? (
              <div>
                <DangerButton
                  onClick={() => {
                    setCancelModal(true);
                  }}
                  className={"w-full mt-8 mb-20"}
                  label={"Batalkan"}
                />
                <MainModal
                  onClick={() => {
                    // Logic update status to canceled & reset offer status to notCreated
                    setOfferStatus("notCreated");
                  }}
                  buttonLabel={"Y serius anj"}
                  showModal={cancelModal}
                  title={"Yah sedih..."}
                  handleClose={() => {
                    setCancelModal(false);
                  }}
                >
                  Serius mau batalin? nanti dana yang udah masuk akan direfund
                  ke pembeli
                </MainModal>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatAndOffer;
