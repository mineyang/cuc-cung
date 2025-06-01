const messages = [
  "Anh yêu em",
  "Anh thích em",
  "Anh muốn hiểu em nhiều hơn",
  "Gặp được em là điều hạnh phúc nhất trong cuộc đời anh",
  "Chính em đã cho anh động lực để tiến về phía trước",
  "Anh muốn cùng em vẽ nên bản đồ tương lai của chúng ta",
  "Anh muốn ở bên cạnh em"
];

function createFloatingText() {
  const text = document.createElement("div");
  text.classList.add("floating-text");
  text.innerText = messages[Math.floor(Math.random() * messages.length)];
  text.style.left = Math.random() * 100 + "vw";
  text.style.top = "100vh";
  text.style.animationDuration = (8 + Math.random() * 4) + "s";
  document.getElementById("floating-texts").appendChild(text);

  setTimeout(() => {
    text.remove();
  }, 12000);
}

setInterval(createFloatingText, 1000);
