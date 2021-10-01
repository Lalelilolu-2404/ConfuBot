//Bot By ConfuMods


const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const request = require('request')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const { addMetadata } = require('./lib/exif.js')


const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')


const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const trava = JSON.parse(fs.readFileSync('./src/trava.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const { nsfwmenu } = require('./src/nsfwmenu')
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const user2 = JSON.parse(fs.readFileSync('./database/json/user2.json'))

const { ind } = require('./language')
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))

const {
	limitawal,
	memberlimit,
	cr,
	BotPrefix,
	author,
	pack
} = settingan

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

prefix = '#'
blocked = []
fake = '༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑'
fakeimage = fs.readFileSync(`./media/confu.jpeg`)
numbernye = '10'
join = '𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐱 𝐩𝐫𝐞𝐬𝐞𝐧𝐭𝐚𝐭𝐞 𝐨𝐡  𝐛𝐚𝐧'
public = true

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:𝑪𝒐𝒏𝒇𝒖𝒔𝒊𝒐𝒏\n' 
            + 'ORG:༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=50254371795:+50254371795\n' 
            + 'END:VCARD' 

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]


const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')


const {
	getRegisteredRandomId,
	addRegisteredUser,
	createSerial,
	checkRegisteredUser
} = require('./lib/register.js')

               const addRegisteredUser2 = (userid, sender) => {
            const obj = { id: userid, name: sender }
            user2.push(sender)		
            fs.writeFileSync('./database/json/user2.json', JSON.stringify(_registered))
        } 			           
/*[-> ATM & Limit <-]*/
const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	limitAdd
} = require('./lib/limitatm.js')


        
    

const BarBarKey = 'IDxO1TFYnKADlX4pxcHa'
const VhtearKey = '1BlnApiIkyPake'
const XteamKey = 'd39b4b3fc7dba'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = '༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑'
const LolKey = 'save123'
lolkey = '682aeab645ed61cf137cf971'
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minuto ${pad(seconds)} Segundo`
}
function tanggal(){
myMonths = ["Enero","Febrero","marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];
			myDays = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const cnf = new WAConnection()
	cnf.version = [2, 2119, 6]
	cnf.logger.level = 'warn'
	console.log(banner.string)
	cnf.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el Qr'))
	})

	fs.existsSync('./cnf.json') && cnf.loadAuthInfo('./cnf.json')
	cnf.on('connecting', () => {
		start('2', 'Cargando UwU')
	})
	cnf.on('open', () => {
		success('2', 'Listo 7u7')
	})
	await cnf.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./cnf.json', JSON.stringify(cnf.base64EncodedAuthInfo(), null, '\t'))

cnf.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await cnf.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await cnf.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Rgn07Kt/20210702-082122.jpg'
				}
				teks = `@${num.split('@')[0]}  ${join}`
				let buff = await getBuffer(ppimg)
				cnf.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

cnf.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        cnf.sendMessage(callerId, "Sistema de bloqueo automático, nada de llamadas! (・–・;)ゞ", MessageType.text)
        await sleep(4000)
        await cnf.blockUser(callerId, "add") 
})
	cnf.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	
	

	cnf.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		//if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message 
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: 'En corto te doy tu pedido espera',
				nsfwoff: 'La Funcion De Nsfw No Está Activa xd',
				success: 'Listo',
				wrongFormat: 'Escribe Bien 🙂',
				waitmusic: 'Espera, Estoy buscando tu musica ahre',
				waitimg: 'Espera lo ago lo mas rapido que puedo',
				musica: 'Espera un momento, estoy buscando tu musica',
			imageoff: 'No tengo permitido enviar fotos, te jodes',
				error: {
					stick: 'Error',
				errostick: 'Error',
				Iv: 'Tu link ya no sirve :c al parecer'
				},
				only: {
					group: 'Este Comando Solo Puede Ser Usado En Grupos',
					ownerG: 'Este Comando Solo Puede Ser Usado Por El Dueño Del Grupo (◍•ᴗ•◍)',
					ownerB: 'Este comando solo lo puede utilizar mi creador, tu no (・–・;)ゞ',
					admin: 'No Eres Admin 😂',
					Badmin: 'Necesito Ser Admin Primero 🙂'
				}
			}



				
			
			const botNumber = cnf.user.jid
			const ownerNumber = [`50254371795@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const tescuk = ["0@s.whatsapp.net"]
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await cnf.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
            const isAntilink = isGroup ? antilink.includes(from) : false
            const senderme = mek.participant
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
		    const isUser2 = user2.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isTrava = isGroup ? trava.includes(from) : false
				    

			const totalchat = await cnf.chats.all()			
	 	const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : false						
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
			const isMe = botNumber.includes(senderme)
			let pushname = cnf.contacts[sender] != undefined ? cnf.contacts[sender].vname || cnf.contacts[sender].notify: undefined
			const q = args.join(' ')
			let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				cnf.sendMessage(from, teks, text, {quoted: mek})
			}
			const sendMess = (hehe, teks) => {
				cnf.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? cnf.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : cnf.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
					    const costum = (pesan, tipe, target, target2) => {
			cnf.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 400, isForwarded: true } , quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) },message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			cnf.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}

 		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		      
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    cnf.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 									
			 	           /*[-- funcion dinero --]*/
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)	     
	        }
			/*[-- funcion barra de nivel --]*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 50 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
			
			
			/*[-- funcion ranking --]*/
			const levelRole = getLevelingLevel(sender)
   	       var role = 'Dicipulo'
        if (levelRole <= 2) {
            role = 'Dicipulo'
        } else if (levelRole <= 4) {
            role = 'Dicipulo Dia 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Dicipulo Dia 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Dicipulo Dia 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Dicipulo Dia 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Avanzado mes 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Avanzado mes 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Avanzado mes 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Avanzado mes 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Avanzado mes 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Aventurero novato dia 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Aventurero novato dia 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Aventurero novato dia 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Aventurero novato dia 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Aventurero novato dia 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Aventurero experimentado año 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Aventurero experimentado año 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Aventurero experimentado año 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Aventurero experimentado año 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Aventurero experimentado año 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Aventurero profesional año 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Aventurero profesional año 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Aventurero profesional año 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Aventurero profesional año 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Aventurero profesional año 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Maestro mes 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Maestro mes 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Maestro mes 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Maestro mes 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Maestro mes 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = 'Elite mes 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = 'Elite mes 2 ♢²'
        } else if (levelRole <= 66) {
            role = 'Elite mes 3 ♢³'
        } else if (levelRole <= 68) {
            role = 'Elite mes 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = 'Elite mes 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = 'Elite año 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = 'Elite año 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = 'Elite año 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = 'Elite año 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = 'Elite año 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Elite de la elite dia 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Elite de la elite dia 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Elite de la elite dia 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Elite de la elite dia 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Elite de la elite dia 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Escolta dia 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Escolta dia 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Escolta dia 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Escolta dia 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Escolta dia 5 ✷✷⁵'
        } else if (levelRole <= 102) {                   
            role = 'Leyenda I 忍'
        } else if (levelRole <= 154) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 156) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 158) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 160) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 162) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 164) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 166) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 168) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 170) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 172) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 174) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 176) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 178) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 180) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 182) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 184) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 186) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 188) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 190) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 192) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 194) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 196) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 198) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 200) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 210) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 220) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 230) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 240) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 250) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 260) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 270) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 280) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 290) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 300) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 310) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 320) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 330) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 340) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 350) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 360) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 370) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 380) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 390) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 400) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 410) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 420) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 430) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 440) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 450) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 460) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 470) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 480) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 490) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 500) {
            role = 'Leyenda VI 忍'
        } else if (levelRole <= 666) {
            role = 'Leyenda VII 忍'
        } else if (levelRole <= 700) {
            role = 'Leyenda VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Leyenda IX 忍'
        } else if (levelRole <= 900) {
            role = 'Leyenda X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythical Glory 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythical Glory x1000帝'
        } else if (levelRole <= 8000) {
            role = 'Mythical Glory 1100 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythical Glory 2000 上帝'
        } else if (levelRole <= 10000) {
            role = 'Despertar Mythical Glory 特尔邦贡'
	    } else if (levelRole <= 66666666) {
   	         role = 'MATA DIOSES❗'
   	     }
   		 
				
				
	        /*[-- funcion nivel --]*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 500 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                     addKoinUser(sender, 20)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))            
 	               
 	              
	               
 
                  }
            } catch (err) {
                console.error(err)
            }
        }
         

          /*[-- funcion check limit --]*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return cnf.sendMessage(from,`Su límite de solicitudes ha expirado`, text,{ quoted: mek})
                            cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			/*[-- limit end --]*/
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    cnf.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}


const fakethumb = (teks, yes) => {
            cnf.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./sticker/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakestatus = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    },
                    contextInfo: {
                      "forwardingScore": 999, "isForwarded": true
                    }
                }
            })
        }
        const faketokoforwaded = (teks) => {
	anu = {
	  key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./sticker/thumb.jpeg`)
					},
					"title": `Hola ${pushname}, ${ucapanWaktu}`,
					"retailerId": "Confu bot",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
	cnf.sendMessage(from, teks, text, {
	  quoted: anu,
	  contextInfo:{
	    "forwardingScore": 999, "isForwarded": true
	  }
	})
}
        const fakegroup = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `Hola ${pushname}`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./sticker/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/cnf.jpeg')}}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`media/cnf.jpeg`)} } }

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/cnf.jpeg`)
					},
					"title": fake,
					"description": "༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑",
					"currencyCode": "USD",
					"priceAmount1000": "1000000000",
					"retailerId": "Confu",
					"productImageCount": 1
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}



			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       cnf.sendMessage(from, `Success`, `ESTADO : UNO MISMO`)
     }
     if (chats.toLowerCase() == 'status'){
       cnf.sendMessage(from, `STATUS : ${public ? 'PUBLICO' : 'UNO MISMO'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }
  

			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVADO ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GRUPO  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMANDO ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMANDO ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = cnf.contacts[from] != undefined ? cnf.contacts[from].vname || cnf.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
               
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			
			
			switch(command) {
			
							case prefix+'registrar':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('La edad debe ser un número!!')
                if (namaUser.length >= 30) return reply(`¿Por qué tu nombre es tan largo? Es un nombre o un tren xd`)
                if (umurUser > 40) return reply(`tu edad es demasiado mayor, máximo 40 años`)
                if (umurUser < 12) return reply(`su edad es demasiado joven mínimo 12 años`)
                try {
					ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
					daftarimg = await getBuffer(ppimg)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break

			  
case prefix+'tictactoe':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Etiqueta a tu oponente bebu')
if (isTTT) return reply('Hay un juego en este grupo, espere')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta al objetivo del oponente')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
gilir = player2
id = from
ky_ttt.push({player1,player2,id,angka,gilir})
cnf.sendMessage(from, `*🎳 Iniciar un juego de Tictactoe 🎲*

[@${player2.split('@')[0]}] Te desafía a convertirte en un oponente del juego🔥
Escribe Y/N para aceptar o rechazar el juego.

Escriba ${prefix}delttt, para reiniciar los juegos grupales.`, text, {contextInfo: {mentionedJid: [player2]}})
break
                                                                                
                case prefix+'delltictactoe':
                case prefix+'delttt':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('No hay juegos en este grupo')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Listo UwU')
break			
			     case prefix+'menu':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    wew = fs.readFileSync(`./media/cnf.jpeg`)
const sosGay = checkATMuser(sender)   
                                     lzain = `*╭═✦͜͡ৡৢ┅╡༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑╞┅ৡৢ͜͡✦═╮*
*║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━* ⃟ ⃟ *      
*║◄🔥┢┅ீ͜ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┅┧🔥►*
*║┊:*      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈  
*║┊:𝑪𝒓𝒆𝒂𝒅𝒐𝒓 : 𝑪𝒐𝒏𝒇𝒖*
*║┊:𝑵𝒖𝒎𝒆𝒓𝒐 : wa.me/50254371795*
*║┊:YT : Confu_Mods*
*║┊:*      ┈ ┈ ┈ ┈ ┈  ┈ ┈ ┈ 
*║◄🔥┢┅ீ͜ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┅┧🔥►*
*║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━* ⃟ ⃟ *      
*╰═✦͜͡ৡৢ┅╡༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑╞┅ৡৢ͜͡✦═╯*

╭▬▬▬▬▬▬▬ *˚✯ཻ⸙ ̥•┉┉•
⊱✦•*𝑻𝑼 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵*
▋╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅   
▋┋ *Tu Dinero: ${sosGay}*
▋┋ *XP: ${getLevelingXp(sender)}*
▋┋ *Level: ${getLevelingLevel(sender)}*
▋┋ *Rol :${role}*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑰𝑵𝑭𝑶 𝑫𝑬 𝑬𝑳 𝑩𝑶𝑻*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}ping_*
▋┋ *_${prefix}creador_*
▋┋ *_${prefix}creditos_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑪𝑶𝑴𝑨𝑵𝑫𝑶𝑺*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}sticker_*
▋┋ *_${prefix}attp texto_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑴𝑬𝑫𝑰𝑨*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}toimg_*
▋┋ *_${prefix}tomp3_*
▋┋ *_${prefix}tts es texto_*
▋┋ *_${prefix}wallpaper_*
▋┋ *_${prefix}wpanime_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑪𝑹𝑬𝑨𝑫𝑶𝑹*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}sticker_*
▋┋ *_${prefix}halloween_*
▋┋ *_${prefix}vampire_*
▋┋ *_${prefix}codetxt_*
▋┋ *_${prefix}matrixgoogletxt_*
▋┋ *_${prefix}spiderman_*
▋┋ *_${prefix}express_*
▋┋ *_${prefix}dance_*
▋┋ *_${prefix}blackbird_*
▋┋ *_${prefix}text3d_*
▋┋ *_${prefix}warrior_*
▋┋ *_${prefix}grose_*
▋┋ *_${prefix}love2_*
▋┋ *_${prefix}love_*
▋┋ *_${prefix}box_*
▋┋ *_${prefix}ice_*
▋┋ *_${prefix}toxic_*
▋┋ *_${prefix}bokeh_*
▋┋ *_${prefix}blood2_*
▋┋ *_${prefix}blood_*
▋┋ *_${prefix}luxury_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑳𝑰𝑴𝑰𝑻 𝒀 𝑫𝑰𝑵𝑬𝑹𝑶*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}event_*
▋┋ *_${prefix}minar_*
▋┋ *_${prefix}trabajar_*
▋┋ *_${prefix}cartera_*
▋┋ *_${prefix}transferir @ | cantidad_*
▋┋ *_${prefix}limit_*
▋┋ *_${prefix}buylimit_*
▋┋ *_${prefix}level_*
▋┋ *_${prefix}leveling_*
▋┋ *_${prefix}lb_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑨𝑵𝑰𝑴𝑬*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}loli_*
▋┋ *_${prefix}loli2_*
▋┋ *_${prefix}yaoi_*
▋┋ *_${prefix}waifu_*
▋┋ *_${prefix}waifu2_*
▋┋ *_${prefix}rimuru_*
▋┋ *_${prefix}shion_*
▋┋ *_${prefix}shuna_*
▋┋ *_${prefix}milim_*
▋┋ *_${prefix}souei_*
▋┋ *_${prefix}shotowp_*
▋┋ *_${prefix}megumin_*
▋┋ *_${prefix}vanitas_*
▋┋ *_${prefix}jeanne_*
▋┋ *_${prefix}siesta_*
▋┋ *_${prefix}levi_*
▋┋ *_${prefix}sakura_*
▋┋ *_${prefix}sasuke_*
▋┋ *_${prefix}hinata_*
▋┋ *_${prefix}naruto_*
▋┋ *_${prefix}kanna_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑨𝑫𝑴𝑰𝑵*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}kick @_*
▋┋ *_${prefix}getpic @_*
▋┋ *_${prefix}getbio @_*
▋┋ *_${prefix}listadmin_*
▋┋ *_${prefix}promote @_*
▋┋ *_${prefix}hidetag texto_*
▋┋ *_${prefix}linkgc_*
▋┋ *_${prefix}tagall_*
▋┋ *_${prefix}tagall2_*
▋┋ *_${prefix}tagall3_*
▋┋ *_${prefix}tagall4_*
▋┋ *_${prefix}tagall5_*
▋┋ *_${prefix}kick @_*
▋┋ *_${prefix}salir_*
▋┋ *_${prefix}gay_*
▋┋ *_${prefix}mute_*
▋┋ *_${prefix}unmute_*
▋┋ *_${prefix}chatlist_*
▋┋ *_${prefix}blocklist_*
▋┋ *_${prefix}linkgroup_*
▋┋ *_${prefix}nsfw [1/0]_*
▋┋ *_${prefix}antitrava [1/0]_*
▋┋ *_${prefix}antilink [1/0]_*
▋┋ *_${prefix}welcome [1/0]_*
▋┋ *_${prefix}grupo [abrir/cerrar]_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑵𝑺𝑭𝑾/𝑯𝑬𝑵𝑻𝑨𝑰*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}nsfwmenu_*
▋┋ *_${prefix}nsfw_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑱𝑼𝑬𝑮𝑶𝑺*
╰──────────────────╯
▋┋ *_${prefix}charlie_*
▋┋ *_${prefix}juego_*
▋┋ *_${prefix}slot_*
▋┋ *_${prefix}reto_*
▋┋ *_${prefix}gay_*
▋┋ *_${prefix}lesbi_*
▋┋ *_${prefix}delttt_*
▋┋ *_${prefix}ruleta_*
▋┋ *_${prefix}verdad_*
▋┋ *_${prefix}apostar_*
▋┋ *_${prefix}tictactoe_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑶𝑻𝑹𝑶𝑺*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}tts es texto_*
▋┋ *_${prefix}gay_*
▋┋ *_${prefix}wame_*
▋┋ *_${prefix}frases_*
▋┋ *_${prefix}piropos_*
▋┋ *_${prefix}getpic @_*
▋┋ *_${prefix}getbio @_*
▋┋ *_${prefix}wallpaper_*
▋┋ *_${prefix}wpanime_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
╭──────────────────╮
*➼✰︙𝑴𝑬𝑵𝑼 𝑫𝑬 𝑪𝑶𝑵𝑭𝑼*
╰──────────────────╯
■█🔥█■▰▱▰▱▰▱■█🔥█■
▋┋ *_${prefix}ban_*
▋┋ *_${prefix}block_*
▋┋ *_${prefix}unblok_*
▋┋ *_${prefix}clearall_*
▋┋ *_${prefix}salir_*
■█🔥█■▰▱▰▱▰▱■█🔥█■
 *┏ೋ━ೋ✧ೋ━ೋ┓*
     *🔥𝑪𝑶𝑵𝑭𝑼_𝑴𝑶𝑫𝑺🔥*
 *┗ೋ━ೋ✧ೋ━ೋ┛*
*■█🔥█■▰▱▰▱▰▱■█🔥█■`           
cnf.sendMessage(from, wew, image,{contextInfo: {forwardingScore : 508, isForwarded: true},sendEphemeral: true, quoted:ftoko, caption:lzain})
     break
                    
           case prefix+'trabajar':
           if (isUser2) return reply('Ya trabajaste mucho vuelve mañana')
           cnf.updatePresence(from, Presence.composing)       		                			      		
           user2.push(sender)					
           fs.writeFileSync('./database/json/user2.json', JSON.stringify(user2))	
           addKoinUser(sender, 100)
           reply(`Gracias por tu trabajo ten tu pago

