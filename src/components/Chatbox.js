import React, { useState } from "react";

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    const newMessages = [...messages, { role: "user", content: userInput }];
    setMessages(newMessages);

    setUserInput("");

    const response = await fetch("http://localhost:3333/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: newMessages,
        max_tokens: 350,
      }),
    });

    const data = await response.json();
    const aiMessage = data.choices[0].message.content.trim();
    setMessages([...newMessages, { role: "assistant", content: aiMessage }]);
  };

  return (
    <div id="chat-container">
      <div id="chat-box">
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.role === "user" ? "Vous" : "IA"} :</strong>{" "}
            {message.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        id="user-input"
        placeholder="Écrivez votre message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button onClick={sendMessage}>Envoyer</button>
      <span>LocalHosted A.I ChatBox</span>
    </div>
  );
}

export default Chatbox;
