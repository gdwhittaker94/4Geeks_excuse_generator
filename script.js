const who = [
"My dog ",
"John ",
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

let excuseElement = document.querySelector("#excuse");
let excuseBtn = document.querySelector("#excuseBtn")

function randomItem(array) {
	let randomNumber = Math.round(Math.random() * array.length);
	return array[randomNumber];
}

function generateExcuse() {
	let whoItem = randomItem(who);
	let actionItem = randomItem(action);
	let whatItem = randomItem(what);
	let whenItem = randomItem(when);

	let phrase = `${whoItem}${actionItem}${whatItem}${whenItem}`
	return phrase;
}

excuseBtn.addEventListener("click", function() {
	let generatedExcuse = generateExcuse();
	excuseElement.textContent = generatedExcuse;
})



