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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_23_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDcxLFxuICAgICAgICA5MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICA0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE1LFxuICAgICAgICA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDM0LFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqYWQzT2ZZS2dQRThjSXNTNnJHRk1KaU1TRkNMOWJFNkxQbDVPQ2txRTMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTk1Mjk0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZCQTcwRUJCRkIwODg5RjkxODkwNTY5MUFCNzQ2RDY2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMyOTAwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMTk1Mjk0MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgxNjkxRjQ4MjI3RjQ1NjBFNEQ5MzNCQjM3MzA2NDcxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMyOTAwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVb3JvbmFGcFN1ZVFWdllxZU1yemtBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQxZThlOTE4LWU2NTItNDI4Zi04N2E2LTMwY2E3MGM1MTNhZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzEsXG4gICAgICA3MSxcbiAgICAgIDEzMCxcbiAgICAgIDUyLFxuICAgICAgNTMsXG4gICAgICAxMixcbiAgICAgIDU1LFxuICAgICAgNjksXG4gICAgICA1MSxcbiAgICAgIDE3LFxuICAgICAgMTUyLFxuICAgICAgMTk1LFxuICAgICAgODcsXG4gICAgICAyMjMsXG4gICAgICAxMjksXG4gICAgICAyMCxcbiAgICAgIDMxLFxuICAgICAgMTM0LFxuICAgICAgMjYsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDg4LFxuICAgICAgMTk1LFxuICAgICAgMTQ1LFxuICAgICAgNjYsXG4gICAgICAxMjgsXG4gICAgICAxNTUsXG4gICAgICA2NyxcbiAgICAgIDExLFxuICAgICAgMjUwLFxuICAgICAgMTMsXG4gICAgICAxNjMsXG4gICAgICAxMTcsXG4gICAgICAxOTYsXG4gICAgICA3MSxcbiAgICAgIDI0MyxcbiAgICAgIDI4LFxuICAgICAgMzksXG4gICAgICA5OCxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBNUNWRThZQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxOTUyOTQyMzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1Mzk0NTI5MjYwNzcyMjo2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1BRCBHYW1lclwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tTR3VaMERFT0xCNjdNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaTk5bUN1YzY2TEwwMVR3SnRLSzRrK2thMGk1Nnp5MlBUdVBCUGZCbHZ4bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJwTlBUc244WmJIejl6Qm1nYWFmS1BDd05tbUdGL2RWa3BjVkJVcUV3WGxDQlVZR3QxZ1owaldYR3pNSVFLdU9Wa1ZTTkJyRFVZalhpbmhwTjIzVUFCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZTmhpWCtZMi9zZzB4WGJZZ05hYks2a3JXYkRpQ2RabC9LYllJSW90WTFNdjU2dGVUNlpjVERSdmpsemo1UEtNQVlaVjc0bVBBN0NYRThHU0dvN21pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE5NTI5NDIzOjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzI4OTk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFVHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIVUcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2bzM0VDl5WTFzSXpuUzRNUFp5aHpON29ySnZqR3E5RUZPelNrV0YwajIwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2NzA1ODQ2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MTYyOTc0MDgzXCJ9Igp9"  // PUT your SESSION_ID 


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
