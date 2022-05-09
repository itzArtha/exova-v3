import MainTextInput from "../components/forms/MainTextInput";
import ChatList from "../components/chats/ChatList";
import { useHistory, useParams } from "react-router-dom";
import ChatAndOffer from "../components/chats/ChatAndOffer";
import { useCallback, useEffect, useState } from "react";

const Chat = () => {
  const { channelId } = useParams();
  const history = useHistory();
  const [searchChat, setSearchChat] = useState("");
  const [chatData, setChatData] = useState({
    channelId: "1",
    recipientId: "y-4-5-4",
    senderId: "x-ax-12-tha",
    recipientName: "Yusa",
    recipientProfilePicture:
      "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/yusa.jpeg",
    senderName: "Artha",
    senderProfilePicture:
      "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/artha.JPG",
    loginAs: "user",
    offerStatus: "offerCreated",
    chatLists: [
      {
        channelId: "1",
        recipientName: "Yusa",
        recipientProfilePicture:
          "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/yusa.jpeg",
        latestMessageBody: "Hello world!",
        latestMessageSentAt: "12 mins ago",
      },
      {
        channelId: "2",
        recipientName: "Mamet",
        recipientProfilePicture:
          "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/mamet.JPG",
        latestMessageBody: "Hello world!",
        latestMessageSentAt: "12 mins ago",
      },
    ],
    chatMessages: [
      {
        senderId: "x-ax-12-tha",
        senderProfilePicture:
          "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/artha.JPG",
        messageBody: "Hello world!",
        messageAttachments: null,
        sentAt: "2/2/2022 00:00",
      },
      {
        senderId: "y-4-5-4",
        senderProfilePicture:
          "https://assets-gerra.s3.ap-southeast-1.amazonaws.com/teams/yusa.jpeg",
        messageBody: "Hello world emot mebakti 2 btc x!",
        messageAttachments: null,
        sentAt: "2/2/2022 00:10",
      },
    ],
  });

  useEffect(() => {
    //
  }, [channelId]);

  const callbackMessage = useCallback(
    (message) => {
      handleSentMessage(message);
    },
    [channelId]
  );

  const handleSentMessage = (message) => {
    chatData.chatMessages.push(message);
    chatData.chatLists.map((channel, key) => {
      if (channelId === channel.channelId) {
        chatData.chatLists[key].latestMessageBody = message.messageBody;
      }
    });
    setChatData({ ...chatData });
  };

  const searchedChatList = chatData.chatLists.filter((recipient) => {
    return recipient.recipientName
      .toLowerCase()
      .includes(searchChat.toLowerCase());
  });

  return (
    <div className={"relative"}>
      <div className={"h-screen min-h-screen fixed w-full"}>
        <div className={"grid grid-cols-4"}>
          <div className={"w-full py-0.5 border-r border-gray-300 col-span-1"}>
            <div className={"flex"}>
              <div
                className={"p-4 cursor-pointer"}
                onClick={() => {
                  history.push("/");
                }}
              >
                <span>
                  <i className="fa-solid fa-house"></i>
                </span>
              </div>
              <div className={"text-center w-full pr-4"}>
                <MainTextInput
                  onChange={(e) => {
                    setSearchChat(e.target.value);
                  }}
                  placeholder={"Cari chat"}
                />
              </div>
            </div>
            <div
              className={
                "border-t border-gray-300 overflow-auto h-screen flex flex-col hide-scroll"
              }
            >
              <ChatList selectedId={channelId} chats={searchedChatList} />
            </div>
          </div>
          {channelId ? (
            <ChatAndOffer
              setCallbackMessage={callbackMessage}
              loginAs={chatData.loginAs}
              chatData={chatData}
              channelId={channelId}
            />
          ) : (
            <div className={"col-span-3"}>
              <div className={"mt-48"}>
                <img
                  className={"flex mx-auto w-1/3"}
                  src={process.env.PUBLIC_URL + "/icons/chat-empty.svg"}
                  alt={"Icon"}
                />
                <h1 className={"text-center p-8"}>
                  Pilih chat untuk memulai percakapan
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Chat;
