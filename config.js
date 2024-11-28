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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://iili.io/dbuMtaa.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "22502331988";
global.owner = process.env.OWNER_NUMBER || "22502331988";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/l6y90f.mp4,https://files.catbox.moe/gvgei2.mp4,https://files.catbox.moe/uou9jh.mp4,https://files.catbox.moe/h5kdah.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxKWHNuTG5WQU5acUNuY081RzdGdFh2Um5pc05Id3kzOWxENTBObXVXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3hOSEwyZ29QYk0rdExOK3dwZDdwaHlqUk9tTG5SOHlsd1lVYW9CNmozZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQXFSTnJYQjViQ0lET2JsdTJVWWtTNXZjbGs0WFMyU1hTWkE0OHl5OEgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSaEs3Y01LeVFaOHo0VXlLQkxWa0lnQjJFYjd4TnlXUlo2WXYveTV1a3k0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOY1JxaEo4Y0ZhNk5oMmxVeDA3bVowcU9nZmdVL3V3TG1DSkNzWXR6RTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ink3d0FXQzcyTVFqVnFWOUt5YTJOZU1INnE5aFNmSUE1eGhGbStIblFLd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlKelErb1VZSXFPZk01WllrN0daL216bjNZWWxJNWh2eUlacVZYNDMwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjJreU85eTcwblV2OC84OFhqYnAzOE93d0hWMDBkZWpNN1diVDhaSkhCMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNUMm1VQW5MbHM5RG9ycVMwQ3lLY0Q3TUlxaDdoeDBnTGhSanMxdmg5U0FKTzRDWG9XeFlZdnhDQ25jM2pXcjZNOGJKTXBNc2E0NEUvNVUxY3NNOGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ0LCJhZHZTZWNyZXRLZXkiOiJ1YkNGamhtTE11emxvVXhWRlNVRHljbUNsemExVlNuRndnSXpzN3BQOGRvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjaUM1QmZWeVNLbW4yMXp3U2RkWktBIiwicGhvbmVJZCI6ImZhZWE4ZDgxLWNmNzQtNDRlOC1iODBhLWUzZDNhNWE0ZWExMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0ZnBla2Voa2YvMnRjMGdZaW5ieEZ6dVBuZ3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3pPQ2xhdFFBMWtUUjVhUFZ6MEtlWWlaNFBZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg3NTlRVlRIIiwibWUiOnsiaWQiOiIyMjUwMjMzMTk4ODo4N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZC/8J2RgvCdkYjwnZC+8J2RhvCdkYLwnZGBIPCdkYjwnZGN8J2RiPCdkYDwnZC08J2QvvCdkLwg8J2Rh/CdkLjwnZC28J2QuyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0R0K2FNRkVJeUZtN29HR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWWpzSEhMZEVENU9jaXNJeE81Nm9DU1BscjB3bHJQUzIza2drSGk3S20wRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibkZlQ2VnOUdyMkxOWXhKcUZIMU5wZU9VOHRqMUN0cFFLTEJTWnBmaVFLN1BmZnBuSyt2Y1crWWl6NHBoRzNUcWZYdU0yRG55ZW10U2NuR3NVVmpJQnc9PSIsImRldmljZVNpZ25hdHVyZSI6Im1CQm5tSkFESXhNbHJwRGdZdXlmQ2lPVFh5ODRpZHNVeXF0WGlkdHNjTHFGVDFVemROdGRyRytnRng4QWlnWXBDS09HUUdGcTV4dXp5YlhkWGdxNGhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1MDIzMzE5ODg6ODdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0k3Qnh5M1JBK1RuSXJDTVR1ZXFBa2o1YTlNSmF6MHR0NUlKQjR1eXB0QiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjY5MDU4Nn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NARUTO-MD™`",
  author: process.env.PACK_AUTHER || "༒⊟༺𝙻𝙾𝚄𝙺𝚂𝙾𝙽 𝚄𝚉𝚄𝙼𝙰𝙺𝙸༻⊟༒",
  packname: process.env.PACK_NAME || "✮✮✮ʟᴏᴜᴋsᴏɴ ᵘᶻᵘᵐᵃᵏⁱ₊ ͟͟͞͞➳",
  botname: process.env.BOT_NAME || "𝑁𝐴𝑅𝑈𝑇𝑂-𝑀𝐷",
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
