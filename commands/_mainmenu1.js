/*CMD
  command: /mainmenu1
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
  command: /mainmenu1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let msg = `Welcome! Please select an option:`;

let keyboard = {
  keyboard: [
    [
      { text: "Purchase 3-Day key" },
      { text: "Purchase 10-Day key" },
      { text: "Purchase 30-Day key" }
    ],
    [
      { text: "Check Balance" },
      { text: "AddBalance" },
      { text: "Check Stock" }
    ]
  ],
  resize_keyboard: true
};

Api.sendMessage({
  text: msg,
  reply_markup: keyboard
});
