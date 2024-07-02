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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_53_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUyLFxuICAgICAgICA5NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NixcbiAgICAgICAgMixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg1LFxuICAgICAgICA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICA5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxLFxuICAgICAgICA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQxLFxuICAgICAgICA3MixcbiAgICAgICAgMTExLFxuICAgICAgICA4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NixcbiAgICAgICAgODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqUUZoQnhoam8yZm1qNVJUM09tR1FQbjFYcmZQQnhVa09YWTZoT3VnMXY0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNDEwMzkzNjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjg1OUQ3M0ZFRjJBRjVEM0U2MEI2ODM3MjQwQTUwMUJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTk0NjM5NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrSVBxb2tFS1JnaUF4Y1JlYS1wUTFRXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ2MjA1OTNhLTNjMzQtNDJmNS1iYWE3LWFjYWQ4YWQ1ODk4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICA1NSxcbiAgICAgIDYzLFxuICAgICAgMjQ1LFxuICAgICAgMixcbiAgICAgIDEyOCxcbiAgICAgIDE1MyxcbiAgICAgIDEwMyxcbiAgICAgIDgyLFxuICAgICAgOTQsXG4gICAgICAyNSxcbiAgICAgIDIwNCxcbiAgICAgIDE5NixcbiAgICAgIDE2MixcbiAgICAgIDIzLFxuICAgICAgNzMsXG4gICAgICAyMjAsXG4gICAgICAyMzUsXG4gICAgICAyMjksXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NyxcbiAgICAgIDM0LFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICAxMTMsXG4gICAgICA1OCxcbiAgICAgIDIzOCxcbiAgICAgIDE1NixcbiAgICAgIDg3LFxuICAgICAgMTIwLFxuICAgICAgMjE4LFxuICAgICAgMjIsXG4gICAgICAxODUsXG4gICAgICAxODgsXG4gICAgICA1MyxcbiAgICAgIDExNSxcbiAgICAgIDEzLFxuICAgICAgMTExLFxuICAgICAgNTgsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIMTNWWlFNN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0MTAzOTM2NzoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIu+9g++9j++9gu+9ku+9gVwiLFxuICAgIFwibGlkXCI6IFwiMjE0NjE1NTczMTQzNzEyOjIyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pydjBxUUdFSkdaa2JRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTzRtelA3QjYvWVhMQ1FKejNUZUJJRzR2V1FNT1V4ZXpRemNWU1c0UVRtcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjdEhLSWdxODFxZjNTbG9ERnIxRlBDVGxNTSsrS1Q2TUhHczNSMUlBWUJBMGlTVFpqbHBlM3ViZVR1cS91UnZYMUlWb2tsVmk2eG1YSjZIdXNleGxDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ6UGJoUEoraXM0VzZvK3JadnRnUTJSNmtIQWFvZlJzcmdtdytPY0xLSVh3dE5nYkxRMnd4UURvWDQ2TDI5OE0zaFpwdW5TeHM4T0tsaFUyZWF2amdpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDQxMDM5MzY3OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTQ2Mzg4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1ArXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHUCsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5QW9oZGpoNXpFQnN5SVluRm8ycFJrOCtPYzQ2LzJZRWd4VWl4L3ZnS1M4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2ODc0Njc5MzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODkxNzk5NTAzMVwifSIKfQ=="  // PUT your SESSION_ID 


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
