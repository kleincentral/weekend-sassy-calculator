// set a monthly total to keep track of the total amount of
    // money paid to employees
let monthlyTotal = 0;

function submitClick(event) {
    // Prevents the page refreshing when submit is pressed.
    event.preventDefault();

    // Finds correct space to place all of our content in.
    // Sets totalAddOn to contain all of our content in our list.
    let addingToList = document.getElementById('tableBody');
    let totalAddOn = `<tr>`

    // Takes the input specifically from the annual salary and adds it to
        // monthlyTotal which is passed to a calculateSalary function.
    monthlyTotal += Number(document.getElementById('input5').value);
    calculateSalary(monthlyTotal)


    // Loop to go through all of the input content and append them to totalAddOn content.
    for (let count = 1; count <= 5; count ++) {
        let newMember = document.getElementById(`input${count}`).value;

        console.log(newMember);
        document.getElementById(`input${count}`).value = '';
        totalAddOn += `<td class="list${count}">${newMember}</td>`;
    }

    // Adds the end button and closing table row to totalAddOn, and then puts it into the list.
    totalAddOn += `<td><button onclick='deleteEntry(event)'>❌</button></td></tr>`
    addingToList.innerHTML += totalAddOn

}

function deleteEntry(event) {

    // Math to subtract the total monthy total by the amount deleted (childNodes picks out the 4th index which is input5)
        // then passes it to my calculate salary function
    monthlyTotal -= Number(event.target.closest('tr').childNodes[4].textContent)
    calculateSalary(monthlyTotal)

    // Removes deleted parent (which is the entire row)
    event.target.parentElement.parentElement.remove();
}

function calculateSalary(input) {

    // calculateSalary first takes the full annual total and changes it to an monthy total.
    input = input/12

    // This then takes away any decimal points after 2.
    input = Number.parseFloat(input).toFixed(2)

    // This if statement asks if the input should be used for two decimal points, or if it should reset
        // to a 0 (0.00 looks odd, so this eliminates that possibility)
    if (input != 0) {
    document.getElementById('totalCost').textContent = `Total Monthly Cost: $${input}`
    }
    else {
    document.getElementById('totalCost').textContent = `Total Monthly Cost: $0`
    }

    // Handles the code where you add the red text 'over-budget' to the footer if you are overdraft.
        // The else statement removes it for when you go back into your budget.
    if (input > 20000) {
        document.querySelector(`footer`).classList.add('over-budget')
    }
    else{
        document.querySelector(`footer`).classList.remove('over-budget')
    }
}