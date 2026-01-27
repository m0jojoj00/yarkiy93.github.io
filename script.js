const TOKEN = "8385634017:AAHCnvVkUe6v7MH8EGSd4wj5y35eaZoeCKg";
const CHAT_ID = "6191842598";

document.querySelector("form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("[name='name']").value;
  const company = document.querySelector("[name='company']").value;
  const contact = document.querySelector("[name='contact']").value;
  const goal = document.querySelector("[name='goal']").value;
  const description = document.querySelector("[name='description']").value;

  const message = `
🚀 Новая заявка

👤 Имя: ${name}
🏢 Компания: ${company}
📞 Контакт: ${contact}
🎯 Цель: ${goal}

📝 Описание:
${description}
`;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });

  alert("Заявка отправлена. Мы свяжемся с вами.");
  e.target.reset();
});
