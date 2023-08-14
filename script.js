// *Arrays
const who = [
"My dog ",
"John Lennon ",
"Juana la loca ",
"ChatGPT ",
"My parrot ",
"Romeo Santos ",
"A ghost ",
"Your mother "
];

const action = [
"ate ",
"destroyed ",
"burned ",
"flushed down the toilet ",
"psychologically damaged ",
"imprisoned ",
"gave a good talking to ",
"covered in jam "
];

const what = [
"my keys ",
"my computer ",
"my life ",
"my soul ",
"my car ",
"my work ",
"our dignity ",
"my happiness "
];
const when = [
"just now.",
"this morning.",
"this afternoon.",
"yesterday.",
"in a dream I had.",
"in a future life.",
"in a past life.",
"last week."
];
// *Variables
const excuseElement = document.querySelector("#excuse");
const excuseBtn = document.querySelector("#excuseBtn")
const emoji = document.querySelector(".emoji")
const emojis = ["😀", "😃", "😁", "😆", "😂", "😉", "😎", "🤣", "😄", "🐱"];
const btnColors = ["btn bg-primary", "btn bg-secondary", "btn bg-success", "btn bg-danger", "btn bg-info", "btn bg-light", "btn btn-outline-primary", "btn btn-outline-secondary"];

// *Random Array Item Selection
function randomItem(array) {
	let randomItem = Math.round(Math.random() * (array.length - 1));
	return array[randomItem];
}
// *Excuse Generator
function generateExcuse() {
	let whoItem = randomItem(who);
	let actionItem = randomItem(action);
	let whatItem = randomItem(what);
	let whenItem = randomItem(when);
	let phrase = `${whoItem}${actionItem}${whatItem}${whenItem}`
	return phrase;
}
// *Emoji Generator
function generateEmoji() {
	let randomEmoji = randomItem(emojis);
	return randomEmoji
}
// *Button Color Generator
function generateBtnColor() {
	let randomBtnColor = randomItem(btnColors);
	return randomBtnColor
}
// *Button Click Actions
excuseBtn.addEventListener("click", function() {
	// Changing Excuse
	excuseElement.textContent = generateExcuse();
	// Changing Emoji
	emoji.textContent = generateEmoji();
	// Changing Button Color
	excuseBtn.className = generateBtnColor();
})
