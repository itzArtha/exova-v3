import { useHistory } from "react-router-dom";

const ChatBar = ({ chat, isLast, isSelected }) => {
  const history = useHistory();
  return (
    <>
      <div
        onClick={() => {
          history.push(`${chat.channelId}`);
        }}
        className={`grid grid-cols-5 gap-4 px-2 py-3 cursor-pointer hover:bg-gray-100 w-full ${
          isSelected ? "bg-gray-100" : null
        } duration-500 ${isLast ? null : "border-b border-gray-100"}`}
      >
        <div className={"w-16 h-16 col-span-1"}>
          <img
            className={"w-full h-full rounded-full object-cover"}
            src={chat.recipientProfilePicture}
            alt={chat.recipientName}
          />
        </div>
        <div className={"my-auto col-span-4"}>
          <div className={"flex justify-between"}>
            <div>
              <span>{chat.recipientName}</span>
            </div>
            <div>
              <span className={"text-xs text-gray-400"}>
                {chat.latestMessageSentAt}
              </span>
            </div>
          </div>
          <p className={"text-gray-500 text-sm mt-1"}>
            {chat.latestMessageBody}
          </p>
        </div>
      </div>
    </>
  );
};
export default ChatBar;
