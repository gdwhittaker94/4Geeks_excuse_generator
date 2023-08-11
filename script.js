function log(input) {
	console.log(input);
}

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

const excuse = document.querySelector("#excuse");

// Picking random items function
function randomItem(array) {
	let randomNumber = Math.round(Math.random() * array.length);
	let randomItem = array[randomNumber];
	return randomItem;
}

// Generating random item function calls
let whoItem = randomItem(who);
let actionItem = randomItem(action);
let whatItem = randomItem(what);
let whenItem = randomItem(when);

// Concatenating random items and turning into a string function
function concatItems(whoItem, actionItem, whatItem, whenItem) {
	let newExcuse = whoItem.concat(actionItem).concat(whatItem).concat(whenItem);
	let newExcuseString = newExcuse.toString()
	return newExcuseString;
}

// Generating the new excuse in HTML document
let generatedExcuse = concatItems(whoItem, actionItem, whatItem, whenItem)
excuse.innerText = generatedExcuse;

