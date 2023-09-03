import React from "react";
import {
  DocMessage,
  LinkMessage,
  MediaMessage,
  ReplyMessage,
  TextMessage,
  TimeLine,
} from "./MessageTypes";

export function ChatMessages({ showOptions= true, chatH }) {
  switch (chatH.type) {
    case "msg":
      switch (chatH.subtype) {
        case "img":
          return <MediaMessage showOptions={showOptions} chatH={chatH} />;
        case "doc":
          return <DocMessage showOptions={showOptions} chatH={chatH} />;
        case "link":
          return <LinkMessage showOptions={showOptions} chatH={chatH} />;
        case "reply":
          return <ReplyMessage showOptions={showOptions} chatH={chatH} />;
        default:
          return <TextMessage showOptions={showOptions} chatH={chatH} />;
      }
    case "divider":
      return <TimeLine showOptions={showOptions} chatH={chatH} />;

    default:
      console.warn("Not Found");
      break;
  }
}
