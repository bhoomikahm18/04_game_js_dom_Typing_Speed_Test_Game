const paragraphs = [
    "Agriculture is one of the major sectors of the Indian economy. It is present in the country for thousands of years. Over the years it has developed and the use of new technologies and equipment replaced almost all the traditional methods of farming. Besides, in India, there are still some small farmers that use the old traditional methods of agriculture because they lack the resources to use modern methods.",
    "Furthermore, this is the only sector that contributed to the growth of not only itself but also of the other sector of the country. India largely depends on the agriculture sector. Besides, agriculture is not just a mean of livelihood but a way of living life in India. Moreover, the government is continuously making efforts to develop this sector as the whole nation depends on it for food.",
    "Better education is very necessary for all to go ahead in the life and get success. It develops confidence and helps building personality of a person. School education plays a great role in everyone’s life. The whole education has been divided into three divisions such as the primary education, secondary education and Higher Secondary education. ",
    "The day when India freed herself from the shackles of British Rule, she gained her independence as a democratic country and set a new platform where everyone has the right to give his/her political opinion. This is the definition of democracy where a leader is chosen after conducting a poll. The voters will put their choices in the ballot boxes from the available options.",
    "The candidate who has got the highest votes will be chosen as the leader.An election is considered the prime pillar of democracy. Not only for the country but the election can also be conducted in any case where public opinion matters the most.",
    "There are different types of people in each country of the world. Out of millions of people, only a few personalities become or considered as Nobel on other meaning we can say they are great.Some become great and unique by birth, and some become great or noble by their deeds and sacrifices.",
    "For acquiring noble and honorable personality, it is essential to do things thoughtfully and dedicatedly in life.One thing is significant for each citizen of any country, which is nationalism or loyalty with the nation. To understand the importance of the place of our birth, we must recognize and grow with the soil & smell of the country.",
    "The basic technique stands in contrast to hunt and peck typing in which the typist keeps his or her eyes on the source copy at all times. Touch typing also involves the use of the home row method, where typists keep their wrists up, rather than resting them on a desk or keyboard (which can cause carpal tunnel syndrome). To avoid this, typists should sit up tall, leaning slightly forward from the waist, place their feet flat on the floor in front of them with one foot slightly in front of the other, and keep their elbows close to their sides with forearms slanted slightly upward to the keyboard; fingers should be curved slightly and rest on the home row.The modern world is a product of centuries of technological, societal, and cultural evolution.",
    "The technological revolution has been a defining characteristic of the modern world. From the internet and smartphones to artificial intelligence and machine learning, technology has reshaped every aspect of our lives. It has transformed the way we communicate, work, and even think. Information is now readily accessible, leading to a democratization of knowledge.",
    "Global Warming is a dangerous effect on our environment that we are facing these days. Rapid industrialization, increase in the population growth and pollution are causing a rise in Global Warming. Global Warming refers to the increase in the average temperature of the earth's surface during the last century. One of the reasons why Global Warming is dangerous is because it disturbs the overall ecology of the planet. This results in floods, famine, cyclones and other issues. There are many causes and results of this warming and is a danger for the existence of life on earth.",
    "Mountains are very special places. For many, they are sacred; to most, they bring an uplifting of the spirit and refreshment; to a few, they bring fear. They are the home of many different people on every continent. They occur in all biogeographical regions of the world. They are treasuries of high biodiversity and rich in endemic species. Mountains tend to have different climate conditions and a variety of geological and physiographic features. They provide magnificent scenery and the qualities of remoteness and wilderness.",
    "Technology has reduced the effort and time and increased the efficiency of the production requirements in every field. It has made our lives easy, comfortable, healthy, and enjoyable. It has brought a revolution in transport and communication. The advancement of technology, along with science, has helped us to become self-reliant in all spheres of life. With the innovation of a particular technology, it becomes part of society and integral to human lives after a point in time.",
    "Tourism is the largest and fastest-growing industry across the world. It is a source of revenue and employment. It also gives the opportunity for people to understand the culture, civilization, and religious aspects of a country. There are many countries whose main source of revenue is Tourism. It is an export that is not visible which earns valuable foreign exchange without any substantial or actual loss of internal resources.",
    "Transportation is movement of people and goods from one location to another. Throughout history, the economic wealth and military power of a people or a nation have been closely tied to efficient methods of transportation. Transportation provides access to natural resources and promotes trade, allowing a nation to accumulate wealth and power. Transportation also allows the movement of soldiers, equipment, and supplies so that a nation can wage war."
];

const typingText = document.querySelector(".typing-text p");
const inpField = document.querySelector(".wrapper .input-field");
const tryAgainBtn = document.querySelector(".content button");
const timeTag = document.querySelector(".time span b");
const mistakeTag = document.querySelector(".mistake span");
const wpmTag = document.querySelector(".wpm span");
const cpmTag = document.querySelector(".cpm span");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistake = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());

}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistake--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistake++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = math.round(((charIndex - mistake) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistake;
        cpmTag.innerText = charIndex - mistake;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}
function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistake) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistake = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
