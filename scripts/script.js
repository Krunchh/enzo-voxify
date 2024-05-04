const voicesDropdown = document.querySelector("#voices"); 
const rateInput = document.querySelector("#rate"); //hinahanap niya ung element na may id ng rate
const pitchInput = document.querySelector("#pitch"); //hinahanap niya ung element na may id ng pitch
const textArea = document.querySelector("#textarea"); //hinahanap niya ung element na may id ng textarea
const stopButton = document.querySelector("#stop-button"); //hinahanap niya ung button na may id ng stop-button
const speakButton = document.querySelector("#speak-button"); //hinahanap niya ung button na may id ng speak-button

const message = new SpeechSynthesisUtterance(textArea.value); //speech synthesis is the class instantiation
let voices = [];

function populateVoices(){
    // speechSynthesis.getVoices() is a function that returns an array of voices
    voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++){
        const option = document.createElement("option");
        option.setAttribute("value", voices[i].name);
        option.textContent = voices[i].name;

        voicesDropdown.appendChild(option);
    }
}

function setVoice(){
    for (let i = 0; i < voices.length; i++){
        if(voices[i].name === voicesDropdown.value){
            message.voice = voices[i];
        }

    }
}
function setRate(){
    message.rate = rateInput.value;
}

function setPitch(){
    message.pitch = pitchInput.value;
}

function setText(){
    message.text = textArea.value;
}

function stopVoice(){
    speechSynthesis.cancel();
}

function speakVoice(){
    speechSynthesis.speak(message);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
rateInput.addEventListener("change", setRate);
pitchInput.addEventListener("change", setPitch);
textArea.addEventListener("change", setText);
stopButton.addEventListener("click", stopVoice);
speakButton.addEventListener("click", speakVoice);