//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4";
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
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
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/085c4b1068f0f4f8db970.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVA2SU1QRGhiRzJBY2NEb2I0V0lQTnE2ZFQrLzZJU2RlbFhBVUdXWSsxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkhUTGU1Sm40TjFJbHlrVjZwZ2lua2kwNWJjZnNvcWtEdnluY3Y5VW1UST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RHpROWlqazIzVGxibzFoc3E3cTZJK08vTkNkUm03cWFuQm5SZE94dzJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvaHM2RGhEeTZJNFVMZGFkOFoxYnhjeUMwUjJORGpTWE0wbDU3aUc1ZlNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFRXk3S1VtZjNUaFF4cjVlS2psZXZYTGE1M3hlMitXSThGcW5hdFpPMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVjWmU0RGpyY0RqK1MvcU5lNkpXL01MNitLV09JT2NncWRBZ0hZQ2lVREk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01DUjRZS3Z0VzBhNFh3bzA3WXQ4T0cvU1BlT1pMV3RzNU05S2JQQ0dXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmtrU05PNkVteXFLZm1HWm95RHZLQmx6OWhha2N0dllaVUh4aFZ4M2x4UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtSK3pjZkhZeTZvUjlTY0FRZUVjWU9NT0ZEWU9oVkwwNDNBcDVuemJQWkJtYW1JL3NXUEtoeXBXLzcwL0dGZEM1cDYyV1dIVlowSUFqbVRSWWpZRUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJCbm1TVmlVQW1LVFZBcDgyRVY3a1hTTmxkYnZiZkFWdk9oVTFjR2VEelFVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0VFd5YldDUFRnT2pXS25ESnNVY0RnIiwicGhvbmVJZCI6IjRkOWY3ZDA0LTlkYmQtNDI4MS1hMTgyLWUzZGZhMGZjZDQ1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4V2YyS3A0S3RIVXJSbWVyanlxUWhPRXp4akU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVB6OWN6dlRwcWpHVDRHTlgxdDZoU1ZkazI4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllCSjdOVkVGIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODo2NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvJLiip/gvLrwnZm78J2ZvvCdmoTwnZm68J2agvCdmb7wnZm9IPCdmoTwnZqJ8J2ahPCdmbzwnZmw8J2ZuvCdmbjgvLviip/gvJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p6dCthTUZFT0dVNnJrR0dFTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Illqc0hITGRFRDVPY2lzSXhPNTZvQ1NQbHIwd2xyUFMyM2tna0hpN0ttMEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImMyZHg4Q2drVUFsNVd2Q2ZBZ1RlMVF2cGJneWV1b3JpZHdEL3d3NTJJVGNTYmVZeS9QeGxYQXJ2VUtiRllsUlFhcUdiWlBMSkc2MzR0eUJFaFFRN0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMamtzdVVkMmVkdlgvRjFOT1VRMURKVnBESGwva3VkTHBiNWxPUHNJaHdxWmR2YWhWblB1T0FrdG5xck9iTTJWdkRaeU9rbDQ5OTBMcEN5S1lnb1FEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyNTAyMzMxOTg4OjY2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldJN0J4eTNSQStUbklyQ01UdWVxQWtqNWE5TUphejB0dDVJSkI0dXlwdEIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE4ODk3NzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTzJsIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NARUTO-MD™`",
  author: process.env.PACK_AUTHER || "NARUTO-MD",
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
