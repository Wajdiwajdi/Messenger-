document.getElementById('send-btn').addEventListener('click', function() {
    let messageInput = document.getElementById('message-input');
    let messageText = messageInput.value;
    
    if (messageText.trim() !== "") {
        let chatBox = document.getElementById('chat-box');

        // Create new message
        let newMessage = document.createElement('div');
        newMessage.classList.add('message', 'user-message');
        newMessage.innerHTML = `<p>${messageText}</p><span class="time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>`;

        // Add to chat box
        chatBox.appendChild(newMessage);
        
        // Clear the input
        messageInput.value = "";

        // Scroll to the bottom
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
