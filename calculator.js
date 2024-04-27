async function createLover(name) {
    name = document.getElementById("nameInput").value;
    const url = `http://localhost:3000/people/${name}`; // Full URL including port
    const response = await fetch(url, { method: 'POST' });

    if (response.ok) {
        const lover = await response.json();
        //lover = JSON.parse(lover);
        displayLoverInfo(lover);
    } else {
        console.error('Failed to create lover');
    }
}

function displayLoverInfo(lover) {
    const loverInfoDiv = document.getElementById("loverInfo");
    loverInfoDiv.innerHTML = `
        <h3>Lover Information</h3>
        <p>Name: ${lover.name}</p>
       
    `;
}

function calculateScore(name1, name2){
    name1 = String(name1);
    name2 = String(name2);
    const scoreDiv = document.getElementById("scoreInfo");
    let score = (parseInt(name1, 36) + parseInt(name2, 36) ) % 100;
    console.log(parseInt(name1, 36));
    console.log(parseInt(name2, 36));

    scoreDiv.innerHTML = `
    <p>Score: ${score}</p>`;
    
}

let createButton = document.getElementById("createButton");
 
createButton.addEventListener('click', async() => {
    await createLover(document.getElementById('nameInput').value);

});

let calculateButton = document.getElementById("calculateButton");
 
calculateButton.addEventListener('click', async() => {
    calculateScore(document.getElementById('nameInput').value, document.getElementById("crushInput").value);
});

document.addEventListener('DOMContentLoaded', () => {
    const element = document.body;

    // Retrieve dark mode preference from localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // Apply dark mode class based on the stored preference
    if (isDarkMode) {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    }
    console.log(isDarkMode);
});