-Recibiste 100 coins`)
break

case prefix+'nsfwmenu':
if (!isNsfw) return reply(mess.nsfwoff)
cnf.sendMessage(from, nsfwmenu(prefix, sender), text, {quoted: mek})
break
  


case prefix+'avatar':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			anu = await axios.get('https://nekos.life/api/v2/img/avatar')
				avatars = await getBuffer(anu.data.url)
				cnf.sendMessage(from, avatars, image, {quoted: mek, caption: 'Linda foto no?' })
			break
			    
			    case prefix+'mute':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨')
                cnf.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*silenciadozzzzzzz*')
                console.log('succes mute chat = ' + from)
                break
            case prefix+'unmute':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar el desarrollador <3*')
                cnf.modifyChat(from, ChatModification.unmute)
                reply('*Ù.Ú sus mensajes me caen denuevo*')
                console.log('succes unmute chat = ' + from)
                break
                case prefix+'antilink':
  
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                	
					if (args.length < 1) return reply('Escribe 1 para activar')

					if (Number(args[0]) === 1) {

						if (isAntiLink) return reply('Ya está activo')

						antilink.push(from)

						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))

						reply('Activado correctamente✔️')

						cnf.sendMessage(from,`Ha sido activado antilink, si mandan link serán baneados`, text)

					} else if (Number(args[0]) === 0) {

						if (!isAntiLink) return reply('Desactivado')

						var ini = antilink.indexOf(from)

						antilink.splice(ini, 1)

						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))

						reply('Desactivar correctamente ✔️')

					} else {

						reply('Escribe 1 para activar o 0 para desactivar')

					}

					break
			    case prefix+'unpin':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                cnf.modifyChat(from, ChatModification.unpin)
                reply('*abajo UnU*')
                console.log('unpin chat = ' + from)
                break
            case prefix+'pin':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                cnf.modifyChat(from, ChatModification.pin)
                reply('*Fijados UvU*')
                console.log('pinned chat = ' + from)
                break
case prefix+'anime':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            cnf.sendMessage(from,media,image,{quoted:mek,caption:'༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break


case prefix+'pussy':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkapolurru = checkATMuser(sender)
const jmomoio = [`${uaangkapolurru}`]
if (jmomoio < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
						reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			break
case prefix+'pussyimage':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkaukayrru = checkATMuser(sender)
const jmokuro = [`${uaangkaukayrru}`]
if (jmokuro < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				cnf.sendMessage(from, bufpusy, MessageType.image, {quoted: mek})
						reply('Se te cobraron 30 coins')
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break

				case prefix+'admin':
         	   case prefix+'owner':
         	   case prefix+'creator':
         	   case prefix+'creador':
         	   case prefix+'creadores':
                  cnf.sendMessage(from, {displayname: "Confu", vcard: vcard}, MessageType.contact, { quoted: mek})
                            cnf.sendMessage(from, 'El es mi creador 🥵 re secsi ᕙ( : ˘ ∧ ˘ : )ᕗ',MessageType.text, { quoted: mek} )
					break    


case prefix+'solog':
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
       const uaangkaurrkiu = checkATMuser(sender)
const jmokoio = [`${uaangkaurrkiu}`]
if (jmokoio < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

			anu = await axios.get('https://nekos.life/api/v2/img/solog')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
						reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			break
case prefix+'yuri':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkakoiurru = checkATMuser(sender)
const jmokiuo = [`${uaangkakoiurru}`]
if (jmokiuo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

			yuriz = await axios.get('https://nekos.life/api/v2/img/tits')
			bupyuri = await getBuffer(yuriz.data.url)
			cnf.sendMessage(from, bupyuri, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break
	case prefix+'anal':
	if (!isNsfw) return reply(mess.nsfwoff)
	 const uaangkkkaurru = checkATMuser(sender)
const jmobonoo = [`${uaangkkjaurru}`]
if (jmobonoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/anal')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			break		
case prefix+'pwankg':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkauruiru = checkATMuser(sender)
const jmocoo = [`${uaangkauruiru}`]
if (jmocoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pwankg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('E-error ⊙﹏⊙')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				reply('Se te cobraron 30 coins')
				fs.unlinkSync(rano)
			})
			break
case prefix+'eron':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkaumrru = checkATMuser(sender)
const jmuoo = [`${uaangkaumrru}`]
if (jmuoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			eronz = await axios.get('https://nekos.life/api/v2/img/eron')
			buferon = await getBuffer(eronz.data.url)
			cnf.sendMessage(from, buferon, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error ⊙﹏⊙')
			})
			break

case prefix+'ero':
if (!isNsfw) return reply(mess.nsfwoff)
 const uaangkaurmru = checkATMuser(sender)
const jmomo = [`${uaangkaurmru}`]
if (jmomo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			cnf.sendMessage(from, bufero, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error vuelve a intentar ⊙﹏⊙')
			})
			break
case prefix+'erok':
if (!isNsfw) return reply(mess.nsfwoff)
 const uamangkaurru = checkATMuser(sender)
const jmoDo = [`${uamangkaurru}`]
if (jmoDo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)

			eroz = await axios.get('https://nekos.life/api/v2/img/erok')
			bufero = await getBuffer(eroz.data.url)
			cnf.sendMessage(from, bufero, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('E-error vuelve a intentar ⊙﹏⊙')
			})
			break


	



case prefix+'holoero':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaullu = checkATMuser(sender)
const joda = [`${uaangkaullu}`]
if (joda < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
		holox = await axios.get('https://nekos.life/api/v2/img/holoero')
			bufholox = await getBuffer(holox.data.url)
			cnf.sendMessage(from, bufholox, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('Error 7-7..')
			})
			break
case prefix+'cum':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaukku = checkATMuser(sender)
const jodas = [`${uaangkaukku}`]
if (jodas < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
			case prefix+'nsfw':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isNsfw) return reply(`「 ❗ 」La Funcion De Nsfw Ya Esta Activada En El Grupo!!`)
				nsfw.push(from)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Activó con éxito la función NSFW en este grupo [Los comandos Hentai tienen un costo de 30 coins]`)
				} else if (Number(args[0]) === 0) {
				nsfw.splice(from, 1)
				fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función De Nsfw En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				break
            case prefix+'unreadall':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                var chats = await cnf.chats.all()
                chats.map( async ({ jid }) => {
                await cnf.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Marcados sin leer ${chats.length} chats !\`\`\``
		    await cnf.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
            case prefix+'readall':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                var chats = await cnf.chats.all()
                chats.map( async ({ jid }) => {
                await cnf.chatRead(jid)
                })
		var teks = `\`\`\`Han sido leidos ${chats.length} chats !\`\`\``
	        await cnf.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
            case prefix+'unarchiveall':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                reply('*éxito desarchivar todo el chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await cnf.chats.all()
                for (let _ of anu) {
                cnf.modifyChat(_.jid, ChatModification.unarchive)
                }
                break

					case prefix+'antilink':
if (!isGroup) return reply(mess.only.group)	 
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya estaba activo (◍•ᴗ•◍)')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se activo con exito(◍•ᴗ•◍)️')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Se desactivo con éxito la función de bienvenida en este grupo (・o・)️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    break

            case prefix+'archive':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                reply('*okey wait..*')
                console.log('chat de archivo de éxito = ' + from)
                await sleep(3000)
                cnf.modifyChat(from, ChatModification.archive)
                break
            case prefix+'delthischat':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
                reply('*éxito eliminar este chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                cnf.modifyChat(from, ChatModification.delete)
                break
                
case prefix+'del':  
case prefix+'d':  
case prefix+'delete':  
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if (!isUser) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)	
				    Satanica.deleteMessage(from, { id: nay.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				    break
case prefix+'toimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			if (!isQuotedSticker) return reply('Responde a un sticker!')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await cnf.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Hubo un fallo, por favor intentalo de nuevo ')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑')
			fs.unlinkSync(ran)
			})
			break
case prefix+'setthumb':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
		      if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await cnf.downloadMediaMessage(boij)
			fs.writeFileSync(`./sticker/thumb.jpeg`, delb)
			fakestatus('Aqui ta onichan ')
        	} else {
            reply(`envia imagen con comando ${prefix}sethumb`)
          	}
			break
                
                case prefix+'setfakeimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
	    if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await cnf.downloadMediaMessage(boij)
			fs.writeFileSync(`./sticker/fake.jpeg`, delb)
			fakestatus('Hecho mi amo 7~7')
        	} else {
            reply(`Envía una imagen con ${prefix}sethumb`)
          	}
			break
                case prefix+'shutdown':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!mek.key.fromMe) return reply('*𝐬𝐨𝐥𝐨 𝐪𝐮𝐢𝐞𝐧 𝐝𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐨 𝐞𝐥 𝐛𝐨𝐭 𝐩𝐮𝐞𝐝𝐞 𝐮𝐬𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐚𝐦𝐢𝐤𝐨 𝐮𝐧𝐮*')
	        await cnf.sendMessage(from, `Bye...\n_༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑ apagandose..._`, text,{quoted : freply})
		await sleep(3000)
                cnf.close()
		break
                
           
			
			

  case prefix+'setleave':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					cnf.sendMessage(from,`\`\`\`Leave cambiado exitosamente a : ${body.slice(10)}\`\`\``, text,{quoted : freply})
				break 
				
				case prefix+'setpromote':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					cnf.sendMessage(from,`\`\`\`La promoción se ha cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					case prefix+'setdemote':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					cnf.sendMessage(from ,`\`\`\`Degradar cambiado correctamente a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
				case prefix+'setbodymenu':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				  if (args.length < 1) return reply('*_EJEMPLO :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Ejemplos de uso : .setbodymenu *')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					cnf.sendMessage(from ,`\`\`\`Body menu cambiado exitosamente a : ${body.slice(13)}\`\`\``, text,{quoted : freply})
				break 
				
					case prefix+'setwelcome':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					  if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					cnf.sendMessage(from ,`\`\`\`Bienvenida se ha cambiado con éxito a : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
			  case prefix+'setreply':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			    if (args.length < 1) return reply('*Y el texto? Ù.ú?*')
                    cnf.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					fake = body.slice(10)
					cnf.sendMessage(from, `reply cambiado exitosamente a : ${fake}`,text,{quoted : freply})
				break 
				
				case prefix+'setthumb':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/cnf.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				cnf.sendMessage(from, `\`\`\`Cambiar miniaturas con éxito\`\`\``, MessageType.text, { quoted: freply })
				break
				
				case prefix+'getbio':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await cnf.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("No tiene Biografía /.\ ")
                }
                break
				
				case prefix+'getpic':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await cnf.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					cnf.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: `༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑`})}
				break
				
				  case prefix+'join':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                           if (!q) return reply('Ingrese el enlace del grupo')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto!')
                           var response = await cnf.acceptInvite(codeInvite);
                           console.log(response);
                           break
                           
                                
       case prefix+'neko':

    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
