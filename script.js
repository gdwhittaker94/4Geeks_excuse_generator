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

const excuseElement = document.querySelector("#excuse");
const excuseBtn = document.querySelector("#excuseBtn")
const emoji = document.querySelector(".emoji")


function randomItem(array) {
	let randomNumber = Math.round(Math.random() * (array.length - 1));
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

	// Emoji Change
	const emojis = ["😀", "😃", "😁", "😆", "😂", "😉", "😎", "🤣", "😄" ,"🐱"];

	function emojiSelection (emojiList) {
		let randomEmoji = Math.round(Math.random() * (emojiList.length - 1));
		return emojiList[randomEmoji]
	}

	emoji.textContent = emojiSelection(emojis);

})



