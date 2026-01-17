const fs = require('fs')

//settings bot
global.owner = "6283151568511"
global.namaowner = "Drayy"
global.botNumber = "6285129621563"
global.reply = "https://dray.vercel.app/media/sgdgzbqgz.jpg"
global.status = true
global.prefa = ["!", ".", ",", "🐤", "🗿"]; //not change!!

// Settings Panel Pterodactyl 
global.egg = "15"; // Egg ID
global.nestid = "5"; // Nest ID
global.loc = "1"; // Location ID
global.domain = "";
global.apikey = ""; // PTLC
global.capikey = ""; // PTLA

// msg //
global.mess = {
ketua: " ⇝ Access Denied \nKhusus Owner",
prem: "Kamu belum Premium",
murbug: "Kamu belum mendapat akses murbug\n minta add ke owner",
owner: " ⇝ Access Denied \nKhusus Owner",
admin: "Fitur Ini Khusus Admin Group ⚠️",
botAdmin: "Bot Harus Jadi Admin Terlebih dahulu ⚠️",
group: "Fitur Ini Hanya berlaku di Group ⚠️",
private: "Fitur Ini Hanya dapat di lakukan di private chat ⚠️",
japost: " -- Format Japost Tidak Tersedia -- ",
rekber: " -- List Rekber Tidak Tersedia -- "
}

//nama seticker
global.packname = 'Zeno'
global.author = 'By Dray🪷\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

//End Settings

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
