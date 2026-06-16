const notes = [500,200,100,50,20,10,5,2,1];

const counter = document.getElementById("counter");

notes.forEach(note=>{

counter.innerHTML += `
<div class="row">

<div class="note">₹${note}</div>

<div>×</div>

<input
type="number"
min="0"
placeholder="0"
class="qty"
id="note${note}"
oninput="calculate()">

<div class="amount" id="amount${note}">
₹0
</div>

</div>
`;

});

function calculate(){

let total = 0;

notes.forEach(note=>{

let qty =
parseInt(
document.getElementById("note"+note).value
) || 0;

let amount = qty * note;

document.getElementById("amount"+note).innerHTML =
"₹" + amount;

total += amount;

});

document.getElementById("grandTotal").innerHTML =
"₹" + total;

}

function clearAll(){

notes.forEach(note=>{

document.getElementById("note"+note).value = "";

document.getElementById("amount"+note).innerHTML =
"₹0";

});

document.getElementById("grandTotal").innerHTML =
"₹0";

}