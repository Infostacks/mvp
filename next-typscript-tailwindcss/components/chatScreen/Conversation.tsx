import React from "react";

const Conversation = () => {
  const conversationArray = [
    {
      name: "Madison Jones",
      lastMessage: "What time was our meet",
      time: "20m",
      userImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png",
      status: true,
      active: false,
    },
    {
      name: "Miguel Cohen",
      lastMessage: "Adaptogen taiyaki austin jean shorts brunch",
      time: "20m",
      userImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%2812%29.png",
      status: true,
      active: true,
    },
  ];

  return (
    <div className="conversation-area">
      {conversationArray.map((item, index) => {
        const { name, lastMessage, time, userImage, status, active } = item;
        return (
          <div
            className={`msg  ${status ? "online" : ""} ${
              active ? "active" : ""
            }`}
            key={index}
          >
            <img className="msg-profile" src={userImage} alt="Img" />
            <div className="msg-detail">
              <div className="msg-username">{name}</div>
              <div className="msg-content">
                <span className="msg-message">{lastMessage}</span>
                <span className="msg-date">{time}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Conversation;
