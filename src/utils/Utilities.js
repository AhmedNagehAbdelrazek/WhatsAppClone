export const browserName = function () {
  const agent = window.navigator.userAgent.toLowerCase();
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "MS Edge";
    case agent.indexOf("edg/") > -1:
      return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr:
      return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome:
      return "Chrome";
    case agent.indexOf("trident") > -1:
      return "MS IE";
    case agent.indexOf("firefox") > -1:
      return "Firefox";
    case agent.indexOf("safari") > -1:
      return "Safari";
    default:
      return "other";
  }
};
export function GetPathValue(path){
  switch (true) {
    case path.indexOf("chats") > -1:
    case path.indexOf("app") > -1:
      return 0;
    case path.indexOf("group") > -1:
      return 1;
    case path.indexOf("call") > -1 :
      return 2;
    case path.indexOf("settings") > -1 :
      return 3;
    default:
      return -1;
  }
}