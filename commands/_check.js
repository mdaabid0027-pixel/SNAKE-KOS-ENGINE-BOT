/*CMD
  command: /check
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

let order_id = params

if (!order_id) {
  Bot.sendMessage("🚫 Invalid Order ID")
  return
}

HTTP.get({
  url: "https://fampay.anujbots.xyz/verify.php?order_id=" + order_id + "&api_key=FAM_44a1094e0368452f70b1a84a333e83af5bab691333bb32d7", //get api key from @FamPayApiKeyBot
  success: "/oncheck"
})
