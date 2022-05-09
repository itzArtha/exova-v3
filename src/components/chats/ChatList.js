import ChatBar from "./ChatBar";

const ChatList = ({ chats, selectedId }) => {
  const getAllChats = () => {
    return chats.map((chat, key) => (
      <ChatBar
        isLast={key === chats.length - 1}
        isSelected={selectedId === chat.channelId}
        chat={chat}
        key={key}
      />
    ));
  };

  return (
    <>
      <div className={"mb-24"}>{getAllChats()}</div>
    </>
  );
};
export default ChatList;
