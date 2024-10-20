//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Loukson/NARUTO-MD";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dmKqfTP.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "22502331988";
global.owner = process.env.OWNER_NUMBER || "22502331988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://iili.io/dmKqfTP.jpg,https://telegra.ph/file/085c4b1068f0f4f8db970.mp4,https://iili.io/dbuMtaa.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xuWEFxMXVOeHJOWEY3RDBadzFEdk9BVzcrcml3NzFpU1VCWFpCYnduVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHhySlVyZTcvbUlhU1IwVElZZFovb2xlUXJlSHNSWk1VdTBUbVh0V2JTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SnJHZVJCbC9CVUtYVTl2aFlsV0hoblpQcmppZTRwT2o0dlRlWG5zYmxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJReEl5WE5tLzFpdWd0ckZmUXl6V3Jva1JWQ0tJOU5MbXp3YkJqMnJKdnlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldHSDVOTGx4L09UNmRrWGtUZzc3U0J0d2VlU1FESFpIWmxGUVZVeHl0WGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRqY0dtOEQ3aERXOGZmWUQ1dU5aVHgzK0FuL01TWWp3ejlZS0RjK2JEaVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT05Bbys3alRySDgvaVEybi9JV3k0Y3UydTkzbjhjLzBuZmVoVVBlTVFVTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJ6Nk0wN0dhbDZiV0l6RnQxcEJva2NPSXNhV1VaVlFLVHFtdmhLSGpnST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiWkY4bU5mNzlpOFo0b2xrUHBLeDZIVTFoZHdubUFxajRFcGh3c3FHSVpZTVZmNzF4TXhsYXYzMThORTY1d3Fzd0hXVDk2Z2dXV1NURUJoeVYwT2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJQU2M5bk8vN05kRmpCRWhXMlMwMXQ2WVNVT1VXNmhzTXdNT2F0c3FDcjJjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4SEh1VFlFSFRzNl8xNGVCNTFzTWRBIiwicGhvbmVJZCI6IjJhODEwNjk4LTVmMjYtNGU0Ni05OTJmLWIzMzUzODllNjk0ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1WDU2MEI4ZStza2RWNjl1VDErQ2ttc2IzeHM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3RsaENUeU9zYnJXVkxoWExKeGsyZ2JCWkNFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg4Q0xIMVQxIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODo2MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCM8J2Qq+KIhfCdlYPwnZWG8J2VjPCdlYLwnZWK8J2VhuKElSDwnZWM4oSk8J2VjPCdlYTwnZS48J2VgvCdlYAgIPCdlYvwnZS84oSC4oSNIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbnQrYU1GRVBQcnk3Z0dHRHNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZanNISExkRUQ1T2Npc0l4TzU2b0NTUGxyMHdsclBTMjNrZ2tIaTdLbTBFPSIsImFjY291bnRTaWduYXR1cmUiOiJnaWw1TU9OUlNEUVBKWUk2Z2dKcWdXeGFwRUxIV0k1RjhqTiswVWMzV0d5Z0cyMTA4SHk5bmxJckdUcmpDNDEzTXhBV1JZa3p2NEZnR1ZaVFBnOW5Ddz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidDhKd3hGL2RzcHRaS3NZUVp0dkN3WitQa1Q5T0s1QzJQQnQwNUxremFXM0hVQk81TG1XRFA2anAwU3crWENmVWlwcWtrOUl1NitobEJCcTF2cjVDakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjUwMjMzMTk4ODo2MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXSTdCeHkzUkErVG5JckNNVHVlcUFrajVhOU1KYXowdHQ1SUpCNHV5cHRCIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5Mjk1ODczLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhvQyJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NARUTO-MD™`",
  author: process.env.PACK_AUTHER || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname: process.env.BOT_NAME || "NARUTO-MD",
  ownername: process.env.OWNER_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
