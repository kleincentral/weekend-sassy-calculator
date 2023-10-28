
let monthlyTotal = 0;

function submitClick(event) {
    event.preventDefault();

    let addingToList = document.getElementById('tableBody');
    let totalAddOn = `<tr>`

    monthlyTotal += Number(document.getElementById('input5').value);
    calculateSalary(monthlyTotal)

    for (let count = 1; count <= 5; count ++) {
        let newMember = document.getElementById(`input${count}`).value;

        console.log(newMember);
        document.getElementById(`input${count}`).value = '';
        totalAddOn += `<td class="list${count}">${newMember}</td>`;
    }


    totalAddOn += `<td><button onclick='deleteEntry(event)'>❌</button></td></tr>`
    addingToList.innerHTML += totalAddOn

}

function deleteEntry(event) {
    console.log('Deleting', event.target);

    //attempting strech goal, leave for now
    monthlyTotal -= Number(event.target.parentElement.parentElement.childNodes[4].textContent)
    console.log("what does this do?", event.target.parentElement.parentElement.childNodes[4].textContent)
    calculateSalary(monthlyTotal)
    event.target.parentElement.parentElement.remove();
    console.log(monthlyTotal)
}

function calculateSalary(input) {
    console.log(input);
    input = input/12
    input = Number.parseFloat(input).toFixed(2)
    console.log(input)
    document.getElementById('totalCost').textContent = `Total Monthly Cost: $${input}`
    if (input >= 20000) {
        document.querySelector(`footer`).classList.add('over-budget')
    }
    else{
        document.querySelector(`footer`).classList.remove('over-budget')
    }
}