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
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "2348059540212";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dLTXlBOUVqSEZrcWkzbDhHaTQvWXY1TmVBU01zTERQWXdKUyt0Q2gwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXk2bEdxRVVVNVRoU21neGVscnVyRDNkKzlEaGhDeEpIMHJjR3dsNHRpMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTUwyTk1MTkpGMVVPTGRSNzgyZzNDdmJzeDI0RjRXWDVubGQzNkJSNlc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhNjVQMC93alhSS2FIREY1MzRGQTdSQ3BhTU9tWVFPRll1WFhjL1AyMXhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLQjU0Y1Y2Qzd4VGluWDFqejVvSTY3SWdKOTNLT3ZLMVlhNys4WkJqRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhzdlNHZUJtM1QrWXN0bEZCc2l2dDJVMlNUVk5rSjZqNElZMzYxRGYxZ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUExYkxCQkZ3a2QrZ1Z4cytualNPVGhLUTFtd2MwSXdDK25NQUI4RmFYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEl4aVVMSGRTSHIrRkFlYkZNT1lycitVOFdOaXZkWlNyTWFCNTlSUnRGUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlqNU42aGNiNGdhdEh0WWN3OUVTdHRNcUQ0VUN6NGVlVmR0U2FNRkNGTkozQ1dLNm53SEd0OFl6UHQrZE91UlV4WlhvVVVyV0RvMFhYdkFLU2ZLaGhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQxLCJhZHZTZWNyZXRLZXkiOiIza0pWb3FCZ3l3eTB2UzA1ZGtGNjhUblk3K1hNYjU5MFBGeER3cmtUbVRzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzeGlsNmh4U1FwMlVtNk9DZHFFblNBIiwicGhvbmVJZCI6IjY0NDYzYjc4LWUyOTctNDc3NS1iZDBhLWJiYjhjYTE0ZjM1YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiTEFPR2x4eUM3bS92anE3R2VFak9RVlRWK3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3J1eC9rS1VFQ0x2SW84N2ZUcDZBMlVKWTI0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldaMkFKQVc0IiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODozN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkM0ZzdNSEVNT0tscmNHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXhkODJIMkdSV3czUGFyRk1wYlNINkw4NGJZOVZlK2cxZjQzZnFVMHdSZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWmREaDYwejBOM0M3bXVXeCtGQXJkZCtjVngvWTJCbEZybnp6bFRLRXFHWVBBRGk3TGJDc1NDeWd1bUZVNkxFd3lBZ3g4cEsxSkI2M3d2UTcwSnlQQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkFWdUhSalNVdDFuMFhvN0xwc1BKNGM1NE1OVXBrUmxCRzhDdFh0NmR3ZGt5cStoQVFkM2RkVTc2d05wRENkbVVEYjQ1QjlLOThaRGlsZWJabzd2dWlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1MDIzMzE5ODg6MzdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk1YZk5oOWhrVnNOejJxeFRLVzBoK2kvT0cyUFZYdm9OWCtOMzZsTk1FWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjMxNzkwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCZlAifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BLADE-MD™`",
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
