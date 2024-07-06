const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347041039367";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347041039367";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_33_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgODIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxLFxuICAgICAgICAyMixcbiAgICAgICAgOTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTczLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MixcbiAgICAgICAgMTYxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgODQsXG4gICAgICAgIDgxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwbW1CMHFGOTNSU1ZxcmxxenFIeGRwQWNLdm92Y1Z4Zy9IbEEzbWY0UXJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhR25fVWNOb1FGU0FBbnp6VFNTRHlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE0YTI1YzZhLTdjN2EtNDBiYy1hOTQ5LWZiYWMwODQ1ZGIwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDcsXG4gICAgICA3MSxcbiAgICAgIDI5LFxuICAgICAgMjUxLFxuICAgICAgNDUsXG4gICAgICA0NixcbiAgICAgIDkxLFxuICAgICAgMjQ4LFxuICAgICAgNDYsXG4gICAgICAxNyxcbiAgICAgIDIzMixcbiAgICAgIDIzLFxuICAgICAgNDgsXG4gICAgICA3NSxcbiAgICAgIDExOCxcbiAgICAgIDIxLFxuICAgICAgMTcxLFxuICAgICAgODksXG4gICAgICAxOTcsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgNzIsXG4gICAgICA5OCxcbiAgICAgIDEzNCxcbiAgICAgIDE2MSxcbiAgICAgIDE5NixcbiAgICAgIDE4LFxuICAgICAgMTAzLFxuICAgICAgMTQ2LFxuICAgICAgODgsXG4gICAgICA2NSxcbiAgICAgIDE1OCxcbiAgICAgIDE5OSxcbiAgICAgIDIzLFxuICAgICAgNDMsXG4gICAgICA0NCxcbiAgICAgIDE0LFxuICAgICAgOSxcbiAgICAgIDE1LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjgxSEpBR1BBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQxMDM5MzY3OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi772D772P772C772S772BXCIsXG4gICAgXCJsaWRcIjogXCIyMTQ2MTU1NzMxNDM3MTI6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnp2MHFRR0VMV1BwYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPNG16UDdCNi9ZWExDUUp6M1RlQklHNHZXUU1PVXhlelF6Y1ZTVzRRVG1zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9ERVM3aEZkODljdFQ5NTF6V2NtbDVvQlkzcVpLOXZYaVN6eklJZ0c2cjU5Wk9DejByMXNHYVVFQXJJdjBlMHQ5K0NxK2JWUVViR0xsZ2JreUppeUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInlaUUdwMHdtSmNLMnl3dElTNzJDb28zbFlpUVlLV1dzQ2l6QzBDc25NeDVBN01FNFhnZGRGVVMxVW9NQVZlbnZpSEMxZWNibHFSUG9mRk9OZnYwY2hnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDEwMzkzNjc6MzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNzI4MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHblhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUduWC5qc29uIjogIntcImtleURhdGFcIjpcIlREcVRIU21RZElVS3FpYXJpVXVwR3V0VStnZTJSdkFJQVAwK3M3UUNyY2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY4NzQ2NzkzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
