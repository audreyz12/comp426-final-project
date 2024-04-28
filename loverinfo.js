async function getLovers() {
    //name = document.getElementById("nameInput").value;
    const url = `http://localhost:3000/people`; // Full URL including port
    const response = await fetch(url, { method: 'GET' });

    if (response.ok) {
        const lovers = await response.json();
        //lover = JSON.parse(lover);
        displayAllLovers(lovers);
    } else {
        console.error('Failed to create lover');
    }
}

function displayAllLovers(lovers) {
    const loverInfoDiv = document.getElementById("loversInfo");
    loverInfoDiv.innerHTML = `<h3>All Lovers' Information</h3>`;
    let loverList = document.createElement('ul');
    lovers.forEach(lover => {
        let loverItem = document.createElement('li');
        loverItem.innerHTML = `
            <h5>Name: ${lover.name}</h5>
            <h5>Age: ${lover.age}</h5>
            <h5>Weakness: ${lover.weakness}</h5>
            <h5>Number: ${lover.number}</h5>
            <h6>&#9825;</h6>`;
        loverList.appendChild(loverItem);
    });
    loverInfoDiv.appendChild(loverList);

}

async function putLover(name, age, weakness, number) {
    document.getElementById("putError").textContent = "";

    //name = document.getElementById("nameInput").value;
    const url = `http://localhost:3000/people/${name}`; // Full URL including port
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({age: age, weakness: weakness, number: number})});

    if (response.ok) {
        //const lover = await response.json();
        //console.log(lover);
        //lover = JSON.parse(lover);
        await getLovers();
    } else {
        document.getElementById("putError").textContent = "Cannot find lovr";
        console.error('Failed to create lover');
    }
}

async function deleteLover(name) {
    document.getElementById("deleteError").textContent = "";
    //name = document.getElementById("nameInput").value;
    const url = `http://localhost:3000/people/${name}`; // Full URL including port
    const response = await fetch(url, { method: 'DELETE' });

    if (response.ok) {
        //const lovers = await response.json();
        //lover = JSON.parse(lover);
        await getLovers();
    } else {
        document.getElementById("deleteError").textContent = "Cannot find lovr";

        console.error('Failed to delete lover');
    }
}

let loversButton = document.getElementById("loversButton");

loversButton.addEventListener('click', async() => {
    await getLovers();

});

let deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener('click', async() => {
    await deleteLover(document.getElementById('loverDelete').value);
});

let putButton = document.getElementById("putButton");
 
putButton.addEventListener('click', async() => {
    await putLover(
        document.getElementById('loverName').value,
        document.getElementById('loverAge').value,
        document.getElementById('loverWeakness').value,
        document.getElementById('loverNumber').value);

});

