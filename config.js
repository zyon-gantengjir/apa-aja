const fs = require('fs')

//settings bot
global.owner = "6281257180104","6281275372632"
global.namaowner = "Drayy"
global.reply = "https://img12.pixhost.to/images/516/570736381_yopaihosting.jpg"
global.status = true
global.prefa = ["!", ".", ",", "🐤", "🗿"]; //not change!!

//mess
global.mess = {
	owner: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Khusus Owner Bot ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	admin: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Khusus Admin Group ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	botAdmin: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Bot Harus Jadi Admin Terlebih dahulu ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	group: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya berlaku di Group ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	private: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya dapat di lakukan di private cht ⚠️
╰━━━━━━━━━━━━━━━━━⬣`,
	murbug: `╭━━〔 𝐀𝐤𝐬𝐞𝐬 𝐃𝐢 𝐓𝐨𝐥𝐚𝐤 ❌ 〕━⬣
┃ Fitur Ini Hanya Untuk User Premium ⚠️
╰━━━━━━━━━━━━━━━━━⬣`
}


//nama seticker
global.packname = ' '
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

//End Settings

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
