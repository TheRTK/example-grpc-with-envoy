const {GetMessageRequest, GetMessageResponse} = require('./message_pb')
const {MessageServiceClient} = require('./message_grpc_web_pb');

const messageService = new MessageServiceClient('http://localhost:8081');

document.addEventListener("DOMContentLoaded", start);

function getCurrentTime() {

    const addPrefix = (n) => n > 9 ? n : `0${n}`;

    const d = new Date();
    return `${addPrefix(d.getHours())}:${addPrefix(d.getMinutes())}:${addPrefix(d.getSeconds())} | `;
}

function addLogText(target, msg) {
    target.innerHTML = `${target.innerHTML}<div><b>${getCurrentTime()}</b>${msg}</div>`;
}

function start() {
    const sendBtn = document.getElementById('sendBtn');
    const messageInput = document.getElementById('messageInput');
    const logArea = document.getElementById('logArea');

    addLogText(logArea, "Start!")

    sendBtn.onclick = () => {
        const request = new GetMessageRequest();
        request.setQuery(messageInput.value);

        addLogText(logArea, `New request: "${messageInput.value}"`)
        messageInput.value = "";

        messageService.getMessage(request, {}, (err, response) => {
            if(err) {
                console.error(err);
                return addLogText(logArea, `ERROR: ${err.message}`)
            } else {
                return addLogText(logArea, `New response: "${response.getMessage()}"`)
            }
        })
    }
}
