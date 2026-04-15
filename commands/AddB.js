/*CMD
  command: AddB
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
  command: AddBalance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

// Get QR image
let qr = Bot.getProperty("qr_image_url") || "https://ibb.co/wGQr0";

// Load used payment numbers (global)
let usedNumbers = Bot.getProperty("used_payment_numbers") || [];

// Safety check
if (usedNumbers.length >= 1000) {
  Bot.sendMessage("❌ Payment slots are full. Please contact admin.");
  return;
}

// Generate unique number
let number;
do {
  number = Math.floor(Math.random() * 1000) + 1; // 1–1000
} while (usedNumbers.includes(number));

// Save number globally
usedNumbers.push(number);
Bot.setProperty("used_payment_numbers", usedNumbers, "json");

// Format to 6 digits
let paymentNo = "SE" + number.toString().padStart(6, "0");

// Save payment number for this user
User.setProperty("payment_number", paymentNo, "string");

// 1️⃣ Send QR Image with Payment Number
Api.sendPhoto({
  chat_id: user.telegramid,
  photo: qr,
  caption:
    `<b>💳 Add Balance – QR Payment</b>\n\n` +
    `📌 <b>Payment No:</b> <code>${paymentNo}</code>\n\n` +
    `📷 Scan the QR and complete the payment.\n\n` +
    `⚠️ <i>Use this Payment No for verification.</i>`,
  parse_mode: "HTML"
});

// 2️⃣ Instructions
Bot.sendMessage(
  `<b>📤 Payment Confirmation</b>\n\n` +
  `After payment, send a <b>screenshot</b> here.\n\n` +
  `📌 Screenshot must clearly show:\n` +
  `• Amount paid\n` +
  `• Transaction ID (UTR)\n` +
  `• Date & Time\n` +
  `• <b>Payment No:</b> <code>${paymentNo}</code>\n\n` +
  `✅ Balance will be added after admin verification.`,
  { parse_mode: "HTML" }
);

// 3️⃣ Wait for screenshot
Bot.runCommand("sendPhoto");

