const messageForm = document.getElementById('message-form');
const messagesSection = document.getElementById('messages-section');
const loginSection = document.getElementById('login-section');
const chatSection = document.getElementById('chat-section');
const loginForm = document.getElementById('login-form');

const socket = io();

function createMessage(message, username) {
    return `<p class="border rounded-pill p-2"><span class="fw-bold">${username}</span>: ${message}</p>`
}

function setUpSocketEvents() {
    socket.on('recived-msg', function (arg) {
        const { username, message } = arg;
        
        // create a wrapper to set inner HTML
        const div = document.createElement('div');
        div.innerHTML = createMessage(message, username);

        // append the message div to section
        messagesSection.append(div);
    })
}


function setupDOMEventListeners() {
    messageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const message = messageForm.elements[0].value;
        
        // send the message to the server
        socket.emit('send-msg', { message: message });

        // reset the input
        messageForm.elements[0].value = "";
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = loginForm.elements[0].value;
        socket.emit('login-user', { username });

        loginSection.classList.add('d-none');
        chatSection.classList.remove('d-none');
    })
}

function initializeApp() {
    setupDOMEventListeners();
    setUpSocketEvents();
    chatSection.classList.add('d-none');
}

initializeApp();