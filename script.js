// ==========================================
// ELEMENTS
// ==========================================

const loveScreen = document.getElementById("loveScreen");
const envelope = document.getElementById("envelope");

const hackScreen = document.getElementById("hackScreen");
const matrixCanvas = document.getElementById("matrixCanvas");

const targetBox = document.getElementById("targetBox");

const logs = document.getElementById("logs");

const alarm = document.getElementById("alarm");

const bgMusic = document.getElementById("bgMusic");
const errorSound = document.getElementById("errorSound");
const alarmSound = document.getElementById("alarmSound");

// ==========================================
// OPEN LOVE LETTER
// ==========================================

loveScreen.addEventListener("click", () => {

    envelope.classList.add("openEnvelope");

    setTimeout(() => {

        loveScreen.style.display = "none";

        hackScreen.style.display = "block";

        matrixCanvas.style.display = "block";

        targetBox.style.display = "block";

        bgMusic.volume = 0.5;
        bgMusic.play();

        startMatrix();

        startTerminal();

        startAlarm();

    },0);

});

// ==========================================
// MATRIX EFFECT
// ==========================================

const ctx = matrixCanvas.getContext("2d");

function resizeCanvas(){

    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&<>";

const fontSize = 16;

let columns =
Math.floor(window.innerWidth/fontSize);

let drops =
Array(columns).fill(1);

function startMatrix(){

    setInterval(drawMatrix,35);

}

function drawMatrix(){

    ctx.fillStyle="rgba(0,0,0,.06)";
    ctx.fillRect(0,0,matrixCanvas.width,matrixCanvas.height);

    ctx.fillStyle="#00ff66";

    ctx.font=fontSize+"px monospace";

    for(let i=0;i<drops.length;i++){

        const text =
        letters[Math.floor(Math.random()*letters.length)];

        ctx.fillText(
            text,
            i*fontSize,
            drops[i]*fontSize
        );

        if(
        drops[i]*fontSize >
        matrixCanvas.height &&
        Math.random()>.98
        ){

            drops[i]=0;

        }

        drops[i]++;

    }

}

// ==========================================
// TERMINAL
// ==========================================

const terminalData=[

"[BOOT] Initializing system...",
"[INFO] Connecting to server...",
"[INFO] Access granted...",
"[WARNING] Firewall bypassed...",
"[INFO] Reading files...",
"[INFO] Searching passwords...",
"[INFO] Uploading data...",
"[WARNING] Webcam enabled...",
"[WARNING] GPS acquired...",
"[CRITICAL] Remote control active...",
"[SYSTEM] Operation completed."

];

function startTerminal(){

    let index=0;

    setInterval(()=>{

        const line=document.createElement("div");

        line.textContent=
        terminalData[index];

        logs.appendChild(line);

        logs.scrollTop=
        logs.scrollHeight;

        if(logs.children.length>15){

            logs.removeChild(
            logs.firstChild
            );

        }

        index++;

        if(index>=terminalData.length){

            index=0;

        }

    },100);

}

// ==========================================
// ALARM
// ==========================================

function startAlarm(){

    setInterval(()=>{

        alarm.style.display="block";

        alarmSound.currentTime=0;
        alarmSound.play();

        setTimeout(()=>{

            alarm.style.display="none";

        },50);

    },500);

}// ==========================================
// PART 5 - FINAL EFFECTS
// ==========================================

// ---------- POPUP MESSAGES ----------
const popupMessages = [
    "WARNING: Unauthorized Access!",
    "SYSTEM BREACH DETECTED!",
    "Downloading Personal Data...",
    "Remote Desktop Connected.",
    "Camera Access Granted.",
    "Microphone Activated.",
    "Target Located.",
    "Scanning Face...",
    "GPS Coordinates Found.",
    "Access Level: ROOT"
];

// ---------- CREATE POPUP ----------
function createPopup(){

    const popup = document.createElement("div");

    popup.className = "popup";

    popup.style.left =
        Math.random() * (window.innerWidth - 320) + "px";

    popup.style.top =
        Math.random() * (window.innerHeight - 220) + "px";

    popup.innerHTML = `

    <div class="popupHeader">

        <span>⚠ SECURITY ALERT</span>

        <button class="closeBtn">X</button>

    </div>

    <div class="popupBody">

        ${popupMessages[Math.floor(Math.random()*popupMessages.length)]}

    </div>

    <div class="popupFooter">

        <button class="okBtn">OK</button>

    </div>

    `;

    document
        .getElementById("popupContainer")
        .appendChild(popup);

    // Play Error Sound
    errorSound.currentTime = 0;
    errorSound.play();

    popup.querySelector(".closeBtn").onclick = () => popup.remove();
    popup.querySelector(".okBtn").onclick = () => popup.remove();

}

// Spawn popup every 1 seconds
setInterval(createPopup,1000);

// ==========================================
// RANDOM SCREEN SHAKE
// ==========================================

function shakeScreen(){

    document.body.animate([

        {transform:"translate(3px,3px)"},

        {transform:"translate(-3px,-2px)"},

        {transform:"translate(2px,-3px)"},

        {transform:"translate(-2px,2px)"},

        {transform:"translate(0,0)"}

    ],{

        duration:180

    });

}

setInterval(shakeScreen,700);

// ==========================================
// RANDOM RED WARNING LOGS
// ==========================================

const warningLogs=[

"[WARNING] Face recognized...",
"[INFO] Searching gallery...",
"[INFO] Uploading photos...",
"[WARNING] Contacts downloaded...",
"[WARNING] SMS database opened...",
"[INFO] Encrypting files...",
"[INFO] Remote command executed...",
"[SYSTEM] Root privileges enabled..."

];

setInterval(()=>{

    const row=document.createElement("div");

    row.style.color="#ff4444";

    row.textContent=

    warningLogs[Math.floor(Math.random()*warningLogs.length)];

    logs.appendChild(row);

    logs.scrollTop=logs.scrollHeight;

    if(logs.children.length>18){

        logs.removeChild(logs.firstChild);

    }

},3000);

// ==========================================
// TARGET IMAGE GLITCH
// ==========================================

setInterval(()=>{

    targetBox.style.opacity="0";

    setTimeout(()=>{

        targetBox.style.opacity="1";

    },100);

},60);

// ==========================================
// RANDOM TITLE COLOR
// ==========================================

const title = document.getElementById("glitchText");

setInterval(()=>{

    title.style.color="#ff0000";

    setTimeout(()=>{

        title.style.color="#00ff66";

    },120);

},2500);

// ==========================================
// RANDOM BEEP
// ==========================================

setInterval(()=>{

    errorSound.currentTime=0;

    errorSound.play();

},12000);

// ==========================================
// RANDOM ALARM FLASH
// ==========================================

setInterval(()=>{

    alarm.style.display="block";

    setTimeout(()=>{

        alarm.style.display="none";

    },200);

},6000);

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.clear();

console.log("%cSYSTEM BREACH ACTIVE",
"color:#00ff66;font-size:20px;font-weight:bold;");

console.log("%cThis is a fictional browser effect.",
"color:white;");
