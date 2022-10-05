// step-1: add event handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the input value from the deposit input field
    const depositInputfield = document.getElementById('deposit-field');
    const depositInputValueString = depositInputfield.value;
    const depositInputValue = parseFloat(depositInputValueString);

    // step-7: clear the input field
    depositInputfield.value = '';

    // set the way of input procedure
    if (isNaN(depositInputValue)) {
        alert('Please provide valid number!');
        return;
    }

    // step-3: add amount to the deposit total
    const depositTotal = document.getElementById('deposit-total');
    const depositAmountString = depositTotal.innerText;
    const depositAmount = parseFloat(depositAmountString);

    // calculate the input amount and the deposit amount
    const currentDeposit = depositInputValue + depositAmount;

    // step-4: set the deposit amount
    depositTotal.innerText = currentDeposit;

    // step-5: get the balance amount
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmountString = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    // calculate the input amount and balance amount
    const currentBalance = depositInputValue + balanceAmount;

    // step-6: set the balance amount
    balanceTotal.innerText = currentBalance;
})