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


global.devs = "2349019529423,22871535411" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349019529423,22871535411";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349019529423,22871535411";




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


global.SESSION_ID = process.env.SESSION_ID ||  "1SUHAIL_17_04_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5LFxuICAgICAgICA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZtUGk3QTA0TW43VDlBN2FVZFN2TGllSlBRcGx1eXcxeG9CcDVYa3RlUEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlA3c3ozeWZ5VDNpemd4RU5rb1Z2RlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjc1MTc5ZmItNDc2OC00ZjU5LWJiYzEtNmViZjMwNDQzZTE5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1LFxuICAgICAgMjI5LFxuICAgICAgMTQzLFxuICAgICAgMTA5LFxuICAgICAgODgsXG4gICAgICAyOSxcbiAgICAgIDcwLFxuICAgICAgNjksXG4gICAgICAxNTIsXG4gICAgICA0OCxcbiAgICAgIDI0NixcbiAgICAgIDE4NyxcbiAgICAgIDE2OCxcbiAgICAgIDE5MyxcbiAgICAgIDE0OCxcbiAgICAgIDE3NSxcbiAgICAgIDExOSxcbiAgICAgIDE2MCxcbiAgICAgIDY4LFxuICAgICAgMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgMjU0LFxuICAgICAgMTgzLFxuICAgICAgOTksXG4gICAgICAxMjksXG4gICAgICAxMDUsXG4gICAgICA1MyxcbiAgICAgIDI0OCxcbiAgICAgIDUxLFxuICAgICAgMjMsXG4gICAgICAxMjYsXG4gICAgICAxOTgsXG4gICAgICAxMDksXG4gICAgICAyMTMsXG4gICAgICAxMDMsXG4gICAgICAyMTMsXG4gICAgICAxMyxcbiAgICAgIDI1NSxcbiAgICAgIDIxMCxcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlk4WDFMN1pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODcxNTM1NDExOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTg4NjI3NzA0OTk2OTI6NDJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXpRa053REVQeWZoclFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTY3AySE9qbkFIT050dXRxaS9vaGNJaXgyckdmcUdVYzJqL2NoMXNGQ1gwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInAvUjhpckNUalo1czFvU3VmV0NYa1hoVU5rUVZNcWpjaEFGVkF4cStMZFo3NkdmUFpxSnI0eFdDcXluTjRvZXNXMDBJUnZtd3lpMk90NC93VmF1bUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImUwN0d5S0c5N3Z6WDFHYWZNdjFRQll0R2Jmc2FNYTBWMkR1eElGQ0lIVUQwa1d6emtUR1lGWnp1cXI3N2xIanQ1Zys4SFQ4RFBDL3d0eWRuQUwxWkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyODcxNTM1NDExOjQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NjcwMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHT1VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdPVS5qc29uIjogIntcImtleURhdGFcIjpcInd3TkpoWG52cmcyMWVodkxTNnBoaGthYnY2VlJ1bldqOW0vZDFNRTZrNXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTk4NTE2ODEyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg1MjY5NjcyMjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "cobra-ᴍᴅ",
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
