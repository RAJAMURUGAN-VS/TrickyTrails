const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const endgameElement = document.getElementById("end-game-container");
const settingsButton = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
const words = [
    "innovation", "challenge", "spectrum", "strategy", "dynamic", "visionary", "synergy", "pioneer",
    "transform", "empower", "insight", "elevate", "progress", "horizon", "optimize", "discover",
    "achieve", "explore", "future", "integrate", "solution", "enhance", "efficiency", "network",
    "expand", "design", "evolve", "breakthrough", "leadership", "intelligence", "perspective",
    "technology", "collaborate", "research", "develop", "connect", "growth", "impact", "create",
    "inspire", "advance", "compute", "automate", "simulate", "analyze", "predict", "visualize",
    "algorithm", "architecture", "precision", "automation", "streamline", "scalability", "sustain",
    "platform", "transformative", "synchronize", "maximize", "deploy", "orchestrate", "cybernetic",
    "quantum", "efficient", "sophisticated", "framework", "accelerate", "interaction", "optical",
    "signal", "processing", "machine", "intuitive", "abstract", "complexity", "security", "cloud",
    "ecosystem", "integrity", "simulation", "algorithmic", "systematic", "framework", "evidence",
    "reasoning", "intellect", "architect", "vision", "prototype", "neural", "cognition", "insightful",
    "measurement", "precision", "tangible", "pragmatic", "curiosity", "resilience", "nurture",
    "frontier", "benchmark", "navigate", "adaptive", "empirical", "immersive", "spectrum"
];

let randomWord;
let score = 0;
let time = 10;
// let difficulty = "medium";
let difficulty =
    localStorage.getItem("difficulty") !== null ?
    localStorage.getItem("difficulty") :
    "medium";

const timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDom() {
    randomWord = getRandomWord();
    word.innerText = randomWord;
}

function updateScore() {
    score++;
    scoreElement.innerText = score;
}

function updateTime() {
    time--;
    timeElement.innerText = time + "s";
    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    endgameElement.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="history.go(0)">Play Again</button>
    `;
    endgameElement.style.display = "flex";
}

text.addEventListener("input", (e) => {
    const insertedText = e.target.value;
    if (insertedText === randomWord) {
        e.target.value = "";
        addWordToDom();
        updateScore();
        if (difficulty === "hard") time += 2;
        else if (difficulty === "medium") time += 3;
        else time += 5;
        updateTime();
    }
});

settingsButton.addEventListener("click", () =>
    settings.classList.toggle("hide")
);
settingsForm.addEventListener("change", (e) => {
    difficulty = e.target.value;
    localStorage.setItem("difficulty", difficulty);
});

// Init
difficultySelect.value = difficulty;
addWordToDom();
text.focus();