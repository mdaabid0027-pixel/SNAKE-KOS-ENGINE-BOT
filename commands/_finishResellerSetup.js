/*CMD
  command: /finishResellerSetup
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

/*CMD
command: /finishResellerSetup
*/

let reseller = User.getProperty("setup_reseller");

Bot.sendMessage(
  "✅ Reseller setup completed.\n\n" +
  "🆔 User ID: " + reseller
);

User.setProperty("setup_reseller", null);
