async function getMatches() {
    //name = document.getElementById("nameInput").value;
    const url = `http://localhost:3000/match`; // Full URL including port
    const response = await fetch(url, { method: 'GET' });

    if (response.ok) {
        const matches = await response.json();
        //lover = JSON.parse(lover);
        displayAllMatches(matches);
    } else {
        console.error('Failed to get matches');
    }
}

function displayAllMatches(matches) {
    const matchesInfoDiv = document.getElementById("matchesInfo");
    matchesInfoDiv.innerHTML = `<h3>All Matches' Information</h3>`;
    let matchList = document.createElement('ul');
    matches.forEach(match => {
        let matchItem = document.createElement('li');
        matchItem.innerHTML = `
            <h5>Name 1: ${match.name1}</h5>
            <h5>Name 2: ${match.name2}</h5>
            <h5>Love Score: ${match.score}</h5>
            <h6>&#9825;</h6>`;
        matchList.appendChild(matchItem);
    });
    matchesInfoDiv.appendChild(matchList);

}

let matchesButton = document.getElementById("matchesButton");

matchesButton.addEventListener('click', async() => {
    getMatches();

});