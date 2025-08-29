const scenes = [];
const replayButton = document.getElementById("replayButton")

window.addEventListener("DOMContentLoaded", () => {

    scenes.push(document.querySelector("#sidebar-scene1"));
    scenes.push(document.querySelector("#sidebar-scene2"));
    scenes.push(document.querySelector("#sidebar-scene3"));
    scenes.push(document.querySelector("#sidebar-scene4"));
    scenes.push(document.querySelector("#replay"));
    animateFlipbook();
});

document.querySelector('#form1 #btnNext1').addEventListener('click', function() {

    document.getElementById('form1').style.visibility = "hidden";
    document.getElementById('form2').style.visibility = "visible";
    document.getElementById('stepNumberContainer2').style.background = "rgb(75, 172, 79)"
    
});


document.querySelector('#form2 #btnNext2').addEventListener('click', function() {
    document.getElementById('form2').style.visibility = "hidden";
    document.getElementById('form3').style.visibility = "visible";
    document.getElementById('stepNumberContainer3').style.background = "rgb(75, 172, 79)"
});
document.querySelector('#form2 #btnPrevious1').addEventListener('click', function() {
    document.getElementById('form2').style.visibility = "hidden";
    document.getElementById('form1').style.visibility = "visible";
    document.getElementById('stepNumberContainer2').style.background = "rgb(255,255,255)"
});


document.querySelector('#form3 #btnNext3').addEventListener('click', function() {
    document.getElementById('form3').style.visibility = "hidden";
    document.getElementById('form4').style.visibility = "visible";
    document.getElementById('stepNumberContainer4').style.background = "rgb(75, 172, 79)"
    createBookingSummary();

    document.querySelector('#form4 #btnNext4').addEventListener('click', function() {
    document.getElementById('form4').style.visibility = "hidden";
    document.getElementById('form5').style.visibility = "visible";
});
    document.querySelector('#form4 #btnPrevious3').addEventListener('click', function() {
    document.getElementById('form4').style.visibility = "hidden";
    document.getElementById('form3').style.visibility = "visible";
    document.getElementById('stepNumberContainer4').style.background = "rgb(255,255,255)"
});
});
document.querySelector('#form3 #btnPrevious2').addEventListener('click', function() {
    document.getElementById('form3').style.visibility = "hidden";
    document.getElementById('form2').style.visibility = "visible";
    document.getElementById('stepNumberContainer3').style.background = "rgb(255,255,255)"
});


replayButton.addEventListener("click", function(){
    animateFlipbook();
})



function animateFlipbook() {
    let sceneNumber = 0;
    showScene(sceneNumber);
    let timer = setInterval(show, 3500);

    function show() {
        sceneNumber++;
        if (sceneNumber >= scenes.length) {
            clearInterval(timer);
            sceneNumber = 0;
            return;
        }
        showScene(sceneNumber);
    }
}

function showScene(sceneNumber) {
    for (let i = 0; i < scenes.length; i++) {
        scenes[i].style.visibility = (i === sceneNumber) ? "visible" : "hidden";
    }
    if (sceneNumber === 4){
        scenes[3].style.visibility = "visible";
    }
}

function createBookingSummary(){
    let totalPrice;
    let selectedLocker = document.querySelector('input[name="choice"]:checked');

    totalPrice = 0;
    let date = document.getElementById('date').value;
    let adults = parseInt(document.getElementById('adult').value) || 1;
    let children = parseInt(document.getElementById('children').value) || 0;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let ticketType = document.getElementById('ticketType').value;
    let storageLocker = selectedLocker.value;

    if (ticketType === "premium"){
        totalPrice = (adults + children) * 45
    }

    else if(ticketType === "standard"){
        totalPrice = (adults + children) * 25
    }

    if (storageLocker === "storage"){
        totalPrice = totalPrice + 5
    }
    else{}

    let summaryHTML = `
    <h1>Booking Summary</h1>

    <p><strong>Date: </strong><span>${(date)}</span></p>

    <p><strong>Contact Name: </strong><span>${name}</span></p>

    <p><strong>Email: </strong><span>${email}</span></p>

    <p><strong>Adults: </strong><span>${adults}</span></p>

    <p><strong>Children: </strong><span>${children}</span></p>

    <p><strong>Ticket Type: </strong><span>${ticketType}</span></p>

    <p><strong>Storage Locker: </strong><span>${storageLocker === 'storage' ? 'Yes (+$5)' : 'No'}</span></p>

    <p>Total Amount: <span style="color: white">$${totalPrice}</span></p>

    <input type="checkbox" name="" id="checkbox"> <p>Terms & Conditions read</p>
    <button id="btnNext4">Submit</button>
    <button id="btnPrevious3">Previous</button>
    `
    document.getElementById('form4').innerHTML = summaryHTML
}

    