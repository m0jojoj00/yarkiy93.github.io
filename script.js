const TOKEN = "8385634017:AAHCnvVkUe6v7MH8EGSd4wj5y35eaZoeCKg";
const CHAT_ID = "-1003869892653";

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

(function () {
  function cleanHash() {
    // убирает #... из адресной строки, оставляя только домен + путь/параметры
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (!el) return false;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // даём браузеру начать скролл и затем чистим URL
    setTimeout(cleanHash, 50);
    return true;
  }

  // 1) Перехват кликов по якорям
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a) return;

    const href = a.getAttribute('href');
    if (!href || href === '#') return;

    const id = href.slice(1);
    // если такой секции нет — не мешаем стандартному поведению
    if (!document.getElementById(id)) return;

    e.preventDefault();
    scrollToId(id);
  });

  // 2) Если пользователь открыл страницу сразу с #секцией — проскроллить и убрать #
  window.addEventListener('load', () => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    if (id && document.getElementById(id)) {
      // маленькая задержка, чтобы всё успело отрендериться
      setTimeout(() => scrollToId(id), 50);
    } else {
      // если hash “битый” — просто чистим
      cleanHash();
    }
  });
})();
