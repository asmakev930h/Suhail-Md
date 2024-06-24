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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2349019529423" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349019529423";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349019529423";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_16_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDUyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA0NSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDYyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0LFxuICAgICAgICA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg4LFxuICAgICAgICA0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDkwLFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE2LFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVWkJZUXEvNG5odDhPeWtaZkJkZC8zNzBrWkRJZ21tdmk4Yk1hWkFMVS8wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTk1Mjk0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkE5OTRBODE4NjkzN0EyOTNEMEYzNkMyNDVGNkNBMjIyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTE2Mjk3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTk1Mjk0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY4RjQ1ODEwMjYxQkU3MjgxMkZCQkU3QjZFMkI1QjBDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTE2Mjk3NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDN1VESjRfNVRZaUtZTE5rUEQ2ZGNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImM4MzE3Mzc0LWExY2ItNDk4OS04YjNhLWU5OTI4YTFkMzQ1NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MSxcbiAgICAgIDE5MyxcbiAgICAgIDE3OSxcbiAgICAgIDY2LFxuICAgICAgMTQzLFxuICAgICAgMTI1LFxuICAgICAgMjMsXG4gICAgICAxNDEsXG4gICAgICAzNixcbiAgICAgIDI1NSxcbiAgICAgIDE0NSxcbiAgICAgIDE1MixcbiAgICAgIDEwOCxcbiAgICAgIDYwLFxuICAgICAgMTMzLFxuICAgICAgMTk1LFxuICAgICAgMTcxLFxuICAgICAgMjUxLFxuICAgICAgMTEwLFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDU5LFxuICAgICAgODgsXG4gICAgICA3OCxcbiAgICAgIDg1LFxuICAgICAgNjAsXG4gICAgICAxNTAsXG4gICAgICA5MyxcbiAgICAgIDUxLFxuICAgICAgMjMyLFxuICAgICAgMzQsXG4gICAgICAyMTksXG4gICAgICAxOTUsXG4gICAgICA1MixcbiAgICAgIDkxLFxuICAgICAgMTk5LFxuICAgICAgODIsXG4gICAgICAxMDAsXG4gICAgICAyNSxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxaNUIyVEwzXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDE5NTI5NDIzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUzOTQ1MjkyNjA3NzIyOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTUFEIEdhbWVyXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1NHdVowREVObXc0Yk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpOTltQ3VjNjZMTDAxVHdKdEtLNGsra2EwaTU2enkyUFR1UEJQZkJsdnhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInNLOWZyUHBacWpaK1ZuNFR3dGNPb2VCOTRsSDJPNGRPWjhiMWI1T0lRN3VkM2ZneGk3T2MzMWp1QjdzZHFCMDUwVTI5WFVkN0NBMXJMdWxqRzFkVUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFvL3N0aEpTZXFFSGcwZ3pqNFc0UmVONXRlSC9WZzZHdG9pcENPaDZUakg3Wm10aWxIZ1lTU0tNcmJoMGkxZld2OWt3ZzlvUzcwQkNtSTdwR1daK0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMTk1Mjk0MjM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxNjI5NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIVUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhVRy5qc29uIjogIntcImtleURhdGFcIjpcIjZvMzRUOXlZMXNJem5TNE1QWnloek43b3JKdmpHcTlFRk96U2tXRjBqMjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODY3MDU4NDY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkxNjI5NzQwODNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "cobar-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "cobra",


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
