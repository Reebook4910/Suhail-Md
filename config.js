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
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254115833504";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_10_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMjI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgOSxcbiAgICAgICAgOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlp0c2dsUVhWRWxiSndXNWRWL202QlhWV2NCM200bVJRbzRGZW0yQ2VCTkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFwN1lYWEpqVFp5Q1lmVThZVm5GcGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjVmMDEwNTEtYTNjNC00YzllLWEyNDEtZjM1MzI4ZTMyYjBlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDEyOSxcbiAgICAgIDExNyxcbiAgICAgIDEyMyxcbiAgICAgIDIwNixcbiAgICAgIDExOCxcbiAgICAgIDI5LFxuICAgICAgMTEwLFxuICAgICAgMTMyLFxuICAgICAgMTA3LFxuICAgICAgNzEsXG4gICAgICAxMTEsXG4gICAgICAxMzIsXG4gICAgICA4NSxcbiAgICAgIDEzLFxuICAgICAgMCxcbiAgICAgIDE2MyxcbiAgICAgIDg3LFxuICAgICAgMTE2LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMTU2LFxuICAgICAgMTk4LFxuICAgICAgMTE1LFxuICAgICAgMjExLFxuICAgICAgMTM0LFxuICAgICAgMjEzLFxuICAgICAgMjUxLFxuICAgICAgMzUsXG4gICAgICAyNDUsXG4gICAgICAyMzksXG4gICAgICAyMDIsXG4gICAgICAxNjgsXG4gICAgICAyMDksXG4gICAgICAxNDgsXG4gICAgICAyMSxcbiAgICAgIDEwOCxcbiAgICAgIDEyMixcbiAgICAgIDIyNyxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCQ0VQOUo3VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTE1ODMzNTA0OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzMzY2ODA0OTMwNzk3OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTJlc3M4QkVQZXZwTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOYmNjUjE1bWRkcmtMRmdqM3lkaW9QdW5jZ1htZmRvNEZTU0NMZXhBandrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJvMm1QVnVEaVNvN3VseTV0MWNBaHJacUxQTS9HWWJodW5UYzBMT1lnSlk3QnBlZWZRYkc3UWVRK1Qrb21ucHpaSDM2Z3lGeXFjTnlFa3p6czRWU0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdjb09PSlJQSnpxcHVMR2k1Q0RSRTlVUmtsZUNENmdINmtBSHBmcW1qYTZwWkxEQlVnSUkvZXNkaUowZy9BeUo3RHV1M0tUZEZHM0hYN0VsNDZlakFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExNTgzMzUwNDo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjYwNjAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR214XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHbXguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmakNLNmFGMXNRQ2Q0K2xnTHpjamp2enpLUElGeTFmdzBRdVJ0ZG5hNlBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQzNDkzMzUxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI1OTkyODAyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "SIMON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
