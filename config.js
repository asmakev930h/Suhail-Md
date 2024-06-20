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


global.devs = "2347041039367" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_13_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDYxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODQsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkxLFxuICAgICAgICA4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDY2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICA5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICA3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NixcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFVOTlVODVTVksyNkZNWTJKZzdEbTkrWWdaUm84cFFFRjBsa1Jydll6Wjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MTAzOTM2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiREVGRTcxMjc5MTYwRjdEOTJDQjhBNDI3MkQ2NjY2NEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4OTE3OTk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA0MTAzOTM2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUE1NzZDQkVGREE0OTlBQUU4REI2QkQwNjkxM0EyMEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4OTE3OTk3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5BbzNVY3VuUmI2Z2VwMlpVeVFOZmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2U3NmVhNTktNjM0OC00MTQwLWE5OTgtZGZkMjE4NWQ5YWVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDExNCxcbiAgICAgIDE5NSxcbiAgICAgIDE1NCxcbiAgICAgIDE0MSxcbiAgICAgIDIwOSxcbiAgICAgIDgwLFxuICAgICAgMjE4LFxuICAgICAgNzIsXG4gICAgICA1MCxcbiAgICAgIDkzLFxuICAgICAgMTgxLFxuICAgICAgMTAyLFxuICAgICAgMTcxLFxuICAgICAgMjQ1LFxuICAgICAgMCxcbiAgICAgIDIxOSxcbiAgICAgIDE3NyxcbiAgICAgIDIzNyxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDQyLFxuICAgICAgMjI3LFxuICAgICAgNjgsXG4gICAgICA1NCxcbiAgICAgIDIxNyxcbiAgICAgIDExMixcbiAgICAgIDIzNCxcbiAgICAgIDE2OSxcbiAgICAgIDMzLFxuICAgICAgNjYsXG4gICAgICA1MCxcbiAgICAgIDE1NixcbiAgICAgIDE0OCxcbiAgICAgIDI0NyxcbiAgICAgIDEyOCxcbiAgICAgIDExLFxuICAgICAgMjA4LFxuICAgICAgMTYwLFxuICAgICAgMTA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdIQVFOOEpaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQxMDM5MzY3OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi772D772P772C772S772BXCIsXG4gICAgXCJsaWRcIjogXCIyMTQ2MTU1NzMxNDM3MTI6MTlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnJ2MHFRR0VPUzIwck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPNG16UDdCNi9ZWExDUUp6M1RlQklHNHZXUU1PVXhlelF6Y1ZTVzRRVG1zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZYSmNnNHo2SzJPc25DM3RVa3AxeStsZVBpZnoxdWJBOUw1L0xWajNyR1FySEY0MWdYQStNOThkZGxXZ3FZd0x4QmwrQmV2ODV5d1ozcXR4Wm8zMEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZSalpOL1FkQmd2SzZGZ1VzdTR3MU9WclRwZEFHZStZTERucEJ2R3BTMkNNaFJsUzYxYitzVjlzajJtRjZ0MXEyeFR0dG9uTDkrZ0k2bXM4UGxjUkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDEwMzkzNjc6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5MTc5OTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHUCtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdQKy5qc29uIjogIntcImtleURhdGFcIjpcIjlBb2hkamg1ekVCc3lJWW5GbzJwUms4K09jNDYvMllFZ3hVaXgvdmdLUzg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY4NzQ2NzkzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4OTE3OTk1MDMxXCJ9Igp9"  // PUT your SESSION_ID 


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
