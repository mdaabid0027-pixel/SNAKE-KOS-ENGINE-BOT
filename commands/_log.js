/*CMD
  command: /log
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

let logChannel = -1003332547125

let text = params

if(!text){ return }

Api.sendMessage({
  chat_id: logChannel,
  text: text,
  parse_mode: "HTML"
})
