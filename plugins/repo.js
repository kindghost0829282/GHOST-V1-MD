const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👻 GHOST MD Repastitory Information*

*| ɴᴀᴍᴇ*: ɢʜᴏꜱᴛ-ᴍᴅ
*| ᴏᴡɴᴇʀ*: ᴄʏʙᴇʀ ɢʜᴏꜱᴛ
*| ɴᴜᴍʙᴇʀ*: 94741140620
*| ᴠᴇʀꜱɪᴏɴ*: 3.0.0


*📡 REPO LINK*
🔗◦ https://github.com/GHOST-TEM/GHOST-V1-MD.git

*📌 SUBSCRIBE MY YOUTUBE CHANNEL*
🔗◦ https://youtube.com/@cyberghost630?si=JVTDEQ8vO9Ksgv9M

©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɢʜᴏꜱᴛ-ᴍᴅ
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/41sdu1.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
