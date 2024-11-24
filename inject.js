(async () => {
    const POST_MESSAGES = `แมงมุมยังชักใย ขาดเธอไปคงชักว่าว
เฟี้ยวไม่เฟี้ยวก็แทบแฟนมึงเลี้ยวได้
ไม่หล่อจนเธอเหลียว แต่ทำเธอเสียวจนไม่ตื่น
ไม่ได้อยากเป็นคนสุดท้ายที่เธอรัก แค่อยากเป็น First Blood บนเตียงเธอ
อ่ะวู่วววววววว
อัลเลาะห์ รถบัส
ลอยกระทงวันเพ็ญ ขอแค่ไม่มีเมนส์ผมพร้อมซอย
Hard Donkey Cock
เบื่อแล้วนอนหมอน กุอยากนอน icu
อยากจะเป็นฮีโร่ แต่เป็นได้แค่ไอโง่
จริงใจแล้วไม่เห็นค่า งั้นขอซักท่าแล้วค่อยแยกย้าย
ว่ากุติ๋มระวังจิ๋มมึงโบ๋
ของผมก็โต อโลนได้ไง
หมูไม่ขาด ละหมาดไม่เคย
ใจเธอก็เหมือนหมูเพราะมีแต่มัน
โซเดียมคลอไลด์ ผมไม่คายคอลมี
มุกเสี่ยวคิดไม่ทัน คิดถึงเธอละกันง่ายดี
สกิบีดี้ ด็อปๆ เยสๆๆ
ไอเหี้ยโอ.....ริโอ้มันทำให่อ้วน`.split("\n");

    const SEND_MESSAGES = `มึงปลุกกที
สนใจมาดูแมวห้องเราไหม
ง่วงก็นอน หิวก็กิน เง่นก็บอก
ขอจีบแม่คุณได้ไหม
ขอจีบแฟนมึงได้ไหม
แฟนมึงเป็นไงบ้างว่ะ
แน่จริงก็มาหาดุดิ
ควย
ไอหน้าหี
Stupid Hack
ขออมหน่อย
มึงโง่จังว่ะ
ไอฟาย
แฟนมึงสวยจัง
น่ารักจัง
มาห้องพี่ไหมจ้ะ
ไอกะหรี่
ขอเลียหน่อย
ทักฮ๊าฟ
เหมียว
งื่อๆๆๆ`.split("\n");

    function sleep(ms) {
        return new Promise((r) => setTimeout(r, ms));
    }

    function pasteExec(text) {
        document.execCommand("insertText", false, text);
    }

    async function post() {
        const postBtn = document.querySelector(
            `div[class="x1i10hfl x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x16tdsg8 x1hl2dhg xggy1nq x87ps6o x1lku1pv x1a2a7pz x6s0dn4 xmjcpbm x107yiy2 xv8uw2v x1tfwpuw x2g32xy x78zum5 x1q0g3np x1iyjqo2 x1nhvcw1 x1n2onr6 xt7dq6l x1ba4aug x1y1aw1k xn6708d xwib8y2 x1ye3gou"]`
        );
        postBtn.click();
        await sleep(1000);
        pasteExec(
            POST_MESSAGES[Math.floor(Math.random() * POST_MESSAGES.length)]
        );
        await sleep(500);
        const submitBtn = document.querySelector(
            `div[class="x1ja2u2z x78zum5 x2lah0s x1n2onr6 xl56j7k x6s0dn4 xozqiw3 x1q0g3np xi112ho x17zwfj4 x585lrc x1403ito x972fbf xcfux6l x1qhh985 xm0m39n x9f619 xn6708d x1ye3gou xtvsq51 x1r1pt67"][role="none"]`
        );
        submitBtn.click();
    }

    async function sendMessages() {
        const messengerBtn = document.querySelector(
            `div[class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x6s0dn4 xzolkzo x12go9s9 x1rnf11y xprq8jg x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xl56j7k xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x1vqgdyp x100vrsf x1qhmfi1"][aria-label="Messenger"]`
        );
        messengerBtn.click();
        await sleep(1000);

        const chats = [
            ...document
                .querySelector(
                    `div[class="x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1xzczws x6ikm8r x1odjw0f x1n2onr6 xh8yej3 xish69e x16o0dkt __fb-light-mode"]`
                )
                .querySelector(`div[class="x1n2onr6"]`)
                .querySelectorAll(`div[data-virtualized="false"]`),
        ];

        for (let i = 0; i < chats.length; i++) {
            if (i > 0) {
                messengerBtn.click();
                await sleep(1000);
            }

            const _chats = [
                ...document
                    .querySelector(
                        `div[class="x78zum5 xdt5ytf x1iyjqo2 xs83m0k x1xzczws x6ikm8r x1odjw0f x1n2onr6 xh8yej3 xish69e x16o0dkt __fb-light-mode"]`
                    )
                    .querySelector(`div[class="x1n2onr6"]`)
                    .querySelectorAll(`div[data-virtualized="false"]`),
            ];

            const chatBtn = _chats[i].querySelector(
                `a[class="x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x1q0g3np x87ps6o x1lku1pv x1a2a7pz x1lliihq"]`
            );
            chatBtn.click();
            await sleep(500);
            pasteExec(
                SEND_MESSAGES[Math.floor(Math.random() * SEND_MESSAGES.length)]
            );
            await sleep(500);
            const sendBtn = document.querySelector(
                `div[class="x1i10hfl xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1q0g3np x87ps6o x1lku1pv x1a2a7pz x6s0dn4 xzolkzo x12go9s9 x1rnf11y xprq8jg x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xl56j7k xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xc9qbxq x14qfxbe xjbqb8w"][aria-label="กด Enter เพื่อส่ง"]`
            );
            sendBtn.click();
        }
    }

    // sendMessages();

    const modal = document.createElement("form");
    modal.id = "alarmForm";
    modal.style = `position: fixed;
                bottom: 40px;
                left: 40px;
                width: 400px;
                height: 400px;
                background-color: white;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;`;
    document.body.appendChild(modal);

    let currentAudio = null;

    function playSound(url) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        currentAudio = new Audio(url);
        currentAudio
            .play()
            .catch((error) => console.error("Error playing audio:", error));
    }

    function stopSound() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    }

    function formatTime(ms) {
        // Validate input
        if (ms < 0 || !Number.isFinite(ms)) return "00:00";

        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / (1000 * 60)) % 60);
        const hours = Math.floor(ms / (1000 * 60 * 60));

        // Helper function for padding zeros
        const pad = (num) => num.toString().padStart(2, "0");

        // If less than 1 hour, return MM:SS
        if (hours < 1) {
            return `${pad(minutes)}:${pad(seconds)}`;
        }

        // If 1 hour or more, return HH:MM:SS
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }

    function createDateByTime(hour, minute) {
        const now = new Date();
        const targetDate = new Date();

        // Set target time
        targetDate.setHours(hour, minute, 0, 0);

        // If target time already passed today, set to tomorrow
        if (targetDate < now) {
            targetDate.setDate(targetDate.getDate() + 1);
        }

        return targetDate;
    }

    function displayAlarmTime(_alarmTime) {
        return `${_alarmTime
            .getHours()
            .toString()
            .padStart(2, "0")}:${_alarmTime
            .getMinutes()
            .toString()
            .padStart(2, "0")}`;
    }

    const alarmForm = document.getElementById("alarmForm");

    const DEFAULT_ALARMFORM_HTML = `<h1 style="font-size: 20px;">ตั้งปลุกกี่โมงดี???</h1>

            <div style="margin-bottom: 40px">
                <div>
                    <p style="font-size: 16px;">ตั้งเวลาที่คุณต้องการตาย</p>
                    <input
                        type="time"
                        name="time"
                        style="
                            min-width: 250px;
                            padding: 10px;
                            margin-top: -8px;
                        "
                        required
                    />
                </div>
                <div>
                    <p style="font-size: 16px;">ความถี่ (นาที)</p>
                    <input
                        type="number"
                        name="every"
                        value="15"
                        style="width: 250px; padding: 10px; margin-top: -8px"
                        step="0.1"
                        required
                    />
                </div>
            </div>
            <button
                type="submit"
                style="
                    width: 250px;
                    padding: 10px;
                    background-color: red;
                    color: white;
                    border: none;
                    font-size: 20px;
                    font-weight: bold;
                "
            >
                ยืนยัน
            </button>
            
            <span style="font-size: 16px;" id="alarmInSpan"></span>`;

    let alarmTime, alarmInterval, alarmInInterval, alarmEvery, flushInInterval;

    alarmForm.innerHTML = DEFAULT_ALARMFORM_HTML;
    alarmForm.onsubmit = async function (e) {
        e.preventDefault();

        const form = new FormData(e.target);

        const hour = +form.get("time").split(":")[0];
        const minute = +form.get("time").split(":")[1];

        if (alarmInterval) {
            clearInterval(alarmInterval);
        }
        if (alarmInInterval) {
            clearInterval(alarmInInterval);
        }

        alarmTime = createDateByTime(hour, minute);
        alarmEvery = +form.get("every") * 60000;

        alarmInterval = setInterval(() => {
            const time = new Date();
            if (time.getHours() === hour && time.getMinutes() === minute) {
                clearInterval(alarmInterval);
                startAlarm();
            }
        }, 1000);

        console.log("Set alarm at", form.get("time"));
        startUpdateAlarmIn();

        // startAlarm();
    };

    function startAlarm() {
        if (!alarmTime) return;
        console.log("Alarm");
        playSound(
            "https://cdn.fbsbx.com/v/t59.3654-21/457140986_1220402532318774_8483417561836950265_n.mp3/OHAYO.mp3?_nc_cat=108&ccb=1-7&_nc_sid=d61c36&_nc_eui2=AeHzrkVbP8VC-HgJ67LbZTXLA7EwWEmd120DsTBYSZ3XbZOMNg4PH_wxA_cCh3JN4vyR5s0F4DRpRo2fPCe4V8jB&_nc_ohc=T_SwrYFk67IQ7kNvgGir9W4&_nc_zt=7&_nc_ht=cdn.fbsbx.com&_nc_gid=AdM81ayKAlPDOwcgeYmEs3D&oh=03_Q7cD1QGKWr5XDASLbFFMGr0YNJO1jG3-hShEwFSkypGqGpVJTg&oe=6743CCA6&dl=1"
        );
        alarmForm.innerHTML = `<h1 style="font-size: 20px; margin-top: -5px; margin-bottom: 20px;">${displayAlarmTime(
            alarmTime
        )} น. แล้วนะ คุณตื่นหรือยัง</h1>
            <button
                id="stopAlarmButton"
                type="button"
                style="
                    width: 250px;
                    padding: 10px;
                    background-color: red;
                    color: white;
                    border: none;
                    font-size: 20px;
                    font-weight: bold;
                "
            >
                หยุด
            </button>
            <span style="font-size: 16px;" id="flushInSpan"></span>`;

        // Add event listener after creating the button
        document
            .getElementById("stopAlarmButton")
            .addEventListener("click", stopAlarm);

        startUpdateFlushIn();
    }

    function stopAlarm() {
        stopSound();
        if (flushInInterval) {
            clearInterval(flushInInterval);
        }
        alarmForm.innerHTML = DEFAULT_ALARMFORM_HTML;
    }

    function startUpdateAlarmIn() {
        function updateAlarmIn() {
            const alarmInSpan = document.getElementById("alarmInSpan");
            if (!alarmInSpan) {
                return clearInterval(alarmInInterval);
            }
            const timestamp = alarmTime.getTime();
            const now = Date.now();
            if (now >= timestamp) {
                alarmInSpan.innerHTML = "";
                return clearInterval(alarmInInterval);
            }
            alarmInSpan.innerHTML = `<br />ตั้งปลุกเวลา ${displayAlarmTime(
                alarmTime
            )} แล้ว จะดังในอีก ${formatTime(timestamp - now)}`;
        }
        updateAlarmIn();
        alarmInInterval = setInterval(updateAlarmIn, 1000);
    }

    function startUpdateFlushIn() {
        function updateFlushIn() {
            const flushInSpan = document.getElementById("flushInSpan");
            if (!flushInSpan) {
                return clearInterval(flushInInterval);
            }
            const now = Date.now();
            const ms = now - alarmTime.getTime();
            const round = Math.floor(ms / alarmEvery);
            const nextFlushIn = alarmEvery - (ms % alarmEvery);
            if (nextFlushIn < 1000) {

                if (round % 2 === 0) {
                    post();
                } else {
                    sendMessages();
                }

                // post();
                // sendMessages();
            }

            flushInSpan.innerHTML = `<br />จะเริ่มทำลายล้างครั้งที่ ${
                round + 1
            } ใน ${formatTime(nextFlushIn)}`;
        }
        updateFlushIn();
        flushInInterval = setInterval(updateFlushIn, 1000);
    }

    // sendMessages();
})();
