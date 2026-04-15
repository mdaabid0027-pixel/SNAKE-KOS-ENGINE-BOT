/*CMD
  command: /support
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage(
  "🛠 *SUPPORT*\n\n" +
  "👇 *हिंदी (Hindi)* 👇\n\n" +
  "अगर आपको कोई समस्या, सवाल या मदद चाहिए तो नीचे दिए गए सपोर्ट से संपर्क करें।\n" +
  "हम जल्द से जल्द आपकी सहायता करेंगे।\n\n" +
  "👇 *English* 👇\n\n" +
  "If you have any problem, question, or need help, please contact our support below.\n" +
  "We will assist you as soon as possible.\n\n" +
  "📞 *Support Contact:*\n" +
  "👉 @TechnoAabid",
  { parse_mode: "Markdown" }
);
