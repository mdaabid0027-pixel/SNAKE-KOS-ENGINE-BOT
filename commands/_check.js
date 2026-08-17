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
  url: "https://fampay.anujbots.xyz/verify.php?order_id=" + order_id + "&api_key=FAM_4f28ec6ed18bf09c67027c9ca3a7bbfbf26039e598873403", //get api key from @FamPayApiKeyBot
  success: "/oncheck"
})
