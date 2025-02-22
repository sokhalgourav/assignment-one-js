/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1Btn");
const verbBtn = document.getElementById("verbBtn");
const adjectiveBtn = document.getElementById("adjectiveBtn");
const noun2Btn = document.getElementById("noun2Btn");
const settingBtn = document.getElementById("settingBtn");
const playbackBtn = document.getElementById("playbackBtn");
const randomBtn = document.getElementById("randomBtn");
const resetBtn = document.getElementById("resetBtn");

// Constants for p tag to display query selectors
const displayNoun1 = document.getElementById("displayNoun1");
const displayVerb = document.getElementById("displayVerb");
const displayAdjective = document.getElementById("displayAdjective");
const displayNoun2 = document.getElementById("displayNoun2");
const displaySetting = document.getElementById("displaySetting");
const displayStory = document.getElementById("displayStory");

// Variables for pre-defined arrays
const nouns1 = ["The cat", "A dog", "My teacher", "An astronaut", "The robot"];
const verbs = ["jumps", "runs", "flies", "eats", "sings"];
const adjectives = ["happy", "sad", "angry", "excited", "sleepy"];
const nouns2 = ["a ball", "a pizza", "a spaceship", "a guitar", "a book"];
const settings = ["in the park", "on the moon", "at school", "in the jungle", "at home"];

// Variables for count to grab array elements
let storyParts = { noun1: "", verb: "", adjective: "", noun2: "", setting: "" };

/* Functions
-------------------------------------------------- */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function noun1_on_click() {
    storyParts.noun1 = getRandomElement(nouns1);
    displayNoun1.textContent = storyParts.noun1;
}

function verb_on_click() {
    storyParts.verb = getRandomElement(verbs);
    displayVerb.textContent = storyParts.verb;
}

function adjective_on_click() {
    storyParts.adjective = getRandomElement(adjectives);
    displayAdjective.textContent = storyParts.adjective;
}

function noun2_on_click() {
    storyParts.noun2 = getRandomElement(nouns2);
    displayNoun2.textContent = storyParts.noun2;
}

function setting_on_click() {
    storyParts.setting = getRandomElement(settings);
    displaySetting.textContent = storyParts.setting;
}

function playback_on_click() {
    displayStory.textContent = `${storyParts.noun1} ${storyParts.verb} ${storyParts.adjective} ${storyParts.noun2} ${storyParts.setting}.`;
}

function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

function resetStory() {
    storyParts = { noun1: "", verb: "", adjective: "", noun2: "", setting: "" };
    displayNoun1.textContent = "";
    displayVerb.textContent = "";
    displayAdjective.textContent = "";
    displayNoun2.textContent = "";
    displaySetting.textContent = "";
    displayStory.textContent = "";
}

function addStudentInfo() {
    const studentInfo = document.createElement("p");
    studentInfo.textContent = "Student ID: 123456 | Name: John Doe";
    document.body.appendChild(studentInfo);
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);
resetBtn.addEventListener("click", resetStory);
window.addEventListener("load", addStudentInfo);
