const { getJson, getBuffer, command, isPrivate, sleep } = require("../lib/");

command({
    pattern: "help",
    fromMe: isPrivate,
    desc: "Anjan support",
    type: "support"
}, async (message) => {
    const name = '》✪⏤͟͞★⃝ꪶ‎𝐒𝐫𝖊𝖊⊭𝖏ꫝ𝖓-𖥘✪͜͡➺', title = "〆͎𝐙𝐢𝐤𝐨-𝐌𝐝👀🦋 ː͢» ziko🦋", number = '917439382677', body = "〆͎𝗭𝗜𝗞𝗢-𝗠𝗗👀🦋 ː͢»";
    const image = "https://i.imgur.com/V2DZbd7.jpeg", sourceUrl = 'https://wa.me/917439382677';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 〆͎𝐒𝐫𝐞𝐞𝐣𝐚𝐧👀🦋 ː͢»;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.jid, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});
