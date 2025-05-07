const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Malvin_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function PRINCE__JUNIOR_V2_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Prince_Junuor_Tech = Malvin_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Ubuntu)", "Chrome (Linux)", "Chrome (MacOs)"]
             });
             if(!Pair_Code_By_Prince_Junuor_Tech.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Prince_Junuor_Tech.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Prince_Junuor_Tech.ev.on('creds.update', saveCreds)
            Pair_Code_By_Prince_Junuor_Tech.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Prince_Junuor_Tech.sendMessage(Pair_Code_By_Malvin_Tech.user.id, { text: 'Malvin~' + b64data });

               let PRINCE_JUNIOR_V2_TEXT = `
      PRINCE JUNIOR V2 V4 Sucess Scan Session 

> Bot repo: Https://GitHub.com/XdKing2/MALVIN-XD 

> Owner: *Malvin King*

> BotName: *MALVIN XD* 



*Follow support for updates*
https://whatsapp.com/channel/0029VbA6MSYJUM2TVOzCSb2A


> _Regards Malvin King_`

 await Pair_Code_By_Malvin_Tech.sendMessage(Pair_Code_By_Malvin_Tech.user.id,{text:MALVIN_XD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Malvin_Tech.ws.close();
        await removeFile('./temp/'+id);
   require('child_process').exec('pm2 restart PAIR');
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    MALVIN_XD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Currently Unavailable"});
         }
        }
    }
    return await MALVIN_XD_PAIR_CODE()
});
module.exports = router
