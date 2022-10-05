// step-1: add event handler to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2: get the withdraw field 
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawInputValueString = withdrawField.value;
    const withdrawInputValue = parseFloat(withdrawInputValueString);

    // step-7: clear the withdraw input field
    withdrawField.value = '';

    // set the way of input procedure
    if (isNaN(withdrawInputValue)) {
        alert('Please provide valid number');
        return;
    }

    // step-3: get the withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmountString = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountString);

    // step-5: get the balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    // 
    if (withdrawInputValue > balanceTotalAmount) {
        alert('Baaper accounte eto tk nai');
        return;
    }

    // step-4: calculate the input amount with with withdraw amount
    const currentWithdrawAmount = withdrawInputValue + withdrawTotalAmount;

    // set the withdraw amount 
    withdrawTotal.innerText = currentWithdrawAmount;

    // step-6: calculate the withdraw amount and balance amount
    const currentBalanceAmount = balanceTotalAmount - withdrawInputValue;

    // set the balance amount
    balanceTotal.innerText = currentBalanceAmount;
})