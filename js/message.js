document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.querySelector('input[name="input-msg"]');
  const sendButton = document.querySelector('input[name="send-msg"]');
  const convoBody = document.querySelector(".convo-body");

  sendButton.addEventListener("click", function () {
    const messageText = messageInput.value.trim();
    if (messageText !== "") {
      const newMessage = document.createElement("div");
      newMessage.className = "message receiver";
      newMessage.innerHTML = `
        
          <p>${messageText}</p>
            <img src="/img/clitoris.jpg" alt="clint" />
        `;

      convoBody.appendChild(newMessage);

      messageInput.value = "";

      convoBody.scrollTop = convoBody.scrollHeight;
    }
  });
});
