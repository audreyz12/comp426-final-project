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
    postScore(name1, name2, score);
    
}

async function postScore(name1, name2, score){
    const url = `http://localhost:3000/match`; // Full URL including port
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name1: name1, name2: name2, score: score})});


    if (response.ok) {
        const lover = await response.json();
        //lover = JSON.parse(lover);
    } else {
        console.error('Failed to post score');
    }
}

async function getPhoto(){
    document.getElementById("photoInfo").innerHTML = '';


    let url = `https://cataas.com/cat`;

    let response = await fetch(url);
    let photo = document.getElementById("photoInfo");
    if (response.ok) {
        let photoImage = document.createElement('img');
        photoImage.src = url;
        photoImage.width = 300;
        let bry = document.createElement('br');
        photo.appendChild(bry)
        photo.appendChild(photoImage);
    } else {
        console.error('Failed to post photo');
    }

}

let createButton = document.getElementById("createButton");
 
createButton.addEventListener('click', async() => {
    await createLover(document.getElementById('nameInput').value);

});

let calculateButton = document.getElementById("calculateButton");
 
calculateButton.addEventListener('click', async() => {
    calculateScore(document.getElementById('nameInput').value, document.getElementById("crushInput").value);
    getPhoto();
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