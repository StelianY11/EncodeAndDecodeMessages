function encodeAndDecodeMessages() {
    const buttonRef = document.querySelectorAll("button");
    const textAreaRef = document.querySelectorAll("textarea");

    const encodeBtn = buttonRef[0];
    const decodeBtn = buttonRef[1];
    const encodeTextArea = textAreaRef[0];
    const decodeTextArea = textAreaRef[1];

    encodeBtn.addEventListener("click", encodeAndSendMSG);
    decodeBtn.addEventListener("click", decodeAndSendMSG);

    function encodeAndSendMSG(event) {
        let currentText = encodeTextArea.value;
        let newMsg = "";

        for (const ch of currentText) {
            let numValue = ch.charCodeAt();
            numValue += 1;
            newMsg += String.fromCharCode(numValue);
        }
        decodeTextArea.value = newMsg;
        encodeTextArea.value = "";
    }

    function decodeAndSendMSG(event) {
        let currentValue = decodeTextArea.value;
        let decodeMsg = "";

        for (const ch of currentValue) {
            let numValue = ch.charCodeAt();
            numValue--;
            decodeMsg += String.fromCharCode(numValue);
        }
        decodeTextArea.value = decodeMsg;
    }
}