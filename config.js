//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254720254797";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/b28eb9891e795dec31bc3.jpg";
global.waPresence = process.env.WAPRESENCE || "typing";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUp1djRnMUh4cHR2RGFFZGhSaldpMUl5eWkzczJsakIycFhNUGVRdGFsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVR5SmFxeG1Ka0VjMWtJNUhCTHV6S3p2NjhNdi8xNjBOVlA5U2E1V2xFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSUQzNlloQVRienNqUU4rc0liWXI4Z1JUUlpLQ0xRTGloaWpXS3BqSzBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrNi9ZYTFLTFJKRXN4ZjJQcnlYNzZNQlo1NnoyOXhQMHREQUorNm5wU0VvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCaFh6VnVLSWFSbEd0cmJDdHNFekQ4eFpEaGtrN2FMN05JazNIanVOR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFJWTBkbzhZRHFzeG9GV2grSm5qUE9tUVVmRGxDclEvTUEyQWtSL0FwQk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hTR0VhNmRNSzRqck5EUjRjcytrOUZIQmZUUjZuYXd4Rm8reWhJaFBVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3dZbURnYUdFZ0hBUlVYTHEvU3ZuQURkUEhYUjlOSDBCVHBUYm5UZTIwVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1TWlFJb2poemtSbkNySXFFQTZtREhjeVpBQ3FJTXA5WFFwY0lrVVZyTmxqM1NiMVdPR2J4c2dIWlZQc2xMTDJHRGpmZURmL2VEQ29XNGNldHBRN2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI5LCJhZHZTZWNyZXRLZXkiOiI1bTVKVUNyZnpBTHM5V21lVWs0bzZ5ZTF4TE9udnU0YzdhTkFuQ0paTG1jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtQ0dVNW8xSFJoQ0pPV3JhRG8tZXFRIiwicGhvbmVJZCI6ImJkZmRhZGZhLThlNDktNGZlZS04NTM5LTIxMGQyYWUxMzg4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWUtHbFViUklTMXVHV29lZU5ubnRSV3FoV289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1dVRStUL2F5ckV3T1BZQks4VzE4dXdoTzFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldWWTdQR0xRIiwibWUiOnsiaWQiOiIyNTQ3MjAyNTQ3OTc6ODFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xmajRya0VFS1hEK2JVR0dCZ2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitUVzFGODVsSWdGQmR6Qm1zcFBRQXJTSWdLZWZPb3lEYzJTT0JrS0x5U2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ink1YkRuQzB2NU1rZTVZWFFia3FxQ1Bna0pzdkI0MTVSTkVrZ0ErcWRRVC9oMzBHSVVyc1lqZk1JaHB5ZStyQlg5R3ZzYmZaYVJkK04wVFpZTmphNkNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ3TytLRGRWYmk0MUtON0N0bklOU0pPRnpyZEo4YjhTOFEyTkd0U3NwVC9XVGlyM09uM1JIWFhEU1ozM1h2YmpLL1djT1JHdTNkRzdXUkQrWDIxV1poUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcyMDI1NDc5Nzo4MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmazF0UmZPWlNJQlFYY3dacktUMEFLMGlJQ25uenFNZzNOa2pnWkNpOGtuIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzNzUyODgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlFNSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "elijah",
  ownername: process.env.OWNER_NAME || "elijah",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
