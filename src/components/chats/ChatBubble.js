const ChatBubble = ({ chatMessages, senderId }) => {
  return (
    <div className={"mb-48"}>
      {chatMessages.map((message, index) => (
        <div key={index} className="flex flex-col space-y-4 p-3">
          {message.senderId !== senderId && (
            <div className="chat-message recipient">
              <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                  <div>
                    <p className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                      {message.messageBody}
                    </p>
                  </div>
                </div>
                <img
                  src={message.senderProfilePicture}
                  alt={message.senderName}
                  className="w-6 h-6 rounded-full order-1"
                />
              </div>
            </div>
          )}
          {message.senderId === senderId && (
            <div className="chat-message sender">
              <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                  <div>
                    <p className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                      {message.messageBody}
                    </p>
                  </div>
                </div>
                <img
                  src={message.senderProfilePicture}
                  alt={message.senderName}
                  className="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ChatBubble;
