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

let createButton = document.getElementById("createButton");
 
createButton.addEventListener('click', async() => {
    await createLover(document.getElementById('nameInput').value);

});