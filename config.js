//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "adamsandra8056.gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/BADBOI-v1/Queen-BHAD-DC-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/dad04122a49867dffb830.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "263771174837";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/53353f917aa29807b8a64.jpg,https://telegra.ph/file/9f7c67312af37da75d47e.mp4";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ljTUxnWHVNNUdrQVRtb3RISExsdjB0aFU0TktzQi9Da0IzbHZOdzkxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDdjYWZVTEMzTURETXN1UHU4eFFyRTE1RDEzN28zMGJseitaaEUwUEdGMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQXg2U3ZZeHVzUzNMTGJLQlZiRzRpc3AzYUJIV1pRMmlOVnYxVFNjSDIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSkdlSnJ0LytVYldyYXdsa0o4bjNBQUJEclRrU21pemVkZkdCMmNjSUJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQSDFxK0lBNVVyTTF6NGRYUW1GQXRybm5mMHIzaEFYWFdCMDVkdXJxM1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRyYSsyS1VTZnQ2VEkwWGJvU0thc3haNC9vRzJGUWlQbWRZNFA0TEJvVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lMbVZmUVRXR2xYRTNmaDB6ZW5paUZEcDB2Qis3cWxjK1diQVNwWHRYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkNkRnhyTGpaZDhQUzI2ZVlqU09TeGlFcE5uWXYvbTZQZWxBQ2RaRkMzOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNycktoenF3c1VWeFZpb20ycDhhZG9NVmlWdW9oL2haT0VHblV4bVV2Q1RRUGU3R3pFTFVtU3piL2dmS2tGNENyL0FmS29xZkMvRDgxeFdXMlg0Y0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6InhnNDVGRW5HWWJVcEFoY2dQTVlGWUZhNnNtQ0Fla2JydkkzdWRsMi9vYXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlVqNFZfeTRoU3RhbHJJeGZoTmgtRkEiLCJwaG9uZUlkIjoiYTBkYzUxOTktYTI0Mi00NGQzLWJlYzAtZmFhYWI5MmM1YmFiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZsZ3FlNDdhc3VrUXJxb01pU2xDZ0dTbW9Ucz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUd0x5L3A4QTA0OU9DcW1iRENLSW0vbjhJRm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjIyU0xDOVciLCJtZSI6eyJpZCI6IjI2Mzc4NDc5MzYxMToxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLaW5nIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYnY5S0lERU83TjhiWUdHQXNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1N1RiVThpTzRBRkcxMVRLZTdjYlhoVGlrSnBJa3o4bGpHUDFEZzRoSUg0PSIsImFjY291bnRTaWduYXR1cmUiOiJlT0IyWi8rUXNLRmhhQ1ZIUEFEektCVzg5SFJjWVhYa0hZNGVHNWlpcVhxdkQrSFIyZ2JLUWd2NVlIWXV1VXdVejdvRGtJZVNIRUFWUldGeE1mcmpDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL3A4eGpSNE9BeFZ6bU5NRVBDMmg4ckErS2UrVnVYVUNrQldkbzRaMGlTbnlTbEJGc1J5M2RVK05aNUdrV253RHAxTklCUE9SRWN0Ukd3KzJ5VXFNQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3ODQ3OTM2MTE6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYnUwMjFQSWp1QUJSdGRVeW51M0cxNFU0cENhU0pNL0pZeGo5UTRPSVNCKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTcyMDMxOSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKYSsifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD™`",
  author: process.env.PACK_AUTHER || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  packname: process.env.PACK_NAME || "♡ Ɓ Ӈ ƛ Ɗ Ɗ Ƈᴸ ᴼ ᴿ ᴰ",
  botname: process.env.BOT_NAME || "QUEEN_♡ƁӇƛƊ ƊƇᴸᴼᴿᴰ-MD",
  ownername: process.env.OWNER_NAME || "BADBOI HACKER",
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
  LANG: (process.env.THEME || "B H A D").toUpperCase(),
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