cnf.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
cnf.sendMessage(from, pok, image, {
  quoted: mek, caption: `༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑`
})

} catch {
  reply(mess.ferr)
}
break


				
				case prefix+'block':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				 cnf.updatePresence(from, Presence.composing) 
				 cnf.chatRead (from)
				if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
					if (!isGroup) return reply(mess.groupo())
					cnf.blockUser (`${body.slice(7)}@c.us`, "add")
					cnf.sendMessage(from, `*Se bloqueo a* ${body.slice(7)}@c.us`, text)
					break
				
				case prefix+'blocklist':
				  case prefix+'listblock':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					teks = 'Personas que intentaron llamarme oh que mi dueño quiso bloquear\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					cnf.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
			
					case prefix+'exif':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
	        if (!mek.key.fromMe) return reply('*Solo mi creador puede usar ese comando UwU*')
	        if (args.length < 1) return reply(`Usar ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Usar ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('Listo UvU')
	        break
	        
	        case prefix+'colong':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await cnf.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case prefix+'take':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isQuotedSticker) return reply(`Responder a un sticker con *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
					
					case prefix+'fdeface':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					//imgbbb = require('imgbb-uploader')
					//run = getRandom('.jpeg')
					//encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
					//media = await lolteam.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify('./media/cnf.jpeg').replace(/\"/gi, ''))

					cnf.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					
					
case prefix+'attp':
				if (args.length < 1) return reply(`_Y el texto? Ù.ú_\n*ejemplo ${prefix}attp satan Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				cnf.sendMessage(from, attp2, sticker, {quoted: freply})
				break
				
		
                    
                    case prefix+'swm':
                    case prefix+'stickerwm':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Confu|Mods`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await cnf.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            cnf.sendMessage(from, ini_buff, sticker, { quoted: freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`responde a un sticker con ${prefix + command} o etiquetar imágenes que ya se han enviado`)
                    }
                    break
                    
  						  	case prefix+'stickerwm':
						  	case prefix+'stikerwm':
						  	case prefix+'sticker':
						  	case prefix+'s':
						  	case prefix+'stiker':
						  	case prefix+'stike':
						  	case prefix+'sticke':
						  	case prefix+'stikewm':
						  	case prefix+'stikr':
						  	case prefix+'stker':						  
				case prefix+'stiker':
				case prefix+'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Error`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Error')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buff = fs.readFileSync(ran)
								cnf.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Etiqueta una imagen oh video`)
					}
					break
				
					
					case prefix+'ping':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ Encendido
├ *Nombre : ༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑*
├ *Runtime :*
├  ${kyun(uptime)}
├ *Speed :*
├  ${latensip.toFixed(4)} Second
└─────────────`
			             cnf.sendMessage(from, anjink, text,{quoted : freply})
			           break
			           case prefix+'info':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
  me = cnf.user
  uptime = process.uptime()
  teks = `┌─────┤𝐈𝐍𝐅𝐎├─────
├‣ *Nombre* : 
├‣༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆
│
├‣ *Número del bot* : 
├‣@${me.jid.split('@')[0]}
│
├‣ *Dueño* : ConfuMods 
├‣ *Prefijo* : ${prefix}
│
├‣ *Usuarios bloqueados* : 
├‣${blocked.length}
│
├‣ *Tiempo activo* : 
├‣${kyun(uptime)}
│
├‣ *Total de chats* : 
├‣${totalchat.length}
│
├‣ *YT* : 
├‣youtube.com/c/ConfuMods
└─────────────`
  weww = fs.readFileSync(`./media/cnf.jpeg`)
  cnf.sendMessage(from, weww, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break

case  'nekopoi':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauou = checkATMuser(sender)
const jñño = [`${uaangkauou}`]
if (jñño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+'telesticker':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://lolhuman.herokuapp.com/api/telestick?apikey=${LolKey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        cnf.sendMessage(from, ini_buffer, sticker)
                    }
                    break
case prefix+'emoji':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			if (!q) return fakegroup('emoji UnU?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case  'pussy':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
    const uaangkauup = checkATMuser(sender)
const jos = [`${uaangkauup}`]
if (jos < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)  
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'pussyimage':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauum = checkATMuser(sender)
const jop = [`${uaangkauum}`]
if (jop < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
  pusiimg = await axios.get('https://nekos.life/api/v2/img/pussy_jpg')
			bufpusy = await getBuffer(pusiimg.data.url)
				cnf.sendMessage(from, bufpusy, MessageType.image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'oppai':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
	 const uaangkauuuiu = checkATMuser(sender)
const joll = [`${uaangkauuuiu}`]
if (joll < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
					opai = await axios.get('https://nekos.life/api/v2/img/tits')
			opaiz = await getBuffer(opai.data.url)
			cnf.sendMessage(from, opaiz, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'feetg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'bj':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'ero':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauvu = checkATMuser(sender)
const jokk = [`${uaangkauvu}`]
if (jokk < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			eroz = await axios.get('https://nekos.life/api/v2/img/ero')
			bufero = await getBuffer(eroz.data.url)
			cnf.sendMessage(from, bufero, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'erokemo':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaquu = checkATMuser(sender)
const jok = [`${uaangkaquu}`]
if (jok < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			erokz = await axios.get('https://nekos.life/api/v2/img/erokemo')
			erokzs = await getBuffer(erokz.data.url)
			cnf.sendMessage(from, erokzs, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'eroyuri':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			eroyuriz = await axios.get('https://nekos.life/api/v2/img/eroyuri')
			buferoyu = await getBuffer(opai.data.url)
			cnf.sendMessage(from, buferoyu, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7')
			})
			break
case  'tickle':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/tickle')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case prefix+'wallpaperanime':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			wanime = await axios.get('https://nekos.life/api/v2/img/wallpaper')
			bufwanime = await getBuffer(wanime.data.url)
			cnf.sendMessage(from, bufwanime, image, { quoted: mek })
			.catch(err => {
			return('Anuncio con errores de nuevo intente..')
			})
			break


case  'femdom':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      anu = await axios.get('https://nekos.life/api/v2/img/femdom')
			bupemdom = await getBuffer(anu.data.url)
				cnf.sendMessage(from, bupemdom, image, {quoted: mek})
			.catch(err => {
			return('Error 7-7.')
			})
			break
case  'futanari':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauoou = checkATMuser(sender)
const joj = [`${uaangkauoou}`]
if (joj < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			futan = await axios.get('https://nekos.life/api/v2/img/futanari')
			futanz = await getBuffer(futan.data.url)
			cnf.sendMessage(from, futanz, image, { quoted: mek, caption: 'Se te cobraron 30 coins'})
			break
case  'h':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
   const uaangkaupppu = checkATMuser(sender)
const jno = [`${uaangkaupppu}`]
if (jno < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
          ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/les')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'trap':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			trapx = await axios.get('https://nekos.life/api/v2/img/tits')
			traps = await getBuffer(trapx.data.url)
			cnf.sendMessage(from, traps, image, { quoted: mek })
			.catch(err => {
			return('Error 7-7.')
			})
			break
			
					case prefix+'gay':					 
					const gay =['Eres 0% gay' , 'Eres 1% gay' , 'Eres 2% gay' , 'Eres 3% gay' , 'Eres 4% gay' , 'Eres 5% gay' , 'Eres 6% gay' , 'Eres 7% gay' , 'Eres 8% gay' , 'Eres 9% gay' , 'Eres 10% gay' , 'Eres 11% gay' , 'Eres 12% gay' , 'Eres 13% gay' , 'Eres 14% gay' , 'Eres 15% gay' , 'Eres 16% gay' , 'Eres 17% gay' , 'Eres 18% gay' , 'Eres 19% gay' , 'Eres 20% gay' , 'Eres 21% gay' , 'Eres 22% gay' , 'Eres 23% gay' , 'Eres 24% gay' , 'Eres 25% gay' , 'Eres 26% gay' , 'Eres 27% gay' , 'Eres 28% gay' , 'Eres 29% gay' , 'Eres 30% gay' , 'Eres 31% gay' , 'Eres 32% gay' , 'Eres 33% gay' , 'Eres 34% gay' , 'Eres 35% gay' , 'Eres 36% gay' , 'Eres 37% gay' , 'Eres 38% gay' , 'Eres 39% gay' , 'Eres 40% gay' , 'Eres 41% gay' , 'Eres 42% gay' , 'Eres 43% gay' , 'Eres 44% gay' , 'Eres 45% gay' , 'Eres 46% gay' , 'Eres 47% gay' , 'Eres 48% gay' , 'Eres 49% gay' , 'Eres 50% gay' , 'Eres 51% gay' , 'Eres 52% gay' , 'Eres 53% gay' , 'Eres 54% gay' , 'Eres 55% gay' , 'Eres 56% gay' , 'Eres 57% gay' , 'Eres 58% gay' , 'Eres 59% gay' , 'Eres 60% gay' , 'Eres 61% gay' , 'Eres 62% gay' , 'Eres 63% gay' , 'Eres 64% gay' , 'Eres 65% gay' , 'Eres 66% gay' , 'Eres 67% gay' , 'Eres 68% gay' , 'Eres 69% gay' , 'Eres 70% gay' , 'Eres 71% gay' , 'Eres 72% gay' , 'Eres 73% gay' , 'Eres 74% gay' , 'Eres 75% gay' , 'Eres 76% gay' , 'Eres 77% gay' , 'Eres 78% gay' , 'Eres 79% gay' , 'Eres 80% gay' , 'Eres 81% gay' , 'Eres 82% gay' , 'Eres 83% gay' , 'Eres 84% gay' , 'Eres 85% gay' , 'Eres 86% gay' , 'Eres 87% gay' , 'Eres 88% gay' , 'Eres 89% gay' , 'Eres 90% gay' , 'Eres 91% gay' , 'Eres 92% gay' , 'Eres 93% gay' , 'Eres 94% gay' , 'Eres 95% gay' , 'Eres 96% gay' , 'Eres 97% gay' , 'Eres 98% gay' , 'Eres 99% gay' , 'Eres 100% gay']									
					const gai = gay[Math.floor(Math.random() * gay.length)]
								wiw = fs.readFileSync(`./src/5.jpg`)
										cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*Que tan gay eres*\n\n'+ gai })
									break
			
			
case  'pat':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pat')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'Boobs':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauccu = checkATMuser(sender)
const jmo = [`${uaangkauccu}`]
if (jmo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/boobs')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			break
case  'blowjob':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauyyu = checkATMuser(sender)
const jomm = [`${uaangkauyyu}`]
if (jomm < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			blowz = await axios.get('https://nekos.life/api/v2/img/blowjob')
			bufblowz = await getBuffer(blowz.data.url)
			cnf.sendMessage(from, bufblowz, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
	case  'hentai':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
	if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaurru = checkATMuser(sender)
const jmoo = [`${uaangkaurru}`]
if (jmoo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
			hentaiz = await axios.get('https://nekos.life/api/v2/img/hentai')
			bufhtz = await getBuffer(hentaiz.data.url)
			cnf.sendMessage(from, bufhtz, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
			.catch(err => {
			return('Error 7-7.')
			})
			break
break
					case prefix+'patas':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkaxuu = checkATMuser(sender)
const jou = [`${uaangkaxuu}`]
if (jou < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animefeets`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
				   break
			           case prefix+'term': 
case prefix+'exec':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return cnf.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
cnf.sendMessage(from, stdout, text, term)
}
})
break
case prefix+'join':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Ingrese el enlace del grupo')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('asegúrese de que el enlace sea correcto T-T!')
            var response = await cnf.acceptInvite(codeInvite)
            fakestatus('Lito')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
		
					  
					  case prefix+'kontak':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('numero invalido UnU'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            cnf.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
                            case prefix+'randomhentai': 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  						
							if (!isNsfw) return reply('❌ *NSFW Desactivado* ❌')
 const uaangkauteamou = checkATMuser(sender)
const joik = [`${uaangkauteamou}`]
if (joik < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
						
						break
					
					case prefix+'nsfwboobs': 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
						if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
							if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
 const uaangkauuiu = checkATMuser(sender)
const joikk = [`${uaangkauuiu}`]
if (joikk < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/biganimetiddies`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
						
						break
					case prefix+'nsfwblowjob':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
						if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
							if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
 const uaangkauiou = checkATMuser(sender)
const jookk = [`${uaangkauiou}`]
if (jookk < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
							buffer = await getBuffer(res.result)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
						
						break
					case prefix+'nsfwneko':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
						if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
							if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
 const uaangkauopu = checkATMuser(sender)
const jooll = [`${uaangkauopu}`]
if (jooll < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)	
													res = await fetchJson(`https://api.computerfreaker.cf/v1/neko`, {method: 'get'})
							buffer = await getBuffer(res.result)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
						
						break
			     case prefix+'kontag':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await cnf.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${cnf.user.jid.split('@')[0]}:${cnf.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				cnf.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/cnf.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case prefix+'hidetag':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await cnf.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					cnf.sendMessage(from, options, text,{quoted : freply})
					break
					
					
				
					break
				//tobz 
				
				
			           case prefix+'sticktag':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                                        if (!isQuotedSticker) return reply('y el sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await cnf.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await cnf.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        cnf.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break

case prefix+'itsme':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
ppimg = 'https://i.ibb.co/Rgn07Kt/20210702-082122.jpg'
  teks = `‣ *Nombre* : ${mdata.subject}
  ‣ *Número* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  cnf.sendMessage(from, its, image, {quoted: mek, caption: teks})
  break
					case prefix+'telesticker':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://lolhuman.herokuapp.com/api/telestick?apikey=${LolKey}&url=${ini_url}`)
                    ini_sticker = ini_url.result.sticker
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        cnf.sendMessage(from, ini_buffer, sticker)
                    }
                    break
					case prefix+'gay':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
  if (args.length < 1) return reply('Escribe el nombre')
  cnf.updatePresence(from, Presence.composing)
  random = `${Math.floor(Math.random() * 100)}`
  hasil = `Tu : *${body.slice(6)}*\n\nEres : *${random}% Gay*`
  reply(hasil)
  break
					
					case prefix+'ranklindo':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
          if (!isGroup) return reply(mess.only.group)
          tuh = fs.readFileSync(`./src/lindos.jpeg`)
          jds = []
          const YDY = groupMembers
          const JSJ = groupMembers
          const TAT = groupMembers
          const SG = YDY[Math.floor(Math.random() * YDY.length)]           
          const SOD = JSJ[Math.floor(Math.random() * JSJ.length)]
          const HDH = TAT[Math.floor(Math.random() * TAT.length)]
          AJ = `●❯──────────❮●\n😳𝚁𝚊𝚗𝚔 𝙳𝚎 𝙻𝚘𝚜 𝙼𝚊𝚜 𝙻𝚒𝚗𝚍𝚘𝚜😳\n@${SG.jid.split('@')[0]} \n😳\n@${SOD.jid.split('@')[0]}\n😳\n@${HDH.jid.split('@')[0]}\n●❯──────────❮●`                  
          jds.push(SG.jid)
          jds.push(SOD.jid)
          jds.push(HDH.jid)
          cnf.sendMessage(from, tuh, MessageType.image, { quoted: mek, caption: `${AJ}`, contextInfo: { forwardingScore: 1000, isForwarded: true , mentionedJid: jds}}) 
        break

					case prefix+'ahegao':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
 const uaangkauopou = checkATMuser(sender)
const jouuy = [`${uaangkauopou}`]
if (jouuy < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/ahegao`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
						
						break
					case prefix+'nsfwthighs':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
						if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
							if (!mek.key.fromMe) return reply('*Este comando solo lo puede Usar mi creadora*')
 const uaangkauolou = checkATMuser(sender)
const jojjj = [`${uaangkauolou}`]
if (jojjj < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30)
							res = await fetchJson(`https://meme-api.herokuapp.com/gimme/animethighss`, {method: 'get'})
							buffer = await getBuffer(res.url)
							cnf.sendMessage(from, buffer, image, {quoted: mek, caption: 'Se te cobraron 30 coins'})
						
						break

					case prefix+'imgtag':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await cnf.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await cnf.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        cnf.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag a una imagen enviada`)
                    }
                    break
                    
  
 
        
    		        case prefix+'linkgroup':
				case prefix+'linkgrup':
				case prefix+'linkgc':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await cnf.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink del grupo : *${groupName}*`
				    cnf.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        case prefix+'grup':
        case prefix+'grupo':
					case prefix+'gc':
					case prefix+'group':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'abrir') {
					    reply(`\`\`\`✓abierto con éxito\`\`\` *${groupMetadata.subject}*`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'cerrar') {
						reply(`\`\`\`✓cerrado con éxito\`\`\` *${groupMetadata.subject}*`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case prefix+'chatlist':
				case prefix+'cekchat':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					cnf.updatePresence(from, Presence.composing)
					cnf.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
					break
					
				case prefix+'listadmins':
				case prefix+'listadmin':
				case prefix+'adminlist':
				case prefix+'adminslist':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de facheritos *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case prefix+'promote':
				case prefix+'pm':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = 'Pedido recibido, te conviertes en administrador :\n'
				for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
				}
				mentions(teks, mentioned, true)
				cnf.groupMakeAdmin(from, mentioned)
			    } else {
				mentions(`Ahora eres admin U~U ✔️') @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
				cnf.groupMakeAdmin(from, mentioned)
				}
				break
                 case prefix+'demote':
			     case prefix+'dm': 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
			     if (!isGroupAdmins) return reply(mess.only.admin)
			     if (!isGroup) return reply(mess.only.group)
			     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			     if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				if (mentioned.length > 1) {
				teks = 'Pedido recibido, no eres administrador :\n'
				for (let _ of mentioned) {
				teks += `@${_.split('@')[0]}\n`
				}
				mentions(teks, mentioned, true)
				cnf.groupDemoteAdmin(from, mentioned)
				} else {
				mentions(`Okey Ahora Eres adm ~ UwU ')@${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
				cnf.groupDemoteAdmin(from, mentioned)
				}
				break
	 	case prefix+'halloween':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const loluaangkauuuuuu = checkATMuser(sender)
const loljñññño = [`${loluaangkauuuuuu}`]
if (loljñññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
	confu = args.join(' ')
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${confu}&apikey=Ikyy69`)
reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
      break
      
      case prefix+'vampire':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const tuaangkauuuuuuu = checkATMuser(sender)
      const tjññññño = [`${tuaangkauuuuuuu}`]
      if (tjññññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
      confu = args.join(' ')
      sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
      break
      
      case prefix+'codetxt':
   	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const wuaangkauuuuuuuu = checkATMuser(sender)
      const wjñññññño = [`${wuaangkauuuuuuuu}`]
      if (wjñññññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
      confu = args.join(' ')
      sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
      break

      case prefix+'matrix':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const buaangkauuuuuuu = checkATMuser(sender)
      const bjññññño = [`${buaangkauuuuuuu}`]
      if (bjññññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
	  confu = args.join(' ')
 	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
	  break
				
	  case prefix+'googletxt':
   	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const ubaangkauuuuuuu = checkATMuser(sender)
      const jñbñññño = [`${ubaangkauuuuuuu}`]
      if (jñbñññño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
	  break
	  
	  case prefix+'spiderman':
	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuuuubu = checkATMuser(sender)
      const jññññbño = [`${uaangkauuuuuubu}`]
      if (jññññbño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 		
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${confu}&apikey=Ikyy69`)
	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
	  break
				
	  case prefix+'express':
   	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuumuuu = checkATMuser(sender)
      const jññññmño = [`${uaangkauuuumuuu}`]
      if (jññññmño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	 
      confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${confu}&apikey=Ikyy69`)
	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
	  break
				
	  case prefix+'dance':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuuiuuu = checkATMuser(sender)
      const jñññññuo = [`${uaangkauuuuiuuu}`]
      if (jñññññuo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 		
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${confu}&apikey=Ikyy69`)
	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')	
	  break
				
	  case prefix+'blackbird':
	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuuuussu = checkATMuser(sender)
      const jññññssño = [`${uaangkauuuuuussu}`]
      if (jññññssño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 	
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${confu}&apikey=Ikyy69`)
	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
	  break
	 
	  case prefix+'text3d':
 	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuyuuuuu = checkATMuser(sender)
      const jñññññzo = [`${uaangkauuyuuuuu}`]
      if (jñññññzo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 		
	  confu = args.join(' ')
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${confu}&apikey=Ikyy69`)
  	  reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')		
	  break
	
      case prefix+'warrior':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkapouuuuuuu = checkATMuser(sender)
      const jñññklñño = [`${uaangkapouuuuuuu}`]
      if (jñññklñño < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30) 		
      confu = args.join(' ')
      sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${confu}&apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')	
      break

      case prefix+'loli':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuu = checkATMuser(sender)
      const jño = [`${uaangkauuu}`]
      if (jño < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
	  anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/randomloli?apikey=Ikyy69`)
      buffer = await getBuffer(anu.link)
	  cnf.sendMessage(from, buffer, image, {
      quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  break

	  case prefix+'waifu':
	  if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const uaangkauuuuu = checkATMuser(sender)
      const jññpo = [`${uaangkauuuuu}`]
      if (jññpo < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30)
	  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/sfw/neko?apikey=Ikyy69`)
      reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬')
	  break
	
case prefix+'shotowp':
case prefix+'sʜᴏᴛᴏᴡᴘ':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const showp = checkATMuser(sender)
      const towp = [`${showp}`]
      if (towp < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
const sho =['https://i.ibb.co/k1Wxrwz/16.jpg','https://i.ibb.co/8NsKsMX/9.jpg','https://i.ibb.co/0cDQDLk/17.jpg','https://i.ibb.co/1nD0C4S/8.jpg','https://i.ibb.co/FkQBCtk/44.jpg','https://i.ibb.co/h7qJvLb/15.jpg','https://i.ibb.co/2cV793H/69.jpg','https://i.ibb.co/rwn9JWf/48.jpg','https://i.ibb.co/XtFKmBV/68.jpg','https://i.ibb.co/bB4Bzh0/47.jpg','https://i.ibb.co/JnPFnx2/70.jpg','https://i.ibb.co/g3fJ69R/7.jpg','https://i.ibb.co/RDwCzQH/49.jpg','https://i.ibb.co/3cfrjpt/72.jpg','https://i.ibb.co/hR4ZdFN/71.jpg','https://i.ibb.co/svGrfqL/28.jpg','https://i.ibb.co/j67Kfjs/30.jpg','https://i.ibb.co/Vx2dNN4/54.jpg','https://i.ibb.co/z4tGCRj/3.jpg','https://i.ibb.co/YQx9BW7/46.jpg','https://i.ibb.co/hMchk3N/45.jpg','https://i.ibb.co/tLyf6wd/14.jpg','https://i.ibb.co/hmGWN3W/5.jpg','https://i.ibb.co/StpLqTQ/31.jpg','https://i.ibb.co/nwm2YSB/38.jpg','https://i.ibb.co/5h4GnKL/42.jpg','https://i.ibb.co/xsdktYP/25.jpg','https://i.ibb.co/3k4zWKM/39.jpg','https://i.ibb.co/h7FF1W6/60.jpg','https://i.ibb.co/yfGx3C5/37.jpg','https://i.ibb.co/1MQVqbL/6.jpg','https://i.ibb.co/sPDwwT9/40.jpg','https://i.ibb.co/tmPc4p2/4.jpg','https://i.ibb.co/wWJtysV/74.jpg','https://i.ibb.co/LJP6TSt/73.jpg','https://i.ibb.co/2sJqmp1/41.jpg','https://i.ibb.co/9NFcMT3/57.jpg']
let to = sho[Math.floor(Math.random() * sho.length)]
shoto = await getBuffer(to)
cnf.sendMessage(from, shoto, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
break
		
case prefix+'saku':
case prefix+'sakur':
case prefix+'sakura':
case prefix+'sak':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const sakuu = checkATMuser(sender)
      const raa = [`${sakuu}`]
      if (raa < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
const saku =['https://i.ibb.co/tCjfyP1/42.jpg','https://i.ibb.co/QDwhvmd/37.jpg','https://i.ibb.co/XsV6JMF/15.jpg','https://i.ibb.co/51kyLsw/36.jpg','https://i.ibb.co/YRYHKmG/14.jpg','https://i.ibb.co/tm0NYYM/39.jpg','https://i.ibb.co/G5twXCz/17.jpg','https://i.ibb.co/jDQG3KL/16.jpg','https://i.ibb.co/N1MsmBg/38.jpg','https://i.ibb.co/x226p3B/33.jpg','https://i.ibb.co/kJ0kvkK/32.jpg','https://i.ibb.co/KKtQCv5/35.jpg','https://i.ibb.co/6NFfgYD/13.jpg','https://i.ibb.co/FBV26M5/12.jpg','https://i.ibb.co/4V4bNhv/34.jpg','https://i.ibb.co/2ZtKK7Y/3.jpg','https://i.ibb.co/mSsFYpp/19.jpg','https://i.ibb.co/99yhr61/41.jpg','https://i.ibb.co/wM0wpph/18.jpg','https://i.ibb.co/NSdt9M2/40.jpg','https://i.ibb.co/5GsQ0M0/21.jpg','https://i.ibb.co/nD3fXdp/20.jpg','https://i.ibb.co/kKzsVC2/26.jpg','https://i.ibb.co/9TLrHKq/4.jpg','https://i.ibb.co/dLd11N2/25.jpg','https://i.ibb.co/xHcBCF6/1.jpg','https://i.ibb.co/XScSFRt/28.jpg','https://i.ibb.co/6mkfG4k/6.jpg','https://i.ibb.co/f8X0QxH/5.jpg','https://i.ibb.co/xMDxFhW/27.jpg','https://i.ibb.co/BsGDBM9/22.jpg','https://i.ibb.co/zP3yPvQ/44.jpg','https://i.ibb.co/rtsrbLw/43.jpg','https://i.ibb.co/KmwN3jq/2.jpg','https://i.ibb.co/xXGSvLf/46.jpg','https://i.ibb.co/Jr6QGh7/24.jpg','https://i.ibb.co/MfKYGfP/45.jpg','https://i.ibb.co/G0kXbvR/23.jpg','https://i.ibb.co/nRDZpHx/11.jpg','https://i.ibb.co/hBrPSrb/8.jpg','https://i.ibb.co/RCP18Qd/30.jpg','https://i.ibb.co/DD3jjCV/7.jpg','https://i.ibb.co/YD54YbH/29.jpg','https://i.ibb.co/JQ6Q7vS/10.jpg','https://i.ibb.co/B2bDnd4/31.jpg','https://i.ibb.co/HY0mxbt/9.jpg']
let ra = saku[Math.floor(Math.random() * saku.length)]
sakura = await getBuffer(ra)
cnf.sendMessage(from, sakura, image, {quote: me, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
break

	case prefix+'sasuke':
	case prefix+'sasuk':
	case prefix+'sasu':
	case prefix+'sas':
	case prefix+'sa':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const sas = checkATMuser(sender)
      const sask = [`${sas}`]
      if (sask < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
const sasu =['https://i.ibb.co/4Zhb1Tf/27.jpg','https://i.ibb.co/SKF8ns4/5.jpg','https://i.ibb.co/Tg7Z4QR/4.jpg','https://i.ibb.co/2kFP3VQ/26.jpg','https://i.ibb.co/nmQ0b46/29.jpg','https://i.ibb.co/99SdFrN/7.jpg','https://i.ibb.co/9Z8fqC6/6.jpg','https://i.ibb.co/2ZKtkM1/28.jpg','https://i.ibb.co/6rybDYJ/23.jpg','https://i.ibb.co/DwfFdw2/3.jpg','https://i.ibb.co/hy6gCpF/22.jpg','https://i.ibb.co/k8Rj6nf/25.jpg','https://i.ibb.co/PChJBFG/3.jpg','https://i.ibb.co/qWQT9cB/24.jpg','https://i.ibb.co/GJNNGw1/2.jpg','https://i.ibb.co/bQvmWrt/42.jpg','https://i.ibb.co/2s0JMsL/9.jpg','https://i.ibb.co/10KZf8h/30.jpg','https://i.ibb.co/DYq8FjN/41.jpg','https://i.ibb.co/KGvTPLs/8.jpg','https://i.ibb.co/HVvFcNc/10.jpg','https://i.ibb.co/QQwFV9K/39.jpg','https://i.ibb.co/7gHhjq9/38.jpg','https://i.ibb.co/p4C9F82/40.jpg','https://i.ibb.co/jrcm2nD/21.jpg','https://i.ibb.co/jbh0Hvf/16.jpg','https://i.ibb.co/17dRPSF/15.jpg','https://i.ibb.co/TK4SQyn/18.jpg','https://i.ibb.co/WHJS8xm/17.jpg','https://i.ibb.co/ZS7kqLM/12.jpg','https://i.ibb.co/VNbzXzG/11.jpg','https://i.ibb.co/pr3cmhX/14.jpg','https://i.ibb.co/cQQd5ZF/13.jpg','https://i.ibb.co/0f3tDsg/35.jpg','https://i.ibb.co/TLFwCWP/34.jpg','https://i.ibb.co/JQGPj6X/37.jpg','https://i.ibb.co/GTSQBZq/36.jpg','https://i.ibb.co/fHp5qjG/31.jpg','https://i.ibb.co/mDhgkrm/20.jpg','https://i.ibb.co/0yjLHK1/19.jpg','https://i.ibb.co/bb7KpjF/33.jpg','https://i.ibb.co/74xzZ7v/32.jpg']
let ke = sasu[Math.floor(Math.random() * sasu.length)]
      sasuke = await getBuffer(ke)
cnf.sendMessage(from, sasuke, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
break
	
case prefix+'hinata':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const hin = checkATMuser(sender)
      const hiiin = [`${hin}`]
      if (hiiin < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
const hi =['https://i.ibb.co/9rCvP8r/17.jpg','https://i.ibb.co/fdfHsvC/16.jpg','https://i.ibb.co/yqVzKwz/15.jpg','https://i.ibb.co/nsYzNVY/37.jpg','https://i.ibb.co/1qBSX68/14.jpg','https://i.ibb.co/x23ZS3m/36.jpg','https://i.ibb.co/9YW7H64/38.jpg','https://i.ibb.co/R6X2jFN/2.jpg','https://i.ibb.co/vkXYxQB/24.jpg','https://i.ibb.co/H4Vyy7m/1.jpg','https://i.ibb.co/KWh45C6/23.jpg','https://i.ibb.co/LS3MHDR/22.jpg','https://i.ibb.co/KVVwvkR/21.jpg','https://i.ibb.co/3Bsc4WB/20.jpg','https://i.ibb.co/87T9WSz/19.jpg','https://i.ibb.co/smpVwmM/18.jpg','https://i.ibb.co/s2f15XK/40.jpg','https://i.ibb.co/tBVm0g0/39.jpg','https://i.ibb.co/t8BTdYz/7.jpg','https://i.ibb.co/3RZfKrc/6.jpg','https://i.ibb.co/nR6RgQm/5.jpg','https://i.ibb.co/Tw184KP/27.jpg','https://i.ibb.co/Y04L6YH/4.jpg','https://i.ibb.co/6DjvwQj/26.jpg','https://i.ibb.co/t4jCPqS/3.jpg','https://i.ibb.co/WyD7LrT/25.jpg','https://i.ibb.co/B3S6Vwq/13.jpg','https://i.ibb.co/r0rkhhZ/35.jpg','https://i.ibb.co/bmCkXqm/12.jpg','https://i.ibb.co/ZJjJMPj/34.jpg','https://i.ibb.co/LQG8jrP/11.jpg','https://i.ibb.co/f9yGMFj/33.jpg','https://i.ibb.co/25Mftyb/10.jpg','https://i.ibb.co/C2vG2HJ/32.jpg','https://i.ibb.co/BVRFVwy/9.jpg','https://i.ibb.co/1ZXw3gY/31.jpg','https://i.ibb.co/7S0Tnht/8.jpg','https://i.ibb.co/GC1zzxh/30.jpg','https://i.ibb.co/80JkbbD/29.jpg','https://i.ibb.co/G5qKBmR/28.jpg']
let na = hi[Math.floor(Math.random() * hi.length)]
      ta = await getBuffer(na)
cnf.sendMessage(from, ta, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
break

case prefix+'naruto':
case prefix+'narut':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const nar = checkATMuser(sender)
      const nart = [`${nar}`]
      if (nart < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
      const naru =['https://i.ibb.co/cYZvB9F/1.jpg','https://i.ibb.co/KFqs2FS/4.jpg','https://i.ibb.co/gZxR37C/2.jpg','https://i.ibb.co/f4JWgBD/31.jpg','https://i.ibb.co/NKwRWPF/19.jpg','https://i.ibb.co/pKJpdss/30.jpg','https://i.ibb.co/DwVLMCr/33.jpghttps://i.ibb.co/MkNxxg4/32.jpg','https://i.ibb.co/nLdhqvq/16.jpg','https://i.ibb.co/LRH7qdn/15.jpg','https://i.ibb.co/vJ92njj/18.jpg','https://i.ibb.co/nQfn5WX/17.jpg','https://i.ibb.co/3StR0Qv/39.jpg','https://i.ibb.co/jgFk76F/38.jpg','https://i.ibb.co/1rQMPPF/35.jpg','https://i.ibb.co/kM7bk71/34.jpg','https://i.ibb.co/Wz6BCZL/37.jpg','https://i.ibb.co/LJjdtwk/36.jpg','https://i.ibb.co/Kw7LZ0N/12.jpg','https://i.ibb.co/Wp1pkq9/11.jpg','https://i.ibb.co/GnjhHrc/14.jpg','https://i.ibb.co/mhVx1dv/13.jpg','https://i.ibb.co/NFqvGGj/10.jpg','https://i.ibb.co/Np2zf1b/42.jpg','https://i.ibb.co/vX5gCGx/20.jpg','https://i.ibb.co/NC2qH6Q/9.jpg','https://i.ibb.co/zZcTDTY/41.jpg','https://i.ibb.co/G7Gk3Kr/8.jpg','https://i.ibb.co/DYj1cNL/22.jpg','https://i.ibb.co/pxwd85B/43.jpg','https://i.ibb.co/dMCNCWF/21.jpg','https://i.ibb.co/Wsb6670/5.jpg','https://i.ibb.co/DwfFdw2/3.jpg','https://i.ibb.co/hFrHyDj/40.jpg','https://i.ibb.co/nfCKxS5/7.jpg','https://i.ibb.co/BPgrzgx/6.jpg','https://i.ibb.co/z2TcZ5y/28.jpg','https://i.ibb.co/LtbXzn6/27.jpg','https://i.ibb.co/C5RCwD9/29.jpg','https://i.ibb.co/z8MH4Z3/24.jpg','https://i.ibb.co/Zmzjxrd/23.jpg','https://i.ibb.co/gFh7DZj/26.jpg','https://i.ibb.co/CQVyYv0/25.jpg']
let ruto = naru[Math.floor(Math.random() * naru.length)]
      naruto = await getBuffer(ruto)
cnf.sendMessage(from, naruto, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
break

case prefix+'kanna':
case prefix+'kana':
case prefix+'kann':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const kannna = checkATMuser(sender)
      const kna = [`${kannna}`]
      if (kna < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
const kann =['https://i.ibb.co/RB2jSkr/63.jpg','https://i.ibb.co/CQSRKYc/31.jpg','https://i.ibb.co/X3sB7qK/27.jpg','https://i.ibb.co/LvdXMxH/26.jpg','https://i.ibb.co/6skvJyS/29.jpg','https://i.ibb.co/CB9RY7B/28.jpg','https://i.ibb.co/VLC0PbX/23.jpg','https://i.ibb.co/HCfjWRq/22.jpg','https://i.ibb.co/mBJN78j/25.jpg','https://i.ibb.co/6PrFv4v/24.jpg','https://i.ibb.co/bs6R87r/30.jpg','https://i.ibb.co/XLkvDdh/64.jpg','https://i.ibb.co/HqwS259/42.jpg','https://i.ibb.co/XyWDLfJ/41.jpg','https://i.ibb.co/4WyX9wn/37.jpg','https://i.ibb.co/6s6r1Yp/67.jpg','https://i.ibb.co/pfBHGZR/36.jpg','https://i.ibb.co/XjcvyBQ/39.jpg','https://i.ibb.co/R2BFDjR/38.jpg','https://i.ibb.co/NVCKyhm/33.jpg','https://i.ibb.co/23Vn5Vz/62.jpg','https://i.ibb.co/CvW0Nv9/32.jpg','https://i.ibb.co/PQ21cvK/66.jpg','https://i.ibb.co/nfDLmw4/35.jpg','https://i.ibb.co/tQFQgGw/65.jpg','https://i.ibb.co/1Q9mW1N/34.jpg','https://i.ibb.co/FhgGV0c/1.jpg','https://i.ibb.co/VY22fZ8/40.jpg','https://i.ibb.co/0VnmKb6/51.jpg','https://i.ibb.co/L80NCmb/53.jpg','https://i.ibb.co/6NDxzg4/52.jpg','https://i.ibb.co/bg8gmjL/5.jpg','https://i.ibb.co/QrzTQnW/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/sQRbbk3/47.jpg','https://i.ibb.co/tqx3nDT/50.jpg','https://i.ibb.co/zfVK5DR/7.jpg','https://i.ibb.co/WWdKJZ9/6.jpg','https://i.ibb.co/vz9sN0k/49.jpg','https://i.ibb.co/y4dPxZ4/44.jpg','https://i.ibb.co/TYDJZZY/43.jpg','https://i.ibb.co/NjZ2MYP/3.jpg','https://i.ibb.co/SJ8wbjX/46.jpg','https://i.ibb.co/cymzyW7/2.jpg','https://i.ibb.co/gRqvK4g/45.jpg','https://i.ibb.co/163wWVZ/9.jpg','https://i.ibb.co/n6p2r0M/8.jpg','https://i.ibb.co/ZxkFydr/11.jpg','https://i.ibb.co/B6wFjYs/10.jpg','https://i.ibb.co/GxBK9MN/61.jpg','https://i.ibb.co/RTRJ4T4/16.jpg','https://i.ibb.co/Qj9NWyC/59.jpg','https://i.ibb.co/KWf968b/58.jpg','https://i.ibb.co/s2ScnfN/15.jpg','https://i.ibb.co/b68MsLz/18.jpg','https://i.ibb.co/kH89t5b/17.jpg','https://i.ibb.co/3syNdWb/60.jpg','https://i.ibb.co/gRDWxnZ/55.jpg','https://i.ibb.co/BtNSZ21/12.jpg','https://i.ibb.co/dQgzSMs/54.jpg','https://i.ibb.co/Twxf36Q/14.jpg','https://i.ibb.co/gjNqLNV/57.jpg','https://i.ibb.co/fXWqCJw/56.jpg','https://i.ibb.co/2P3YyK7/13.jpg','https://i.ibb.co/jT3vdd6/20.jpg','https://i.ibb.co/c6tt70b/19.jpg','https://i.ibb.co/k5pP9kg/21.jpg']
let nna = kann[Math.floor(Math.random() * kann.length)]
      kana = await getBuffer(nna)
cnf.sendMessage(from, kana, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
break

case prefix+'waifu2':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const waifuu = checkATMuser(sender)
      const waaifu = [`${waifuu}`]
      if (waaifu < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
const wai =['https://i.ibb.co/7V5Vxs3/29.jpg','https://i.ibb.co/TRdZWMN/28.jpg','https://i.ibb.co/v1R2Bf3/27.jpg','https://i.ibb.co/BTjfFzv/26.jpg','https://i.ibb.co/KhfKkf0/25.jpg','https://i.ibb.co/RPMvd1p/24.jpg','https://i.ibb.co/tCZdnnG/23.jpg','https://i.ibb.co/X5qSqRc/22.jpg','https://i.ibb.co/wMTKc4q/31.jpg','https://i.ibb.co/Dbstb5N/30.jpg','https://i.ibb.co/TqVXWM6/32.jpg','https://i.ibb.co/tb76SDW/40.jpg','https://i.ibb.co/hX8nP8B/39.jpg','https://i.ibb.co/qnFWLrV/38.jpg','https://i.ibb.co/PYhTyZH/37.jpg','https://i.ibb.co/Lh9BLcV/36.jpg','https://i.ibb.co/rfgZNg4/35.jpg','https://i.ibb.co/PT0m3JN/34.jpg','https://i.ibb.co/mhPW0Lx/33.jpg','https://i.ibb.co/cvDSqNz/3.jpg','https://i.ibb.co/jHhDwYN/41.jpg','https://i.ibb.co/f2cy67Y/43.jpg','https://i.ibb.co/R4RPwdL/42.jpg','https://i.ibb.co/N1BsqnV/7.jpg','https://i.ibb.co/NYb19v3/51.jpg','https://i.ibb.co/LYkxMgT/6.jpg','https://i.ibb.co/hWdsCq0/50.jpg','https://i.ibb.co/bBGVMDQ/5.jpg','https://i.ibb.co/64jm4j3/49.jpg','https://i.ibb.co/MGS23Fc/48.jpg','https://i.ibb.co/NZH8mX7/4.jpg','https://i.ibb.co/h1wcZy0/47.jpg','https://i.ibb.co/qNqkZHG/1.jpg','https://i.ibb.co/bmnkJM6/46.jpg','https://i.ibb.co/Pr5rk7Z/2.jpg','https://i.ibb.co/wRFrBgw/45.jpg','https://i.ibb.co/y8NjPK2/44.jpg','https://i.ibb.co/WWHC2S2/11.jpg','https://i.ibb.co/qm0yYS8/10.jpg','https://i.ibb.co/g9xdnq5/9.jpg','https://i.ibb.co/KXcSBNC/8.jpg','https://i.ibb.co/fxYNYWM/54.jpg','https://i.ibb.co/gV5RnvJ/53.jpg','https://i.ibb.co/34CG3Nr/52.jpg','https://i.ibb.co/jh49gSJ/18.jpg','https://i.ibb.co/vcqh8xF/61.jpg','https://i.ibb.co/hD0Gf8k/17.jpg','https://i.ibb.co/QnsPDxH/60.jpg','https://i.ibb.co/SJ82nVR/16.jpg','https://i.ibb.co/9g2tFpc/59.jpg','https://i.ibb.co/BrHSN5C/15.jpg','https://i.ibb.co/p0k7Z0f/58.jpg','https://i.ibb.co/4S6p3XQ/14.jpg','https://i.ibb.co/XYC6071/57.jpg','https://i.ibb.co/M9tGFcB/13.jpg','https://i.ibb.co/y6g3062/56.jpg','https://i.ibb.co/3fR9PZZ/12.jpg','https://i.ibb.co/5WpYLz0/55.jpg','https://i.ibb.co/NWrfVRT/21.jpg','https://i.ibb.co/sPpMBHQ/20.jpg','https://i.ibb.co/R4zTJS9/19.jpg','https://i.ibb.co/NnmPsx4/65.jpg','https://i.ibb.co/Y2KfNr3/64.jpg','https://i.ibb.co/4RXd5wC/63.jpg','https://i.ibb.co/PC18ZyG/62.jpg']
let waif = wai[Math.floor(Math.random() * wai.length)]
      waifu = await getBuffer(waif)
cnf.sendMessage(from, waifu, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
break

case prefix+'loli2':
      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
      const lol = checkATMuser(sender)
      const lolo = [`${lol}`]
      if (lolo < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)
const vu =['https://i.ibb.co/8jMFJLS/22.jpg','https://i.ibb.co/pbJknt8/21.jpg','https://i.ibb.co/3frJKPK/20.jpg','https://i.ibb.co/WgkfC3Q/63.jpg','https://i.ibb.co/zF0fqgC/29.jpg','https://i.ibb.co/KXYsk9C/62.jpg','https://i.ibb.co/jfvgcyH/28.jpg','https://i.ibb.co/9wL1fcL/61.jpg','https://i.ibb.co/7yyB3vZ/27.jpg','https://i.ibb.co/XSJTTj5/60.jpg','https://i.ibb.co/Y0zdDjr/26.jpg','https://i.ibb.co/m9RKKr8/25.jpg','https://i.ibb.co/Gnpwyw5/24.jpg','https://i.ibb.co/vJtTs6d/23.jpg','https://i.ibb.co/TKxmb60/9.jpg','https://i.ibb.co/4Y4xVXB/55.jpg','https://i.ibb.co/Y8Z3S4W/11.jpg','https://i.ibb.co/JFkNn6M/54.jpg','https://i.ibb.co/1bxFC4R/10.jpg','https://i.ibb.co/KNWqBFz/53.jpg','https://i.ibb.co/Jpbynx5/52.jpg','https://i.ibb.co/kcWPjhf/51.jpg','https://i.ibb.co/qrVHF8H/50.jpg','https://i.ibb.co/m9ywdqR/19.jpg','https://i.ibb.co/27JC0mY/18.jpg','https://i.ibb.co/9wzz02R/17.jpg','https://i.ibb.co/sj5bDQ9/16.jpg','https://i.ibb.co/4PpYwMp/59.jpg','https://i.ibb.co/yR686k4/15.jpg','https://i.ibb.co/t4HtmB9/58.jpg','https://i.ibb.co/yBCTWg4/14.jpg','https://i.ibb.co/qyD03cF/57.jpg','https://i.ibb.co/NxMy58Z/13.jpg','https://i.ibb.co/QrHwdPZ/56.jpg','https://i.ibb.co/PG8BK52/12.jpg','https://i.ibb.co/BP0tCsG/44.jpg','https://i.ibb.co/2vsGNB5/43.jpg','https://i.ibb.co/6wnNL3f/42.jpg','https://i.ibb.co/cQ41fW1/41.jpg','https://i.ibb.co/FHhsw0z/40.jpg','https://i.ibb.co/NrXpDSn/8.jpg','https://i.ibb.co/h9cT0ZJ/7.jpg','https://i.ibb.co/PT56Dqq/6.jpg','https://i.ibb.co/dkW7ZG8/49.jpg','https://i.ibb.co/wMMN45z/5.jpg','https://i.ibb.co/nnyG8zL/48.jpg','https://i.ibb.co/RPmtr7L/4.jpg','https://i.ibb.co/SnPPfXQ/47.jpg','https://i.ibb.co/JyY7rhP/3.jpg','https://i.ibb.co/w769bF3/46.jpg','https://i.ibb.co/FW1r8JJ/2.jpg','https://i.ibb.co/7WChLwT/45.jpg','https://i.ibb.co/fpc7vrg/1.jpg','https://i.ibb.co/JtTCzqt/69.jpg','https://i.ibb.co/FsPkRQy/68.jpg','https://i.ibb.co/N2bhjmN/67.jpg','https://i.ibb.co/ctcknwP/66.jpg','https://i.ibb.co/SBD95bq/65.jpg','https://i.ibb.co/Xtn32N7/64.jpg','https://i.ibb.co/pQ1Twkh/33.jpg','https://i.ibb.co/cYfHjHv/32.jpg','https://i.ibb.co/C2ZCRMv/31.jpg','https://i.ibb.co/sJBKymV/30.jpg','https://i.ibb.co/jL3X3vL/39.jpg','https://i.ibb.co/YjjHfwv/38.jpg','https://i.ibb.co/KsDTpy1/37.jpg','https://i.ibb.co/XDGCWLq/36.jpg','https://i.ibb.co/bs0RdwX/35.jpg','https://i.ibb.co/m5dg5KG/34.jpg']
    let vuvu = vu[Math.floor(Math.random() * vu.length)]
      kkj = await getBuffer(vuvu)
cnf.sendMessage(from, kkj, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
break	
	
										
					case prefix+'welcome':
                    if (isLimit(sender)) return reply(ind.limitend(pushname))      
                    if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Quien eres? 7-7')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya activo ')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Activado (◍•ᴗ•◍)')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desactivado (◍•ᴗ•◍)️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
                    break
                    
					case prefix+'add':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('quien quieres añadir??')
					if (args[0].startsWith('08')) return reply('Usa el código de país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cnf.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el objetivo, tal vez porque en privado')
					}
					break
					
			    case prefix+'kick':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							     if (!isGroupAdmins) return reply(mess.only.admin)		
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida, emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						cnf.groupRemove(from, mentioned)
					} else {
						mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
						cnf.groupRemove(from, mentioned)
					}
					break 
					case prefix+'tts':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (args.length < 1) return jere.sendMessage(from, '¿Dónde está el código de idioma??', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return jere.sendMessage(from, 'y el texto U.U?', text, {quoted: mek})
					dtt = body.slice(7)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('El texto es muy largo T×T')
					: gtts.save(ranm, dtt, function() {
						cnf.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
										case prefix+'online':
										  case prefix+'listonline':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
                if (!isGroup) return reply(`[ ❗ ] Este Comando Solo Puede Ser Usado En Grupos UnU`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
                cnf.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case prefix+'infoall':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*By :* - [ ConfuBot-\n*Info :*  ${body.slice(9)}\n*Total Miembros :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMACION* ⟫━━━┓`+teks+'╚═ *「 𝐂𝐨𝐧𝐟𝐮𝐁𝐨𝐭 」*', members_id, true)
					break
					
				
					
					case prefix+'notif':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
if (!isGroup) return reply(mess.only.group)
teks = `Notificacion Dada Por: @${sender.split("@")[0]}\n*El mensaje es: ${body.slice(7)}*`
group = await cnf.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await cnf.sendMessage(from, options, text)
break

case prefix+'addstik':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedSticker) return reply('Responde un sticker')
				svst = body.slice(9)
				if (!svst) return reply('nombre del sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				cnf.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case prefix+'getstik':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				cnf.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Paquete no registrado')
				}
				break
			
			case prefix+'liststik':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				cnf.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case prefix+'addimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedImage) return reply('Responde una imagen')
				svst = body.slice(8)
				if (!svst) return reply('Nombre de la imagen')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				cnf.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case prefix+'getimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				cnf.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case prefix+'listimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				cnf.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case prefix+'addvid':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedVideo) return reply('Responde a un video')
				svst = body.slice(8)
				if (!svst) return reply('Nombre del video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				cnf.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case prefix+'listvid':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				cnf.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case prefix+'getvid':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				cnf.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case prefix+'addvn':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				if (!isQuotedAudio) return reply('Responde un audio')
				svst = body.slice(7)
				if (!svst) return reply('Nombre del vn')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await cnf.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				cnf.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case prefix+'getvn':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				cnf.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Paquete no registrado')
				}
				break
				case prefix+'listvn':
			case prefix+'vnlist':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				cnf.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break

				case prefix+'play':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  

  if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  play = body.slice(6)
  
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=SatanicaXV`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Audio*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamaño* : ${anu.result.size}\n\n_El audio se esta mandando, si no llega descargue por el link_\n‣ *Link* : ${anu.result.url_audio} `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  cnf.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3 })
  cnf.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})

  break

				case prefix+'play2':   
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				  if (args.length < 1) return reply('*Ingrese el título*')
                cnf.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=SatanicaXV`)
				if (anu.error) return reply(anu.error)
				infomp3 = ` *Vídeos encontrados!!!*
				
Título : ${anu.result.title}
Fuente : ${anu.result.source}
				
*_Enviando.._*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				cnf.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Aqui tienes 💕🦈'})
					break 
				
        
					
case prefix+'fb':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
  if (args.length < 1) return reply('*Url?*')
  query = args.join(" ")
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
					wing = ` *F A C E B O O K DOWNLOADER*
					
*Título :* ${anu.result.judul}`
					
					cnf.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: freply, caption: wing})
					break 
					

				case prefix+'ytmp4':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				  if (args.length < 1) return reply('*Url?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 BY SATAN* 」
					
*Titulo:* ${anu.judul}
*Size:* ${anu.size}
					 
 Se esta enviando...`
					 buff = await getBuffer(anu.thumbnail)
					cnf.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.url)
					cnf.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					cnf.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					break 

				case prefix+'ytmp3':

 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Formato de link incorrecto')
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=${viKey}`)
  infomp3 = `*Audio!!!*\n‣ Nombre : ${anu.result.title}\n‣ Fuente: ${anu.result.source}\n‣ Tamaño: ${anu.result.size}\n\n_El audio se esta mandando espere, si no llega descargue por el link_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  cnf.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3})
  cnf.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
  
  
  break


case prefix+'upswtext':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					cnf.updatePresence(from, Presence.composing)
					cnf.sendMessage('status@broadcast', `${q}`, extendedText)
					cnf.sendMessage(from, `Success Up story wea text ${q}`, text,{quoted : freply})
					break
					
				case prefix+'upswimg':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					cnf.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await cnf.downloadMediaMessage(swsw)
						cnf.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Subir correctamente la imagen de la historia con título: ${q}`
					cnf.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case prefix+'upswvideo':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
					cnf.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await cnf.downloadMediaMessage(swsw)
						cnf.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Subir correctamente el vídeo de la historia con subtítulo: ${q}`
					cnf.sendMessage(from, bur, text, { quoted: mek })
					break



case prefix+'charli':
case prefix+'charlie':
case prefix+'carlie':
case prefix+'carli':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
const ch =['Si','No','No','Si']
    const cha = ch[Math.floor(Math.random() * ch.length)]
reply(`𝐂𝐡𝐚𝐫𝐥𝐢𝐞 𝐂𝐡𝐚𝐫𝐥𝐢𝐞

𝐑𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 : ${cha}`)
break


		                case prefix+'slot':	
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  	 

const pb = ['100','50','50','50','50','50']
const pv = pb[Math.floor(Math.random() * pb.length)]
const pn = [`${pv}`]


const prd = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇'
		] 
const gnd = [
        '🍇 : 🍇 : 🍇',
	    '🍐 : 🍐 : 🍐',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍊 : 🍊 : 🍊',
		'🍌 : 🍌 : 🍌'
		]
	const pbb = prd[Math.floor(Math.random() * prd.length)]
	const pvv = gnd[Math.floor(Math.random() * gnd.length)]     

    if (pn < 100) return reply(`[  🎰 | 𝐒𝐋𝐎𝐓𝐒 ]\n-----------------\n🍋 : 🍌 : 🍍\n${pbb}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | 𝐒𝐋𝐎𝐓𝐒 ]\n\n𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐧𝐨 𝐚𝐬 𝐥𝐨𝐠𝐫𝐚𝐝𝐨 𝐚 𝐥𝐢𝐧𝐞𝐚𝐫 𝐛𝐮𝐞𝐧𝐚 𝐬𝐮𝐞𝐫𝐭𝐞𝐚 𝐩𝐫𝐨𝐱𝐢𝐦𝐚`)
            
 
    cnf.sendMessage(from, `[  🎰 | 𝐒𝐋𝐎𝐓𝐒 ]\n-----------------\n🍋 : 🍌 : 🍍\n${pvv}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | 𝐒𝐋𝐎𝐓𝐒 ]\n\n𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 𝐚𝐬 𝐠𝐚𝐧𝐚𝐝𝐨 100 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬\n\n`, text, { quoted: freply })
    addKoinUser(sender, 100)
                    break

case prefix+'tomp3':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
            if (!isQuotedVideo) return fakegroup('Etiqueta un video (◍•ᴗ•◍)')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await cnf.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            cnf.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break

case prefix+'juego':
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
	reply(`𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨 :

𝑷𝑨𝑹𝑨 𝑱𝑼𝑮𝑨𝑹 𝑼𝑻𝑰𝑳𝑰𝒁𝑨 𝑼𝑵𝑶 𝑫𝑬 𝑬𝑺𝑻𝑶𝑺 𝑬𝑴𝑶𝑱𝑰𝑺
		    
𝑷𝑰𝑬𝑫𝑹𝑨 : /✊
		   
𝑷𝑨𝑷𝑬𝑳 : /✋
		   
𝑻𝑰𝑱𝑬𝑹𝑨 : /✌

𝗡𝗢𝗧𝗔: en este juego no se puede ganar coins️`)
break
		  
		   case prefix+'✊':		   
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
const piedra =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`]
    const jg = piedra[Math.floor(Math.random() * piedra.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jg, text)
    break
    
    case prefix+'✋':    
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
const papel =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n  :0 𝑬𝒎𝒑𝒂𝒕𝒆`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`]
    const jggg = papel[Math.floor(Math.random() * papel.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jggg, text)
    break
    
    case prefix+'✌️': 
    if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
    const tijera =[`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✋\n\n:( 𝑮𝒂𝒏𝒂𝒔 𝒕𝒖`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✊\n\n :) 𝑮𝒂𝒏𝒆 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒔𝒕𝒖𝒑𝒊𝒅𝒐`,`𝒀𝒐 𝒆𝒍𝒊𝒋𝒐 : ✌️\n\n:0 𝑬𝒎𝒑𝒂𝒕𝒆 `]
    const jgg = tijera[Math.floor(Math.random() * tijera.length)]
    cnf.sendMessage(from, `𝑷𝑰𝑬𝑫𝑹𝑨 𝑷𝑨𝑷𝑬𝑳 𝑶 𝑻𝑰𝑱𝑬𝑹𝑨\n\n` + jgg, text)
    break

                case prefix+'frases': 
                	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				cnf.updatePresence(from, Presence.composing) 
				const fra =['El amor inmaduro dice: "te amo porque te necesito". El amor maduro dice: "te necesito porque te amo" (Erich Fromm)','La vida empieza cada cinco minutos (Andreu Buenafuente)','Donde las palabras fallan la música habla (Hans Christian Andersen)','Un buen viajante no tiene planes (Confucio)','Una vez aceptamos nuestros límites, vamos más allá de ello (Albert Einstein)','Lo que no nos mata nos hace más fuertes (Friedrich Nietzsche)','Si caminas solo, irás más rápido. Si caminas acompañado, llegarás más lejos.','Una vida llena de errores no solo es más honorable, sino que es más sabia que una vida gastada sin hacer nada','Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas. F. Nietzsche','No pierdas nunca el sentido del humor y aprende a reírte de tus propios defectos','La preocupación es como una mecedora, te mantiene ocupado pero no te lleva a ninguna parte',' El hombre que más ha vivido no es aquel que más años ha cumplido, sino aquel que más ha experimentado la vida','Si lo puedes soñar, lo puedes hacer','Lo imposible es el fantasma de los tímidos y el refugio de los cobardes','El camino que nos toca recorrer está lleno de sorpresas. Nunca vas a estar preparado para las que te toquen a ti, sean dichosas o sombrías, pues eso es parte de adquirir experiencia. Y descubrir cuán gratas o desafortunadas son las que te esperan, es algo nunca podrás evadir','La felicidad no es algo que pospones para el futuro, es algo que diseñas para el presente','El amigo ha de ser como el dinero, que antes de necesitarle, se sabe el valor que tiene','Tus acciones serán el reflejo de la manera que tienes de ver la vida y las que te van definir ante los demás. No las malgastes en cosas y actitudes que no valen la pena, solo tú puedes decidir la forma en la que quieres que te recuerden, porque no estarás en este mundo para siempre','El amor es lo que mueve al mundo aunque a veces parezca lo contrario. A las personas no nos haría mal recordar esto de vez en cuando','Nunca terminas de conocer a la gente. Tus amigos, tu familia y hasta tú mismo, pueden ocultar sorpresas que en la vida te podrías haber imaginado, tanto buenas como malas','Todos tenemos el mismo destino, en esencia no hay manera de diferenciarnos si nacemos para llorar y reír. Recuérdalo, todos tenemos los días contados, vive cada uno de tus días como si fueran el regalo más grande, porque nadie puede asegurarte el mañana','Mientras vivas vas a encontrarte con todo tipo de personas, tanto buenas como malas. Es imposible adivinar las intenciones que oculta alguien detrás de su comportamiento, pero descubrirlo es la tarea más interesante y peligrosa con la que te puedes llegar a topar','Los tiempos felices en la humanidad son las páginas vacías de la historia','La decepción después de un amor fallido, puede llegar a oprimir tu corazón hasta el punto de no dejarte respirar. Pero nadie se ha muerto de amor','No llores por la gente que se ha ido, enfócate en quienes se encuentran a tu lado en el presente y quédate con los buenas recuerdos de los que se marcharon','No debes enfocarte en el dolor que puedes sentir si alguien te ha falla. Si no eres capaz de perdonar una equivocación, entiérrala y sigue adelante','Amar es la aventura más grande en la que te puedes embarcar. Porque te puede hacer volar más alto de lo que jamás imaginarte y también ponerte los pies de la tierra']
 				const jys = fra[Math.floor(Math.random() * fra.length)]
			    ses = fs.readFileSync(`./media/cnf.jpeg`)
				cnf.sendMessage(from, ses, image, { caption: '*ᖴᏒᏗᏕᏋᏕ ૮ᏬᏒᎥᎧᏕᏗᏕ👌*\n\n'+ jys, quoted: mek })
              break

                case prefix+'piropos':               
                	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
				cnf.updatePresence(from, Presence.composing) 				
				const mary =['Algunos quieren ser ricos a través del dinero, otros del poder, pero lo que no saben, es que la única riqueza es tu amor verdadero.','Soñando contigo he tenido una revelación, ahora necesito que me hagas un hueco en tu corazón.','Aunque por tu corazón han pasado muchas personas, me gustaría que me hicieses un huequecito eterno, por pequeño que sea, por si pasa algo, para que no me olvides jamás.','Lo que siento por ti es tan inmenso que, para guardarlo, me haría falta otro universo.','me he convertido en un capitán pirata para asaltar tu corazón y robarle el amor.','Me preguntaste por qué te amaba y no pude responderte. Hoy entiendo que el amor verdadero es indescriptible, solo se puede sentir.','Ojalá fuese papel para poder envolverte, bombón.','Ansío besarte, abrazarte y no soltarte','A lo mejor mi hogar no es un palacio, pero me gustaría que tú fueses mi princesa.','Te amo demasiado, lo deseo todo contigo, por eso me vuelvo loc@, cuando tú no estás conmigo.','¿De casualidad tienes un mapa contigo? Porque tengo el interés de navegar por esa linda mirada','Desde que te he visto me he convertido un/a astronauta porque no he bajado de las galaxias','A pesar de que el cielo está lleno de estrellas, tú eres la más importante para mi','Si ser guapo fuera pcado, ya estarías haciendo penitencia','Los que dicen que Disneyland es el lugar más feliz del mundo no han estado junto a ti🥺','Si ser guapo matara, serías la bomba atómica😳','Si fuera gato, pasaría mis nueve vidas contigo','¿Y si nos comemos unos tacos y yo te a-taco a besos?']
				const js = mary[Math.floor(Math.random() * mary.length)]
			    wew = fs.readFileSync(`./media/cnf.jpeg`)
				cnf.sendMessage(from, wew, image, { caption: '*ᎮᎥᏒᎧᎮᎧᏕ👌*\n\n'+ js, quoted: mek })
              break



                case prefix+'toimg':
				case prefix+'toimig':
				case prefix+'img':	
					if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  	
				if (!isQuotedSticker) return reply(' etiqueta un sticker')
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await cnf.downloadAndSaveMediaMessage(encmedia)
				ran= getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(' Fallo ')
				buffer = fs.readFileSync(ran)
				cnf.sendMessage(from, buffer, image, {quoted: mek, caption: '༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑'})
				fs.unlinkSync(ran)
			    })
				await limitAdd(sender) 
				break


    			case prefix+'perfil':
    				cnf.updatePresence(from, Presence.composing)
				if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
    				try {
					profil = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					   const uaangku = checkATMuser(sender)
					profile = `╭─「 *PERFIL* 」
│• *Nombre:* ${pushname}
│• *Rol :${role}*
│• *Usuario registrado:* ✅
│• *Tu Dinero: Rp${uaangku}*
│• *XP: ${getLevelingXp(sender)}*
│• *Level: ${getLevelingLevel(sender)}*				
│• *Link:* wa.me/${sender.split("@")[0]}
╰─────────────────────`
	 				buff = await getBuffer(profil)
					cnf.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					break
				
				case prefix+'credits':
				case prefix+'credito':
				case prefix+'creditos':
				      if (isLimit(sender)) return reply(ind.limitend(pushname))      
      if (!isRegistered) return reply(ind.noregis())			  
wew = fs.readFileSync(`./media/cnf.jpeg`)
 credi = `┏━⊱ConfuMods
┗⊱https://youtube.com/c/ConfuMods

┏━⊱FelixCrack409
┗⊱$https://youtube.com/c/Felixcrack409

┏━⊱Eli Hope
┗⊱¿?

┏━⊱Fadhil Graphy
┗⊱https://youtube.com/c/FadhilGraphy`
        cnf.sendMessage(from, wew, image,{contextInfo: {forwardingScore : 508, isForwarded: true},sendEphemeral: true, quoted:ftoko, caption:credi})
break
					  						  	case prefix+'event':
					 				  
				     if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*ACTIVADO* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ EXITO ❭ ACTIVE LOS EVENTOS EN ESTE GRUPO*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ EXITO ❭ APAGANDO EL EVENTO EN ESTE GRUPO*')
					} else {
						reply(ind.satukos())
					}
					break 
			                case prefix+'leveling':
                if (!isGroup) return reply(mess.only.group)
		     if (!isGroupAdmins) return reply(mess.only.admin)			
                if (args.length < 1) return reply('activar oh desactivar')
                if (args[0] === 'activar') {
                if (isLevelingOn) return reply('*la función de nivel ha estado activa antes*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'desactivar') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break 
				case prefix+'level':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
			     if (!isGroup) return reply(mess.only.group)			     
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nombre* : ${pushname}\n┣⊱ Numero : wa.me/${sender.split("@")[0]}\n┣⊱ User XP :  ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				break 
				case prefix+'mining':
				case prefix+'minar':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			
                      if (!isEventon) return reply(`Lo siento ${pushname} El propietario no activo la minería de eventos`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 12)
                      reply(`porque eres mi propietariom... enviando ${one}Xp para ti`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*felicitaciones* ${pushname} usted obtiene *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case prefix+'leaderboard':
				case prefix+'lb':
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *NIVEL DE LIDERAZGO* ]----\n\n'
                let leaderboarduang = '-----[ *TABLA DE MILLONARIOS* ]----\n\n'
                let nomm = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nomm++
                        leaderboardlvl += `*[${nomm}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nomm}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Dinero*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`usuario mínimo de  para poder acceder a la base de datos`)
                }
				break
				case prefix+'limit':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break 
					
				case prefix+'giftlimit': 
				if (!isOwner) return reply(mess.only.ownerB)
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`el límite mínimo de regalos es 1`)
                if (isNaN(jmla)) return reply(`el límite debe ser un número`)
                if (!nomerr) return reply(`lo siento formato incorrecto \ningrese el parámetro correcto\nEjemplo : ${prefix}giftlimit @593992826085 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `El límite de la cuota de regalos fue exitoso con SN: ${createSerial(8)} en ${moment().format('DD/MM/YY HH:mm:ss')}
*「 LÍMITE DE LA CUOTA DE REGALOS 」*

• Usuario : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Lo sentimos, el número ${nomerr} no está registrado en la base de datos.!`)
                        }
                break
            break
				case prefix+'transfer':
				case prefix+'trasferir':
				case prefix+'transferir':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('la cantidad debe ser un número!!')
                if (jumblah < 100 ) return reply(`transferencia mínima 100`)
                if (checkATMuser(sender) < jumblah) return reply(`No tienes suficiente dinero para realizar la transferencia`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('+50254371795@s.whatsapp.net', fee)
                reply(`*「 ÉXITO 」*\n\nLa transferencia de dinero ha sido exitosa\n\nDe : +${sender.split("@")[0]}\nPara : +${tujuan}\n\nmonto de la transferencia : ${jumblah}\nimpuesto : ${fee}%`)
                break
			
				case prefix+'cartera':
				case prefix+'catera':
				case prefix+'cartea':
				case prefix+'cartra':
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case prefix+'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('el límite debe ser un número!!')
				const koinPerlimit = 30
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`lo siento, tu dinero no es suficiente. recoger y comprar más tarde`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PAGO EXITOSO 」*\n\n*remitente* : Admin\n*receptor* : ${pushname}\n*compra nominal* : ${payout} \n*precio límite* : ${koinPerlimit}/limit\n*el resto de tu dinero* : ${checkATMuser(sender)}\n\nel proceso es exitoso con el número de pago\n${createSerial(15)}`)
				} 
				break

	case prefix+'roulette':
	case prefix+'ruleta':
	case prefix+'suerte':
	if (!isRegistered) return reply(ind.noregis())    	
     const dinn = ['1','1','1','100','1','1','1']    
  const holi = dinn[Math.floor(Math.random() * dinn.length)]
 if (holi < 5) return reply(`★᭄ꦿ𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄💸

-🥀Lo siento🥀
-🥀${pushname}
-🥀As perdido
-🥀No recibes ningun premio
-🥀Gracias por jugar`)
 
reply(`★᭄ꦿ𝐑𝐎𝐔𝐋𝐄𝐓𝐓𝐄💸

-🥀Felicidades 🎉 
-🥀${pushname}
-🥀As Ganado!! 🎉
-🥀Tu premio : 100 coins`)
addKoinUser(sender, 100)
break

      case prefix+'wprandom':
      case prefix+'wallpaper':
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
 if	(!isRegistered) return reply(ind.noregis())				
				reply(mess.wait)
		        const canogti = ['https://i.ibb.co/6JTzpJJ/68.jpg','https://i.ibb.co/S7CXQmD/15.jpg','https://i.ibb.co/yP4fMMS/18.jpg','https://i.ibb.co/zRHq0qK/47.jpg','https://i.ibb.co/vD00z3C/10.jpg','https://i.ibb.co/NjLb90d/54.jpg','https://i.ibb.co/QDRJmYb/73.jpg','https://i.ibb.co/LkDygnF/39.jpg','https://i.ibb.co/jTqjqLq/58.jpg','https://i.ibb.co/2twGcMw/86.jpg','https://i.ibb.co/vwBDKRf/71.jpg','https://i.ibb.co/JCwQfcZ/9.jpg','https://i.ibb.co/Y8sm3k8/64.jpg','https://i.ibb.co/60LsdQq/76.jpg','https://i.ibb.co/mG8xMC9/5.jpg','https://i.ibb.co/8jM2Wnq/62.jpg','https://i.ibb.co/XWd1wyB/23.jpg','https://i.ibb.co/J36Qvy0/63.jpg','https://i.ibb.co/zRFXfXB/75.jpg','https://i.ibb.co/SNkpKBM/43.jpg','https://i.ibb.co/Yc1ntvk/21.jpg','https://i.ibb.co/ZV0KBN8/44.jpg','https://i.ibb.co/ByScQYM/56.jpg','https://i.ibb.co/gvr3grn/100.jpg','https://i.ibb.co/Mp6kM0S/98.jpg','https://i.ibb.co/str6WsD/93.jpg','https://i.ibb.co/xf1tqN8/53.jpg','https://i.ibb.co/BntKBDt/3.jpg','https://i.ibb.co/cQ2QrfN/103.jpg','https://i.ibb.co/kKMYf84/7.jpg','https://i.ibb.co/C2dJXLM/33.jpg','https://i.ibb.co/ykzwZ08/67.jpg','https://i.ibb.co/qM4z8GC/25.jpg','https://i.ibb.co/w0bPg7H/38.jpg','https://i.ibb.co/QmL9QT2/72.jpg','https://i.ibb.co/Qk4qKWh/85.jpg','https://i.ibb.co/QPyjj7M/29.jpg','https://i.ibb.co/pPKRz5x/46.jpg','https://i.ibb.co/52X0QGk/27.jpg','https://i.ibb.co/tK1XmTS/13.jpg','https://i.ibb.co/b5KFHHy/55.jpg','https://i.ibb.co/ZRD9Z7M/51.jpg','https://i.ibb.co/JH8D2Js/87.jpg','https://i.ibb.co/X38B1Ns/81.jpg','https://i.ibb.co/9Ztpn3y/2.jpg','https://i.ibb.co/g7P9NT4/26.jpg','https://i.ibb.co/j5m8sgf/8.jpg','https://i.ibb.co/njnkMWC/32.jpg','https://i.ibb.co/M80BmZZ/16.jpg','https://i.ibb.co/tQqGkCf/77.jpg','https://i.ibb.co/S6Np1Vm/49.jpg','https://i.ibb.co/TbkQk71/90.jpg','https://i.ibb.co/1GVqwsn/50.jpg','https://i.ibb.co/mb0Xr9X/59.jpg','https://i.ibb.co/WnDMywW/4.jpg','https://i.ibb.co/rbBvMX4/84.jpg','https://i.ibb.co/7twNvNX/74.jpg','https://i.ibb.co/jRKDHRz/48.jpg','https://i.ibb.co/KqqYTWk/89.jpg','https://i.ibb.co/qMQNSjG/12.jpg','https://i.ibb.co/FgNw4hb/11.jpg','https://i.ibb.co/9NW9VnZ/17.jpg','https://i.ibb.co/jMc9vdx/95.jpg','https://i.ibb.co/BskF3jg/104.jpg','https://i.ibb.co/yV56m6S/99.jpg','https://i.ibb.co/5GCxFC5/19.jpg','https://i.ibb.co/8mKGXzg/31.jpg','https://i.ibb.co/4VWX6dn/34.jpg','https://i.ibb.co/fq6LjHw/82.jpg','https://i.ibb.co/CbbP0QB/80.jpg','https://i.ibb.co/vPqyBCK/36.jpg','https://i.ibb.co/k5QxxBb/57.jpg','https://i.ibb.co/WymrdBf/102.jpg','https://i.ibb.co/cth1cwb/79.jpg','https://i.ibb.co/dJRTT6f/83.jpg','https://i.ibb.co/55szk9F/91.jpg','https://i.ibb.co/sgTbTLb/65.jpg','https://i.ibb.co/8rLfBDy/24.jpg','https://i.ibb.co/W0zbd1J/66.jpg','https://i.ibb.co/g7523mx/14.jpg','https://i.ibb.co/nB8CzdY/22.jpg','https://i.ibb.co/prbLDzX/101.jpg','https://i.ibb.co/r2sZVDR/37.jpg','https://i.ibb.co/t2pn4dL/94.jpg','https://i.ibb.co/F0CkFPp/35.jpg','https://i.ibb.co/7nwhZ3w/96.jpg','https://i.ibb.co/89r7C2b/20.jpg','https://i.ibb.co/TTYYgP3/69.jpg','https://i.ibb.co/JKp6Hqr/52.jpg','https://i.ibb.co/k8FknTC/41.jpg','https://i.ibb.co/37Nk23b/6.jpg','https://i.ibb.co/zSC3dHS/88.jpg','https://i.ibb.co/dLNthzx/60.jpg','https://i.ibb.co/3RPnFTc/105.jpg','https://i.ibb.co/kHbRF4Z/28.jpg','https://i.ibb.co/XYx1rFS/1.jpg','https://i.ibb.co/pxtTK6j/40.jpg','https://i.ibb.co/tKTjL9s/30.jpg','https://i.ibb.co/FHZt6NH/45.jpg','https://i.ibb.co/3kV41Nj/42.jpg','https://i.ibb.co/WDGcQ4X/78.jpg','https://i.ibb.co/XYh4fqF/70.jpg','https://i.ibb.co/B3rHm58/61.jpg','https://i.ibb.co/Vqxn77Z/97.jpg','https://i.ibb.co/DQ5P1Xq/92.jpg']
		        let canbgtip = canogti[Math.floor(Math.random() * canogti.length)]
                h = await getBuffer(canbgtip)
                cnf.sendMessage(from, h, image, {quote: mek})
		        await limitAdd(sender)
                break

case prefix+'yaoi':
if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const uaangkaputouuuu = checkATMuser(sender)
const jñpitooo = [`${uaangkaputouuuu}`]
if (jñpitooo < 50) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 50)
reply (mess.wait)
const yao = ['https://i.ibb.co/6ttzZjP/16.jpg','https://i.ibb.co/Sy2xc1P/12.jpg','https://i.ibb.co/8d2m1gF/15.jpg','https://i.ibb.co/BsYb0xN/36.jpg','https://i.ibb.co/dtgLh00/2.jpg','https://i.ibb.co/GHz2Qdx/25.jpg','https://i.ibb.co/sFVs1bt/1.jpg','https://i.ibb.co/d2J2KDj/24.jpg','https://i.ibb.co/NVHpkWp/23.jpg','https://i.ibb.co/KxVB3wY/22.jpg','https://i.ibb.co/t3ytyh6/21.jpg','https://i.ibb.co/GVrKbYD/20.jpg','https://i.ibb.co/WDttFJK/19.jpg','https://i.ibb.co/517JFnF/18.jpg','https://i.ibb.co/zGRdbtZ/4.jpg','https://i.ibb.co/WVYF9JL/3.jpg','https://i.ibb.co/ZN7zsbk/5.jpg','https://i.ibb.co/WDDgvTq/28.jpg','https://i.ibb.co/vxfVSzy/27.jpg','https://i.ibb.co/RSkfN6D/26.jpg','https://i.ibb.co/wLzRyr2/13.jpg','https://i.ibb.co/HBpxR3v/17.jpg','https://i.ibb.co/1m19qTS/35.jpg','https://i.ibb.co/6vXpDm0/11.jpg','https://i.ibb.co/myvQCmx/34.jpg','https://i.ibb.co/pRPyw6Q/33.jpg','https://i.ibb.co/gZmRKNC/10.jpg','https://i.ibb.co/pJpcWtw/32.jpg','https://i.ibb.co/vH7DBc9/9.jpg','https://i.ibb.co/fCMMBt4/31.jpg','https://i.ibb.co/p49wLDJ/8.jpg','https://i.ibb.co/3Cft0R5/30.jpg','https://i.ibb.co/qYQgGQZ/7.jpg','https://i.ibb.co/0s5x61M/6.jpg','https://i.ibb.co/C8Nngyq/29.jpg','https://i.ibb.co/Np0VTVw/14.jpg']
let yaoii  = yao[Math.floor(Math.random() * yao.length)]   
  yaoiii = await getBuffer(yaoii)           
                cnf.sendMessage(from, yaoiii, image, {quote: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨𝐧 𝟓𝟎 𝐜𝐨𝐢𝐧𝐬'})		       
                break
                
case prefix+'tagall':
case prefix+'todos':
case prefix+'marcar':
case prefix+'etiquetar':
if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*▢ Grupo:*  ${groupName}\n*▢ Miembros:* ${groupMembers.length} \n*▢ Total De Admins:* ${groupAdmins.length}\n┌───⊷ *MENCIONES* ⊶`+teks+'└─────✪ ༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑ ✪───────* ', members_id, true)
					break
case prefix+'tagall2':
                case prefix+'marcar2':
				cnf.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `♡ ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					cnf.sendMessage(from, 'Mencionando a todos OwO'+teks+'✪ ༊𝕮࿆𝖔ྂ𝖓𝖋𝖚ྂ𝕭𝖔ྂ𝖙࿆࿑ ✪', text, {quoted: mek})
					break
                case prefix+'tagall3':
                case prefix+'marcar3':
				cnf.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					cnf.sendMessage(from, '𝚃𝙾𝙳𝙾𝚂'+teks, text, {detectLinks: false, quoted: mek})
					break
                        case prefix+'tagall4':
                        case prefix+'marcar4':
				cnf.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `  Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += `✿ ${mem.jid.split('@')[0]}@c.us\n`
						members_id.push(mem.jid)
					}
					cnf.sendMessage(from, '𝙏𝙤𝙙𝙤𝙨'+teks+'✔︎', text, {quoted: mek})
					break
                case prefix+'tagall5':
                case prefix+'marcar5':
				cnf.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `Total : ${groupMembers.length}\n`
					for (let mem of groupMembers) {
						teks += ` ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
						members_id.push(mem.jid)
					}
					reply('𝑻𝑶𝑫𝑶𝑺'+teks+'')
					break
case prefix+'wame':
                   cnf.updatePresence(from, Presence.composing) 
      options = {
          text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSu link de Whatsapp (◍•ᴗ•◍) : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*O ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
          contextInfo: { mentionedJid: [sender] }
    }
    cnf.sendMessage(from, options, text, { quoted: mek } )
				break

case prefix+'apostar':
dineroapostado = body.slice(9)
if (args.length < 1) return reply('*Cuanto deseas apostar?')
  if(isNaN(dineroapostado)) return await reply('la cantidad debe ser un número')
 const uaangkauuuiiu = checkATMuser(sender)
const jññño = [`${uaangkauuuiiu}`]
if (jññño < dineroapostado) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, dineroapostado)
const gpp = ['10','10','10','10','10','10','10','10','10','10','10','10','10','50000']
	const gppp = gpp[Math.floor(Math.random() * gpp.length)]
piro = `*[💲] [ 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦 ] [💲]*

᭕- Dinero apostado :
᭕- ${dineroapostado}
᭕- Jugador :
᭕- ${pushname}

*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*
        ༊    𝙿𝙴𝚁𝙳𝙴𝙳𝙾𝚁    ༊
*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*

× No ganas nada
× Pierdes el dinero apostado

× Gracias por jugar`


ganadorxd = `*[💲] [ 𝗔𝗣𝗨𝗘𝗦𝗧𝗔𝗦 ] [💲]*

᭕- Dinero apostado :
᭕- ${dineroapostado}
᭕- Jugador :
᭕- ${pushname}

*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*
        ༊     𝙶𝙰𝙽𝙰𝙳𝙾𝚁     ༊
*{💲}---𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎--{-💲}*

× Ganaste :
× 50000 coins

× Gracias por jugar`
if (gppp < 90) return reply(piro)
addKoinUser(sender, 50000)

reply(`${ganadorxd}`)
break
case prefix+'blood':             
const apis9 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe9 = apis9[Math.floor(Math.random() * apis9.length)]
                bpp = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${nepe9}&text=${bpp}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek})                  
                  break  
                  
case prefix+'blood2':
           const apis8 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe8 = apis8[Math.floor(Math.random() * apis8.length)]     
                bpp1 = `${body.slice(8)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${nepe8}&text=${bpp1}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek})
                  
                  break 
                   
case prefix+'bokeh':
           const apis7 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe7 = apis7[Math.floor(Math.random() * apis7.length)]     
                bpp2 = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/bokeh?apikey=${nepe7}&text=${bpp2}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek})
                  
                  break 
                   
case prefix+'toxic':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const tox = checkATMuser(sender)
const toxx = [`${tox}`]
if (toxx < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
          const apis1 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe1 = apis1[Math.floor(Math.random() * apis1.length)]    
                bpp3 = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/toxic?apikey=${nepe1}&text=${bpp3}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬'})        
                  break 
                   
case prefix+'ice':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const icee = checkATMuser(sender)
const icce = [`${icee}`]
if (icce < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
const apis =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe = apis[Math.floor(Math.random() * apis.length)]                
                bpp5 = `${body.slice(5)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/icecold?apikey=${nepe}&text=${bpp5}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬'})
                  
                  break  
                  
case prefix+'box':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const boxx = checkATMuser(sender)
const boox = [`${boxx}`]
if (boox < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
       const apis2 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe22 = apis2[Math.floor(Math.random() * apis2.length)]        
                bpp4 = `${body.slice(5)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/box3d?apikey=${nepe22}&text=${bpp4}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬'})
                  
                  break 
                   
case prefix+'love':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const loove = checkATMuser(sender)
const lovee = [`${loove}`]
if (lovee < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
    const apis3 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe33 = apis3[Math.floor(Math.random() * apis3.length)]           
                bpp7 = `${body.slice(6)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/love?apikey=${nepe33}&text=${bpp7}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬'})
                  
                  break  
                  
case prefix+'luxury':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const luux = checkATMuser(sender)
const luxx = [`${luux}`]
if (luxx < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
   const apis4 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe4 = apis4[Math.floor(Math.random() * apis4.length)]           
                bpp6 = `${body.slice(8)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/luxury?apikey=${nepe4}&text=${bpp6}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬'})
                  
                  break 
                   
case prefix+'love2':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const loovee = checkATMuser(sender)
const lovvve = [`${loovee}`]
if (lovvve < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
            const apis5 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe5 = apis5[Math.floor(Math.random() * apis5.length)]    
                bpp8 = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/lovemessage?apikey=${nepe5}&text=${bpp8}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬'})
                  
                  break  
                  
case prefix+'grose':
	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const grosee = checkATMuser(sender)
const ggro = [`${grosee}`]
if (ggro < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
    const apis6 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe6 = apis6[Math.floor(Math.random() * apis6.length)]            
                bpp9 = `${body.slice(7)}`
                     if (args.length < 1) return reply('Donde esta el texto??')
                     if (args.length > 10) return reply('Maximo 10 letras')
                     reply (mess.wait)
                     buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/golderrose?apikey=${nepe6}&text={bpp9}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬'})
                  
                  break  




                                         case prefix+'wpanime':
                                         	if (isLimit(sender)) return reply(ind.limitend(pushname))      
if (!isRegistered) return reply(ind.noregis())			  
 const wp = checkATMuser(sender)
const wlp = [`${wp}`]
if (wlp < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
confirmATM(sender, 30) 	
					                                const canuugti = ['https://i.ibb.co/sF5Fdt1/1d15523b5b93da72799e1c3b92ef5fef.jpg','https://i.ibb.co/17Lbj2j/44764f88fd4c43fb6db7c2d4e226ee9a.jpg','https://i.ibb.co/qBn79dv/041cf4ee7596e251cbe9b8d95ac69ab2.jpg','https://i.ibb.co/4WbBKXY/0580e84577023fcb3d7b65490be66f69.jpg','https://i.ibb.co/Fgxd6tS/cf3ff3a484d851fc077ef5e5c81c9d65.jpg','https://i.ibb.co/ZMBynRh/e7a7ddbeafa8c14e249691a7c3c4c0b2.jpg','https://i.ibb.co/KGL9m5g/dd40d5d0fe5b1df5097ca4400ae2ad16.jpg','https://i.ibb.co/ZMZYmKz/419b0bddd10310b8611653055ec8c7b0.jpg','https://i.ibb.co/jy8sgbh/c401a02422508128821921b31539091e.jpg','https://i.ibb.co/02M4h6S/5b1871bba0fb4b4e01c4356bdd93cd86.jpg','https://i.ibb.co/997FbVT/133053afa7ee650e45f782ce8475aed8.jpg','https://i.ibb.co/xzPvvDv/18cf2c41770f9edbbf31be8bec2fb0b2.jpg','https://i.ibb.co/HYn2B4Q/702c6cf7e374a02d1da0a5f794858a38.jpg','https://i.ibb.co/7nxQBkY/f2bcf894118518cd15fd69b033da78d1.jpg','https://i.ibb.co/yd61B8v/0d12c692d699ae3ff158d54d2fe02971.jpg','https://i.ibb.co/vD8HsGD/8dcea7573f193abf7ea26aefdc8f6949.jpg','https://i.ibb.co/1Z89RJT/ec77640a70d388ab3689b922b488e000.jpg','https://i.ibb.co/98bLyLD/6c54a7a35f7c3a3a974b15b0c9c666fa.jpg','https://i.ibb.co/nsxPVMx/d51a5164ed57c571de2f337823cdfe0d.jpg','https://i.ibb.co/r4QNhf1/e62aadd019b27bcc954f9f463a8a268d.jpg','https://i.ibb.co/Qfp7vS7/4838313f143a833ec931ac026665de39.jpg','https://i.ibb.co/fYqMq9T/a7134ce6fba2dc5efd9faa6fe4213444.jpg','https://i.ibb.co/ZN397Tk/06ebb4fbc32809c99f173b3ac5596c68.jpg','https://i.ibb.co/ZdCV7G8/cca874c663aeb20eed0baa477de679cc.jpg','https://i.ibb.co/s5TJN3L/5db7c137c1f672e15dc98910aef3a77a.jpg','https://i.ibb.co/r3k8sWQ/ca50357dd6a4638dd9199d02ac810828.jpg','https://i.ibb.co/h1tMDLD/e0e5d60bdfb0c93eb723a1d0e15d6756.jpg','https://i.ibb.co/3NXvXwR/d10db58ff9114e1575de143b723ddc9b.jpg','https://i.ibb.co/fMbJ33j/83850d24bd8312104701f3e93bdaa3e0.jpg','https://i.ibb.co/mcrsqsw/d65716315dc8cf5df3e438f6adf95c9e.jpg','https://i.ibb.co/hY3N02B/6bcee3571197465654c97683d0ed0e20.jpg','https://i.ibb.co/Js1sLBh/124d64ed1227aa1487a2c42b24f8837a.jpg','https://i.ibb.co/Kjc5NkN/993ccbdf49d7e1e256274cafc2585eef.jpg','https://i.ibb.co/p0sjxGX/3a741a4634e9445c5f93bf325b75ef2a.jpg','https://i.ibb.co/BqkFmY3/064bab224123321def4b21d224fe8e82.jpg','https://i.ibb.co/rfTwhXz/logo.jpg','https://i.ibb.co/H7C2bJD/7896dbb5d93ce36a81399c9e24e0e9fa.jpg','https://i.ibb.co/rbs9ZG0/506ab25382f022726b879c2fed3179a0.jpg','https://i.ibb.co/gj2JCZm/3d71bc19b7e56e23c94de9a2da33ba3e.jpg','https://i.ibb.co/WKZV6yG/79f8e21c88ca8044a2350024675d34ef.jpg','https://i.ibb.co/427Lj3L/7f6d1e9f9a4d3316c4f6834a2fe7ec32.jpg','https://i.ibb.co/R9SXJS1/7858da10a6d8dc3a7b3d06c437dcf5c7.jpg','https://i.ibb.co/BZwM4xL/32fb465027798249e815b5473ee0d210.jpg','https://i.ibb.co/7WX24j5/b91c79ea703cd93de96656ab60cdd789.jpg','https://i.ibb.co/K5bjZY2/bb6bbe2a3295c8539970c2111f239b4b.jpg','https://i.ibb.co/SVc69Dk/54b136d4d9a52df59901fc6c675cd960.jpg','https://i.ibb.co/Wxrmn1Z/0e6c1b49b5629101da59f06db122ad19.jpg','https://i.ibb.co/zFf5KFZ/6ed2bedc080a9e8c3b267d927433e7bf.jpg','https://i.ibb.co/6Zpkx7M/075d4b0ea4e6a5bac6085bbe9157ba37.jpg','https://i.ibb.co/Tq6YJyS/c0ebcbd97922d1271629ab87469dc0c7.jpg','https://i.ibb.co/RgVcvh8/be54e24e4a7276b1d3cc830a03fd4676.jpg','https://i.ibb.co/61G5nQb/6f8c4afef5b7ddf538447dc218ca0ef8.jpg','https://i.ibb.co/QdkJ0Y8/da76b20813815efd1dbf84116501b25a.jpg','https://i.ibb.co/S3pKHft/1ec2838d5cd0cd53eaface83a1bfa921.jpg','https://i.ibb.co/9GW77Vn/5983cbabf5827793558ee7fddbaf173f.jpg','https://i.ibb.co/WpbQWqH/74ba70dce0b89460129a05ed13380aa0.jpg','https://i.ibb.co/Bwh0MS4/8ea55d8ccaa10c5b3ff540e0e08f802e.jpg','https://i.ibb.co/2c1cymy/56142f816478a819ce32453a2f917af5.jpg','https://i.ibb.co/BGfjR8M/923f89fd65d33f823028ce2944a8fb77.jpg','https://i.ibb.co/TRMb2r3/9bef9de9f522d30de4ed4c07abd2de92.jpg']
                                        let caanigtip = canuugti[Math.floor(Math.random() * canuugti.length)]
                                        	il = await getBuffer(caanigtip)
                                        cnf.sendMessage(from, il, image, {quoted: mek, caption: `𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬`})
					await limitAdd(sender)
                                        break
    case prefix+'lesbi':
	if (isLimit(sender)) return reply(ind.limitend(pusname))  
 if	(!isRegistered) return reply(ind.noregis())				
    const cuu =['Eres 0% Lesbi' , 'Eres 1% Lesbi' , 'Eres 2% Lesbi' , 'Eres 3% Lesbi' , 'Eres 4% Lesbi' , 'Eres 5% Lesbi' , 'Eres 6% Lesbi' , 'Eres 7% Lesbi' , 'Eres 8% Lesbi' , 'Eres 9% Lesbi' , 'Eres 10% Lesbi' , 'Eres 11% Lesbi' , 'Eres 12% Lesbi' , 'Eres 13% Lesbi' , 'Eres 14% Lesbi' , 'Eres 15% Lesbi' , 'Eres 16% Lesbi' , 'Eres 17% Lesbi' , 'Eres 18% Lesbi' , 'Eres 19% Lesbi' , 'Eres 20% Lesbi' , 'Eres 21% Lesbi' , 'Eres 22% Lesbi' , 'Eres 23% Lesbi' , 'Eres 24% Lesbi' , 'Eres 25% Lesbi' , 'Eres 26% Lesbi' , 'Eres 27% Lesbi' , 'Eres 28% Lesbi' , 'Eres 29% Lesbi' , 'Eres 30% Lesbi' , 'Eres 31% Lesbi' , 'Eres 32% Lesbi' , 'Eres 33% Lesbi' , 'Eres 34% Lesbi' , 'Eres 35% Lesbi' , 'Eres 36% Lesbi' , 'Eres 37% Lesbi' , 'Eres 38% Lesbi' , 'Eres 39% Lesbi' , 'Eres 40% Lesbi' , 'Eres 41% Lesbi' , 'Eres 42% Lesbi' , 'Eres 43% Lesbi' , 'Eres 44% Lesbi' , 'Eres 45% Lesbi' , 'Eres 46% Lesbi' , 'Eres 47% Lesbi' , 'Eres 48% Lesbi' , 'Eres 49% Lesbi' , 'Eres 50% Lesbi' , 'Eres 51% Lesbi' , 'Eres 52% Lesbi' , 'Eres 53% Lesbi' , 'Eres 54% Lesbi' , 'Eres 55% Lesbi' , 'Eres 56% Lesbi' , 'Eres 57% Lesbi' , 'Eres 58% Lesbi' , 'Eres 59% Lesbi' , 'Eres 60% Lesbi' , 'Eres 61% Lesbi' , 'Eres 62% Lesbi' , 'Eres 63% Lesbi' , 'Eres 64% Lesbi' , 'Eres 65% Lesbi' , 'Eres 66% Lesbi' , 'Eres 67% Lesbi' , 'Eres 68% Lesbi' , 'Eres 69% Lesbi' , 'Eres 70% Lesbi' , 'Eres 71% Lesbi' , 'Eres 72% Lesbi' , 'Eres 73% Lesbi' , 'Eres 74% Lesbi' , 'Eres 75% Lesbi' , 'Eres 76% Lesbi' , 'Eres 77% Lesbi' , 'Eres 78% Lesbi' , 'Eres 79% Lesbi' , 'Eres 80% Lesbi' , 'Eres 81% Lesbi' , 'Eres 82% Lesbi' , 'Eres 83% Lesbi' , 'Eres 84% Lesbi' , 'Eres 85% Lesbi' , 'Eres 86% Lesbi' , 'Eres 87% Lesbi' , 'Eres 88% Lesbi' , 'Eres 89% Lesbi' , 'Eres 90% Lesbi' , 'Eres 91% Lesbi' , 'Eres 92% Lesbi' , 'Eres 93% Lesbi' , 'Eres 94% Lesbi' , 'Eres 95% Lesbi' , 'Eres 96% Lesbi' , 'Eres 97% Lesbi' , 'Eres 98% Lesbi' , 'Eres 99% Lesbi' , 'Eres 100% Lesbi']														
  	const rii = cuu[Math.floor(Math.random() * cuu.length)]
					wnw = fs.readFileSync(`./src/5.jpg`)						
						cnf.sendMessage(from, wnw, image, { caption: '*Que tan lesbi eres*\n\n'+ rii, quoted: mek })
					break                                      

							case prefix+'reto':
							if (isLimit(sender)) return reply(ind.limitend(pusname))  
 if	(!isRegistered) return reply(ind.noregis())				
					const daare =['Te reto a poner en tu info de Whatsapp que te gusta Anuel por 24 horas','Te reto a decirle a tu crush que la amas y pasar cap en el grupo','Te reto a poner en tu estado que buscas pareja','Te reto a poner en tu perfil la foto de tu crush','Te reto a decirle a alguien que te gusta...','Te reto a mandar un audio cantando','Te reto mandar audio hablando con vos de niña de 5 años','Te reto a poner en tu info que te gusta tu vecin@','Te reto mandar una foto tuya sin taparte la cara','Te reto a decir que apodo tenias cuando eras un/a niñ@ aun','Te reto a enviar un vídeo bailando','Te reto a enviar el último meme que allas visto','Te reto a enviar tu canción favorita']
					const deer = daare[Math.floor(Math.random() * daare.length)]
				wbw = fs.readFileSync(`./src/4.jpg`)
							
						cnf.sendMessage(from, wbw, image, { quoted: mek, caption: '*Reto 😈*\n\n'+ deer })
					break										
									case prefix+'verdad':
									if (isLimit(sender)) return reply(ind.limitend(pusname))  
 if	(!isRegistered) return reply(ind.noregis())				
					const trrut =['Con quien de los que están aqui en el grupo te besarías? (etiqueta)','¿Alguna vez te ha gustado alguien? ¿Cuanto tiempo?','Alunga vez te llegó a gustar el/la herman@ de tu mejor amig@?','Cuantos años tienes?','Cuanto tiempo ah pasado desde que diste tu último beso?','Te gustan los chicos o las chicas o ambos?','Que opinas sobre BTS','Que opinas sobre l@s administradores','Tienes novi@?','Cuantas veces te as sentido ignorad@ por tu pareja o insuficiente para el/ella?','Que opinas de la nueva política de Whatsapp?','Que opinas sobre Telegram?','Tienes canal de Youtube?','Que opinas sobre Este bot?','Que opinas sobre el grupo?','Que tal te parece esta función de verdad o reto?']
					const ttrrth = trrut[Math.floor(Math.random() * trrut.length)]
					wuw = fs.readFileSync(`./src/6.jpg`)						
						cnf.sendMessage(from, wuw, image, { caption: '*Verdad😇*\n\n'+ ttrrth, quoted: mek })
					break

      case prefix+'badgirl':     
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())		
      const bdgirl = checkATMuser(sender)
      const bgirl = [`${bdgirl}`]
      if (bgirl < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)		
	  reply(mess.wait)
      const caaangti = ['https://i.ibb.co/sj2bPYF/d3d784f3b91e162931ee66ff5dcaad55.jpg','https://i.ibb.co/7vqJY0H/8cb259a728ab7e5715480d79f7788407.jpg','https://i.ibb.co/Vt0LJ6B/6983ec0960ccb23e083d31bce5bf98e1.jpg','https://i.ibb.co/tXXzFLg/9a0f4b592b2aa3dfd529550aeaeef315.jpg','https://i.ibb.co/yRH6LSj/f3c02087dc222ab778a4ebe0954e978c.jpg','https://i.ibb.co/F50JpNF/3c4e7fb4076c29deda1ae43c02bbbaf8.jpg','https://i.ibb.co/vw6rx02/ab647d85d13c3d0b64083ca833ca5592.jpg','https://i.ibb.co/JntPN2J/408802071cca03df4acf1fca7cd20b8a.jpg','https://i.ibb.co/YBx7V71/20ab363a93d4137d571ea62e747675e8.jpg','https://i.ibb.co/BsZ5sdT/e7df654fbdafc7d55cc933d0645c23c1.jpg','https://i.ibb.co/CQ1489z/7174f6dc7f9787eb046fdcffa4cbe46b.jpg','https://i.ibb.co/wg7LRz3/452168af14d11b130b7425751ee5e8f7.jpg','https://i.ibb.co/b5ZD1Gz/5394274e8fce9902cb343ce4ce69cc2f.jpg','https://i.ibb.co/YQhM9sx/088837e391be04f77f803a3f9c049fa4.jpg','https://i.ibb.co/VYqMssF/2385b5a3610210f47449dfdf24ad67e5.jpg','https://i.ibb.co/ZW0PzZ5/62bcf6eec04f9b585611274152a887c1.jpg']
      let cangtiiip = caaangti[Math.floor(Math.random() * caaangti.length)]
      klop = await getBuffer(cangtiiip)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break

      case prefix+'rimuru':     
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())		
      const rimu = checkATMuser(sender)
      const mru = [`${rimu}`]
      if (mru < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)		
	  reply(mess.wait)
      const rimuru = ['https://i.ibb.co/726Smjs/33.jpg','https://i.ibb.co/LdwYvpc/34.jpg','https://i.ibb.co/DCsByNb/12.jpg','https://i.ibb.co/w0CND9x/32.jpg','https://i.ibb.co/9h6ZcFR/8.jpg','https://i.ibb.co/dt99Gr7/30.jpg','https://i.ibb.co/ccZdBpR/9.jpg','https://i.ibb.co/p3FBVcQ/31.jpg','https://i.ibb.co/my1p0vY/6.jpg','https://i.ibb.co/prsSGPx/28.jpg','https://i.ibb.co/JCD4rsd/7.jpg','https://i.ibb.co/MDjXxmY/29.jpg','https://i.ibb.co/2k3t9Yv/26.jpg','https://i.ibb.co/31vCBpX/4.jpg','https://i.ibb.co/8s1hntb/27.jpg','https://i.ibb.co/7r9Kx1J/5.jpg','https://i.ibb.co/Msh0LXw/2.jpg','https://i.ibb.co/8MttBTW/24.jpg','https://i.ibb.co/GC9xyCL/25.jpg','https://i.ibb.co/4TtMbT8/3.jpg','https://i.ibb.co/SKbJxWH/10.jpg','https://i.ibb.co/j5wRf5t/11.jpg','https://i.ibb.co/qCbPNBc/22.jpg','https://i.ibb.co/SmyG3LK/23.jpg','https://i.ibb.co/QrPvRQP/19.jpg','https://i.ibb.co/ChzZk60/20.jpg','https://i.ibb.co/tPZNtzT/17.jpg','https://i.ibb.co/84JztVT/18.jpg','https://i.ibb.co/QQWR92y/15.jpg','https://i.ibb.co/F7RHZv9/37.jpg','https://i.ibb.co/CzfkCkD/16.jpg','https://i.ibb.co/6N3JD0m/38.jpg','https://i.ibb.co/rG0KRMn/35.jpg','https://i.ibb.co/sJm05v0/13.jpg','https://i.ibb.co/m5dSHgF/36.jpg','https://i.ibb.co/TYR47sW/14.jpg','https://i.ibb.co/XthwzfN/1.jpg','https://i.ibb.co/xqvf9vV/21.jpg']
      let riimuru = rimuru[Math.floor(Math.random() * rimuru.length)]
      klop = await getBuffer(riimuru)
	sendMediaURL(from, `${riimuru}`)
reply('𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬')
          break



      case prefix+'shion':     
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())
      const shii = checkATMuser(sender)
      const shiii = [`${shii}`]
      if (shiii < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)				
	  reply(mess.wait)
const shion = ['https://i.ibb.co/Vq0CwXJ/13.jpg','https://i.ibb.co/XsHGqdd/2.jpg','https://i.ibb.co/8cd2gBz/14.jpg','https://i.ibb.co/n6VGwTz/3.jpg','https://i.ibb.co/SQNwMPQ/11.jpg','https://i.ibb.co/S0sWZXC/22.jpg','https://i.ibb.co/RThqBfL/1.jpg','https://i.ibb.co/T8VC64r/12.jpg','https://i.ibb.co/p0dJYyv/23.jpg','https://i.ibb.co/8dZy6rd/20.jpg','https://i.ibb.co/wcm068R/9.jpg','https://i.ibb.co/RYpR8FX/10.jpg','https://i.ibb.co/1Z7rzmN/21.jpg','https://i.ibb.co/bgYHND5/18.jpg','https://i.ibb.co/tbpC06P/8.jpg','https://i.ibb.co/rkr3Qm9/19.jpg','https://i.ibb.co/BcL9Rc1/17.jpg','https://i.ibb.co/tsqLSMs/6.jpg','https://i.ibb.co/ssNLg24/7.jpg','https://i.ibb.co/v4KL0Dn/4.jpg','https://i.ibb.co/w7XRBck/15.jpg','https://i.ibb.co/Q9FRf1w/16.jpg','https://i.ibb.co/GtTnmtp/5.jpg']
      let shiion = shion[Math.floor(Math.random() * shion.length)]
      klop = await getBuffer(shiion)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break






      case prefix+'shuna':     
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())	
      const shuuuna = checkATMuser(sender)
      const shun = [`${shuuuna}`]
      if (shun < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)			
	  reply(mess.wait)
const shuna = ['https://i.ibb.co/SB1d7KN/6.jpg','https://i.ibb.co/T4k267q/17.jpg','https://i.ibb.co/PC5pMpd/18.jpg','https://i.ibb.co/3BSymkB/7.jpg','https://i.ibb.co/RyHrr3C/15.jpg','https://i.ibb.co/yQ8dKS1/5.jpg','https://i.ibb.co/9gWWbzP/16.jpg','https://i.ibb.co/gTSVk40/14.jpg','https://i.ibb.co/yYvHXxz/3.jpg','https://i.ibb.co/DKZVW8K/4.jpg','https://i.ibb.co/C6ZkQ9V/12.jpg','https://i.ibb.co/LYC0DWh/1.jpg','https://i.ibb.co/cN2ZS4w/2.jpg','https://i.ibb.co/Jt0MrjV/13.jpg','https://i.ibb.co/yQPfSrw/10.jpg','https://i.ibb.co/GW82cpX/11.jpg','https://i.ibb.co/G254pyQ/19.jpg','https://i.ibb.co/bHCLgBp/8.jpg','https://i.ibb.co/c2WTgGX/9.jpg']
      let shuuna = shuna[Math.floor(Math.random() * shuna.length)]
      klop = await getBuffer(shuuna)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break



      case prefix+'milim':     
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())	
      const mili = checkATMuser(sender)
      const milin = [`${mili}`]
      if (milin < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)			
	  reply(mess.wait)
const milim = ['https://i.ibb.co/XFskXnK/23.jpg','https://i.ibb.co/YDKRWV1/2.jpg','https://i.ibb.co/W60tZDr/3.jpg','https://i.ibb.co/44k9Bd0/24.jpg','https://i.ibb.co/FJSRyH2/21.jpg','https://i.ibb.co/tQy9LVp/1.jpg','https://i.ibb.co/54Nb9zQ/22.jpg','https://i.ibb.co/mvPkmR8/19.jpg','https://i.ibb.co/4RWG4n4/20.jpg','https://i.ibb.co/qJN7mZM/18.jpg','https://i.ibb.co/VxSZ1W9/17.jpg','https://i.ibb.co/y5gPs0H/15.jpg','https://i.ibb.co/4dkC8BG/16.jpg','https://i.ibb.co/wKXRJf0/27.jpg','https://i.ibb.co/0B1sh5S/13.jpg','https://i.ibb.co/kDLmrwT/14.jpg','https://i.ibb.co/Qd957pH/11.jpg','https://i.ibb.co/2vqYNDN/12.jpg','https://i.ibb.co/dr52kKh/30.jpg','https://i.ibb.co/GndYLwS/9.jpg','https://i.ibb.co/BB3mWpm/10.jpg','https://i.ibb.co/gjf2THn/28.jpg','https://i.ibb.co/6yXwjM8/29.jpg','https://i.ibb.co/8KS0MXc/8.jpg','https://i.ibb.co/DwwKzd1/6.jpg','https://i.ibb.co/602ZKxQ/7.jpg','https://i.ibb.co/2Y75bpW/4.jpg','https://i.ibb.co/xjh4f9R/25.jpg','https://i.ibb.co/pfps757/26.jpg','https://i.ibb.co/cNsRXvj/5.jpg']
      let miilim = milim[Math.floor(Math.random() * milim.length)]
      klop = await getBuffer(miilim)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break






      case prefix+'souei':     
      case prefix+'soue':
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())	
      const sou = checkATMuser(sender)
      const soue = [`${sou}`]
      if (soue < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)			
	  reply(mess.wait)
      const souei = ['https://i.ibb.co/dBmkw33/2.jpg','https://i.ibb.co/8rq77Zt/4.jpg','https://i.ibb.co/BgMq6NR/11.jpg','https://i.ibb.co/5sVs0pp/1.jpg','https://i.ibb.co/tYbgM0h/12.jpg','https://i.ibb.co/nR7XNvW/9.jpg','https://i.ibb.co/z6qdwtt/10.jpg','https://i.ibb.co/N98M5bJ/7.jpg','https://i.ibb.co/RYF0zRC/8.jpg','https://i.ibb.co/p1fWM5g/5.jpg','https://i.ibb.co/x5ZGQrd/6.jpg','https://i.ibb.co/zJSpS2L/3.jpg']
      let souuei = souei[Math.floor(Math.random() * souei.length)]
      klop = await getBuffer(souuei)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break


      case prefix+'jeanne':     
      case prefix+'jeane':
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())	
      const jjeanne = checkATMuser(sender)
      const jeannne = [`${jjeanne}`]
      if (jeannne < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)			
	  reply(mess.wait)
const jeanne = ['https://i.ibb.co/p18prPk/3.jpg','https://i.ibb.co/3sychGm/14.jpg','https://i.ibb.co/5kv6M9T/15.jpg','https://i.ibb.co/S0ZNqrr/4.jpg','https://i.ibb.co/H79tLff/1.jpg','https://i.ibb.co/BZ03V0Z/23.jpg','https://i.ibb.co/XJbFwkd/12.jpg','https://i.ibb.co/Bs9Gd8p/13.jpg','https://i.ibb.co/g7Q7ckz/2.jpg','https://i.ibb.co/fqQ0Ht8/21.jpg','https://i.ibb.co/KjVxZwf/10.jpg','https://i.ibb.co/vx8G2sj/22.jpg','https://i.ibb.co/Mhw4xsQ/11.jpg','https://i.ibb.co/Z25bm2y/19.jpg','https://i.ibb.co/kXjwLyk/20.jpg','https://i.ibb.co/nDFnpRg/9.jpg','https://i.ibb.co/qr1Qjns/18.jpg','https://i.ibb.co/hf6FMNg/7.jpg','https://i.ibb.co/KLKk8jC/8.jpg','https://i.ibb.co/KLJwWSV/16.jpg','https://i.ibb.co/Lhr75f2/5.jpg','https://i.ibb.co/qxzwB5v/6.jpg','https://i.ibb.co/N1Q2DD8/17.jpg']
      let jeaanne = jeanne[Math.floor(Math.random() * jeanne.length)]
      klop = await getBuffer(jeaanne)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break



      case prefix+'vanitas':     
      case prefix+'vanita':
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())	
           const vani = checkATMuser(sender)
      const tas = [`${vani}`]
      if (tas < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20) 			
	  reply(mess.wait)
      const vanitas = ['https://i.ibb.co/SKXtPYN/18.jpg','https://i.ibb.co/n0vKsn4/19.jpg','https://i.ibb.co/djCsVxQ/16.jpg','https://i.ibb.co/9WLdtQ0/17.jpg','https://i.ibb.co/k3hZvVd/15.jpg','https://i.ibb.co/SQppdLN/13.jpg','https://i.ibb.co/7y4RF0Q/14.jpg','https://i.ibb.co/z54fy0P/11.jpg','https://i.ibb.co/MBH4qXh/12.jpg','https://i.ibb.co/cx7p5jH/9.jpg','https://i.ibb.co/hRscFYV/10.jpg','https://i.ibb.co/ZfPbqSW/7.jpg','https://i.ibb.co/cvcgw37/8.jpg','https://i.ibb.co/CBpvpty/6.jpg','https://i.ibb.co/n7myX2C/26.jpg','https://i.ibb.co/qyB6Mxd/4.jpg','https://i.ibb.co/bWTmxY1/5.jpg','https://i.ibb.co/gtKJnSr/2.jpg','https://i.ibb.co/L8QSbKq/24.jpg','https://i.ibb.co/Vv2rrRQ/25.jpg','https://i.ibb.co/SNw4rXB/3.jpg','https://i.ibb.co/s13XV18/22.jpg','https://i.ibb.co/LnknWz2/23.jpg','https://i.ibb.co/kyncrK8/1.jpg','https://i.ibb.co/gJ73KWh/20.jpg','https://i.ibb.co/FBFDZLt/21.jpg']
      let vaniitas = vanitas[Math.floor(Math.random() * vanitas.length)]
      klop = await getBuffer(vaniitas)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break

      case prefix+'siesta':     
      case prefix+'siestas':
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())	
      const ssiesta = checkATMuser(sender)
      const sieesta = [`${ssiesta}`]
      if (sieesta < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)			
	  reply(mess.wait)
      const siesta = ['https://i.ibb.co/mHDL9n8/7.jpg','https://i.ibb.co/N6YbBPn/8.jpg','https://i.ibb.co/Nx81Kxp/4.jpg','https://i.ibb.co/w6d80K5/15.jpg','https://i.ibb.co/X4yq78f/16.jpg','https://i.ibb.co/qnmVY0g/5.jpg','https://i.ibb.co/JCxjbJn/2.jpg','https://i.ibb.co/sKcTgzV/13.jpg','https://i.ibb.co/bvgzHRs/3.jpg','https://i.ibb.co/gWJ2Lsg/14.jpg','https://i.ibb.co/0ngbGyT/11.jpg','https://i.ibb.co/KrpBmCp/1.jpg','https://i.ibb.co/t8698dm/12.jpg','https://i.ibb.co/ckZYxV4/9.jpg','https://i.ibb.co/CnwCYww/10.jpg','https://i.ibb.co/gFBgmx5/6.jpg']
      let siiesta = siesta[Math.floor(Math.random() * siesta.length)]
      klop = await getBuffer(siiesta)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break




      case prefix+'levi':     
      case prefix+'levy':
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())	
            const levy = checkATMuser(sender)
      const levyy = [`${levy}`]
      if (levyy < 20) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 20)			
	  reply(mess.wait)
      const levi = ['https://i.ibb.co/m91rrn6/12.jpg','https://i.ibb.co/5rRd748/13.jpg','https://i.ibb.co/qRZfYdr/10.jpg','https://i.ibb.co/w0gL2ch/11.jpg','https://i.ibb.co/GQ201Fd/9.jpg','https://i.ibb.co/TPyX2kd/7.jpg','https://i.ibb.co/Yk4nCzR/8.jpg','https://i.ibb.co/McKS6jQ/5.jpg','https://i.ibb.co/8dKmV5C/6.jpg','https://i.ibb.co/bzjCT8L/25.jpg','https://i.ibb.co/2NYmkmQ/3.jpg','https://i.ibb.co/1XgYWqd/4.jpg','https://i.ibb.co/svgVT24/23.jpg','https://i.ibb.co/qdP34h2/1.jpg','https://i.ibb.co/zhYvCBf/2.jpg','https://i.ibb.co/5nvvDbC/24.jpg','https://i.ibb.co/tp5mmzY/21.jpg','https://i.ibb.co/ZmYr7zw/22.jpg','https://i.ibb.co/2PhkHQZ/19.jpg','https://i.ibb.co/y6Y42sv/20.jpg','https://i.ibb.co/9WY34X6/18.jpg','https://i.ibb.co/c33rqkL/16.jpg','https://i.ibb.co/516JjN4/17.jpg','https://i.ibb.co/vd5Tg8V/14.jpg','https://i.ibb.co/sCst1sV/15.jpg']
      let levii = levi[Math.floor(Math.random() * levi.length)]
      klop = await getBuffer(levii)
      cnf.sendMessage(from, klop, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟐𝟎 𝐜𝐨𝐢𝐧𝐬'})
	  await limitAdd(sender)
      break
      
      




		    	case prefix+'antitrava':
                if (isLimit(sender)) return reply(ind.limitend(pushname))      
                if (!isRegistered) return reply(ind.noregis())			  
                if (!isGroup) return reply(`「 ❗ 」ESTE COMANDO SOLO PUEDE SER USADO EN GRUPOS`)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (args.length < 1) return reply('「 ❗ 」 1 Para Activar, 0 Para Desactivar')
				if (Number(args[0]) === 1) {
				if (isTrava) return reply(`「 ❗ 」La Funcion De Antitrava Ya Esta Activada En El Grupo!!`)
				trava.push(from)
				fs.writeFileSync('./database/trava.json', JSON.stringify(trava))
				reply(`「 ❗ 」Activó con éxito la función Antitrava en este grupo`)
				} else if (Number(args[0]) === 0) {
				trava.splice(from, 1)
				fs.writeFileSync('./database/trava.json', JSON.stringify(trava))
				reply(`「 ❗ 」Deshabilitó Con Éxito La Función Antitrava En Este Grupo`)
				} else {
				reply('「 ❗ 」 1 Para Habilitar Y 0 Para Desactivar')
				}
				break


case prefix+'megumin':
case prefix+'megu':
      if (isLimit(sender)) return reply(ind.limitend(pusname))  
      if	(!isRegistered) return reply(ind.noregis())	
      const meguumin = checkATMuser(sender)
      const mmeegu = [`${meguumin}`]
      if (mmeegu < 30) return reply(`𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐬𝐨𝐟𝐢𝐜𝐨𝐢𝐧𝐬 𝐢𝐧𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬.`)
      confirmATM(sender, 30)			
	  reply(mess.wait)
       const apiiis2 =['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
 const nepe222 = apiiis2[Math.floor(Math.random() * apiiis2.length)]        
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/megumin?apikey=${nepe222}`, {method: 'get'})
                     cnf.sendMessage(from, buff, image, {quoted: mek, caption: '𝐒𝐞 𝐭𝐞 𝐜𝐨𝐛𝐫𝐚𝐫𝐨 𝟑𝟎 𝐜𝐨𝐢𝐧𝐬'})
break






                     


default:

 if (budy.includes(`@18156806165`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}
	
	 if (budy.includes(`B闦R闦I闦G闦A闦D闦`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}
 if (budy.includes(`~@`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}
					 if (budy.includes(`saur.com`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}

					//v
					
	if (budy.includes(`~*@555484137179*~`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}				
					
					
	if (budy.includes(`19565244699`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}			
					
		if (budy.includes(`SUSHANT.`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
					
					
	
		
	if (budy.includes(`Mosca_Virus`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
	if (budy.includes(`ɩȿạɩɾ.com`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
	if (budy.includes(`๒`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
			
	if (budy.includes(`www.instagram.com/p/CE0pVKZs5Wk/?igshid=5ihhd4xdsgrh`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
	
			
	if (budy.includes(`🔴`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
	if (budy.includes(`Mosca_Virus`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
	if (budy.includes(`Mosca_Virus`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

			
						
												
	if (budy.includes(`𝟏(𝟖𝟖𝟔)𝟗𝟗𝟗-𝟏𝟑𝟒𝟓`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

				if (budy.includes(`⏤͟͟͞͞ 😈MATAR XXX₀₀₇ꪰ😈`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

				if (budy.includes(`❄️_××××××××÷_`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
	if (budy.includes(`Mosca_Virus`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
						
			if (budy.includes(`chat.whatsapp.com/K2vyQpkxfT2Eh63O55L0B8@hird_fekalinos:👿👿👿𒀱☹️𒀱𒀱𒀱⃢⃢⃢𒀱𒀱⃢⃢⃢𒀱𒀱⃢⃢⃢𒀱𒀱⃢𒀱☹️𒀱💝🤔𒀱𒀱⃢z𒀱🅱️𒀱𒀱⃢𒀱⃢🇬🇧𒀱⃢⃢⃢👾⃠⃤𒀱⃠⃤𒀱𒂭𒂭𒇫𒇫𒇫𒇫⃢⃢:👺🤡̵̛͔͍̱͙̥͔̯͖̥͙̲͆ͬ̊̑̔̂🥰:👿👿👿👿𒀱☹️𒀱𒀱𒀱⃢⃢⃢𒀱✖❌✖❌✖❌✖❌❌✖❌✖❌✖❌✖❌❌🔱❌❌❌❌✳✳❕❕❗✴✴✴✴✴✴✴✴❗〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️💔❔❔❔❔⚫▪️➿💮💮🕐🕟🕔🔕⭕💯`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
					if (budy.includes(`⃟ᡃ⃟ᡃ⃟ᡃ⃟`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
						
										
				if (budy.includes(`𝟏(𝟖𝟖𝟔)𝟗𝟗𝟗-𝟏𝟑𝟒𝟓ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
									
							
	if (budy.includes(`⃟⃟⃟⃟`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

												
		if (budy.includes(`৯৯৯৯`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`100030449499276`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`xn--hatsapp-rh4c.com/free-tickets‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎‏‎`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`Wa.me/559891312574`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`www.instagram.com/p/CE6f8afF85G/?igshid=4p33q69wr89q`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		if (budy.includes(`JXgH0fuabFR5VijfrdwyxY`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
	
			if (budy.includes(`images.app.goo.gl/d3sU6Z6hgbVmPwx79`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
	
			if (budy.includes(`www.instagram.com/p/CE0pVKZs5Wk/?igshid=5ihhd4xdsgrh`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		
		if (budy.includes(`www.instagram.com/p/CE9OsNblDcq`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		
				if (budy.includes(`www.facebook.com/mohamed.faslan.121772`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
		
			
					if (budy.includes(`ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝‎ᡃ⃟‎ᡃ⃝`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
					
	//vvv
		if (budy.includes(`pinterest.com/detetive`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

		if (budy.includes(`lol.davizinmaker.ml/nagazap`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		

		if (budy.includes(`www.instagram.com/p/CMx2kO9pnW-/?utm_source=ig_web_copy_link`)) {
		if (!isGroup) return
		if (!isTrava) return
			cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}		
			
					
					
		  
	if (budy.includes(`ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ`)) {
		if (!isGroup) return
		if (!isTrava) return
		cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}	     
		        
		              
		         if (budy.includes(`🆇҉⃟⃢🅲҉⃟⃢🅻҉⃟⃢`)) {
		if (!isGroup) return
		if (!isTrava) return
		cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}

		       	
if	 (budy.includes(`www.instagram.com/p/CE0pVKZs5Wk/?igshid=5ihhd4xdsgrh🅻҉⃟⃢🅸҉⃟⃢🅽҉⃟⃢🆄҉⃟⃢🆇҉⃟⃢🅲҉⃟⃢🅻҉⃟⃢🅰҉⃟⃢🅽҉⃟⃢tratrav🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯🔯`)) {
		if (!isGroup) return
		if (!isTrava) return
		cnf.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		cnf.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}       	          			   			
		      		       	          														   											   






}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Juego Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Girar = @${tty.player1.split('@')[0]}`
  cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
cnf.sendMessage(from, `@${tty.player2.split('@')[0]} Se rehúsa:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

const _0x2039a5=_0x22b6;(function(_0x9db4e8,_0x3165a4){const _0x5cb034=_0x22b6,_0x43021d=_0x9db4e8();while(!![]){try{const _0x4f286b=-parseInt(_0x5cb034(0x1be))/0x1+parseInt(_0x5cb034(0x1d8))/0x2*(-parseInt(_0x5cb034(0x1d3))/0x3)+parseInt(_0x5cb034(0x1cc))/0x4+parseInt(_0x5cb034(0x1e0))/0x5*(parseInt(_0x5cb034(0x1c5))/0x6)+parseInt(_0x5cb034(0x1bc))/0x7+parseInt(_0x5cb034(0x1bd))/0x8+-parseInt(_0x5cb034(0x1e7))/0x9;if(_0x4f286b===_0x3165a4)break;else _0x43021d['push'](_0x43021d['shift']());}catch(_0x2c9108){_0x43021d['push'](_0x43021d['shift']());}}}(_0x39d9,0xb98d4));button=='SOURCE\x20CODE'&&(console[_0x2039a5(0x1c8)](_0x2039a5(0x1e4)),confumods['sendMessage'](from,{'text':_0x2039a5(0x1da),'matchedText':_0x2039a5(0x1da),'description':'','title':_0x2039a5(0x1c7),'jpegThumbnail':ofrply},_0x2039a5(0x1c4),{'detectLinks':![],'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'quoted':finv}));button=='MP3'&&(console['log'](_0x2039a5(0x1d2)),reply(mess[_0x2039a5(0x1e1)]),confumods[_0x2039a5(0x1cf)](from,anu3,audio,{'mimetype':_0x2039a5(0x1dc),'quoted':mek}));function _0x39d9(){const _0x212414=['Script','️LIST\x20MENU','sendMessage','user','Status','MP3','1299kwYfZn','\x0aitem1.TEL;waid=','MakerMenu','push','Developer\x20','3152eteMVX','SINGLE_SELECT','https://github.com/dcode-denpa/bitch-boot','prepareMessageFromContent','audio/mp4','MP4','GroupMenu','Hai\x20kak\x20','45pyDoPy','wait','notify','Jadibot','SOURCE\x20CODE','contactsArrayMessage','OwnerMenu','3368466xnSDyx','DownloadMenu','contacts','vname',',\x20Silahkan\x20pilih\x20menu\x20disini','3339875KRAxWB','4525568rJeYcJ','244909dLsGYf','relayWAMessage','OtherMenu','*_©\x20Dcode\x20Denpa_*','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','split','extendedTextMessage','481554qazfTP','DEVELOPER','don\x27t\x20click\x20here\x20!!!','log','\x20-\x20','LIST\x20MENU','Creator','1185836IEdnLq'];_0x39d9=function(){return _0x212414;};return _0x39d9();}button==_0x2039a5(0x1dd)&&(console['log'](_0x2039a5(0x1dd)),reply(mess[_0x2039a5(0x1e1)]),confumods[_0x2039a5(0x1cf)](from,anu4,video,{'quoted':mek}));if(button==_0x2039a5(0x1c6)){console[_0x2039a5(0x1c8)](_0x2039a5(0x1c6));let ini_list=[];for(let i of ownerNumber){const vname=confumods[_0x2039a5(0x1e9)][i]!=undefined?confumods[_0x2039a5(0x1e9)][i][_0x2039a5(0x1ea)]||confumods[_0x2039a5(0x1e9)][i][_0x2039a5(0x1e2)]:undefined;ini_list[_0x2039a5(0x1d6)]({'displayName':_0x2039a5(0x1d7)+NamaBot,'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Dcode\x20Denpa;;;\x0aFN:'+(vname?''+vname:''+confumods[_0x2039a5(0x1d0)]['name'])+_0x2039a5(0x1d4)+i[_0x2039a5(0x1c3)]('@')[0x0]+':'+i['split']('@')[0x0]+_0x2039a5(0x1c2)});}confumods['sendMessage'](from,{'displayName':_0x2039a5(0x1d7)+NamaBot,'contacts':ini_list},_0x2039a5(0x1e5),{'quoted':mek,'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}});}function _0x22b6(_0x293272,_0x1e5921){const _0x39d9cd=_0x39d9();return _0x22b6=function(_0x22b6fe,_0x5823d5){_0x22b6fe=_0x22b6fe-0x1bb;let _0x3a1107=_0x39d9cd[_0x22b6fe];return _0x3a1107;},_0x22b6(_0x293272,_0x1e5921);}if(button==_0x2039a5(0x1ca)){console[_0x2039a5(0x1c8)](_0x2039a5(0x1ca));let bitch=confumods[_0x2039a5(0x1db)](from,{'listMessage':{'title':'','description':_0x2039a5(0x1df)+pushname+_0x2039a5(0x1bb),'buttonText':_0x2039a5(0x1ce),'footerText':_0x2039a5(0x1c1),'listType':_0x2039a5(0x1d9),'sections':[{'title':jmn+'\x20-\x20'+week+'\x20'+weton+_0x2039a5(0x1c9)+calender,'rows':[{'title':_0x2039a5(0x1cd),'rowId':''},{'title':'Speed','rowId':''},{'title':_0x2039a5(0x1d1),'rowId':''},{'title':_0x2039a5(0x1cb),'rowId':''},{'title':_0x2039a5(0x1e3),'rowId':''},{'title':'Runtime','rowId':''},{'title':_0x2039a5(0x1e6),'rowId':''},{'title':_0x2039a5(0x1d5),'rowId':''},{'title':_0x2039a5(0x1de),'rowId':''},{'title':_0x2039a5(0x1c0),'rowId':''},{'title':_0x2039a5(0x1e8),'rowId':''}]}]}},{});confumods[_0x2039a5(0x1bf)](bitch);}
if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, los otros contenidos (◕ᴗ◕✿)')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno (◕ᴗ◕✿)')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Resultado del juego Tictactoe 🎲

*Yeyyy el ganador es *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Resultado del juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Juegos de la serie🥀_*`
ucapan2 = `*🎳 Resultado del juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Juego Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Girar = @${tty.player2.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, los otros contenidos 🥺')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno 🥀')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado del juego Tictactoe 🎲*

*Yeyyy el ganador es @${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Juego Tictactoe 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Resultado del juego Tictactoe 🎲*

*_Serie de juegos_* `
speech2 = `*🎳 Resultado del juego Tictactoe*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Juego Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Girar = @${tty.player1.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }

        if (budy.includes('chat.whatsapp')){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Te salvaste eres admin (◍•ᴗ•◍)❤')
										var kic = `${sender.split("@")[0]}@s.whatsapp.net`
					reply(`Enlace detectado😤 @${sender.split("@")[0]}`)
					cnf.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)
					}, 0)
				    }


				
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
