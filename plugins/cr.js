import fetch from 'node-fetch'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let pp = hwaifu.getRandom()
    let name = await conn.getName(who)
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    let pepe = await conn.resize(pp, 150, 150)
    
    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     
  let cap = `${htki} ğğğğ ğğğğ ${htka}
  
â¥ *ğğğğ USER*
  â ğğğºğ : ${name}
  â ğğ­ğğ­ğ®ğ¬ : ${who.premiumTime > 0 ? 'Premium' : 'Free'}
  â Lğ¢ğºğ¢ğ­ : ${limit}
  â Sğğ¥ğğ¼ : Rğ© ${money}
  â ğğ±ğ© : ${exp}
  â ğğ¼ğ¥ğ : ${role}
  â ğğ ğ : ${age}

â¥ *ğğğğ ğğğ*
  â Rğ®ğ§ğ§ğ¢ğ§ğ  Oğ§ : Pğğ§ğğ¥
  â Mğ¼ğğ : Public
  â ğğ¢ğºğ : ${time} ï¹É¢á´á´ +5:30ï¹
  â ğğğ­ğ : ${date}
  â ğğ¼ğ­ğğ¥ ğğğğ­ğ®ğ«ğ : ${totalf.length}
  â ğğ¬ğğ« ğğğ§ğ§ğğ : ${users.length}

${global.cmenua}
/*
await conn.send2ButtonDoc(m.chat, cap, botdate, 'ğğ¢ğ¬ğ­ğğğ§ğ®', '.listmenu', 'ğğğ¬ğğ¼ğğ«ğ', '.db', fpayment, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'Â© ÎÆ§Æ¬Ğ¯Îá-BÓ¨Æ¬',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'Â© ÎÆ§Æ¬Ğ¯Îá-BÓ¨Æ¬',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: wame,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: wame,
    title: bottime  
				}
			}
})
*/
await conn.sendButton(m.chat, cap, botdate, Buffer.alloc(0), [['TES', 'TES'], ['TES', 'TES']], m, { mimetype: "text/rtf", fileName: "Met Pagi", pageCount: 90000, fileLength: 90000, seconds: 90000, jpegThumbnail: pepe, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sgc,
    mediaType: 2,
    description: "WATERMAR", 
    title: "JUDUL",
    body: "BODY",
    thumbnail: pepe,
    sourceUrl: sgc
     }}
  })
/*await conn.send2ButtonVid(m.chat, pp, cap, botdate, 'ğğ¢ğ¬ğ­ğğğ§ğ®', '.listmenu', 'ğğğ¬ğğ¼ğğ«ğ', '.db', m, adReply)*/
}

handler.command = /^(menu2)$/i

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }