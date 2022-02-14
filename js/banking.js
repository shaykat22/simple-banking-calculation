//deposit button handeller
document.getElementById('doposit-button').addEventListener('click', function () {
    // get deposit input value
    const depositInput = document.getElementById('deposit-amount');
    const depositValueText = depositInput.value;
    const depositValue = parseFloat(depositValueText);

    //get curent deposit
    const depositTotal = document.getElementById('total-deposit');
    const depositAmount = depositTotal.innerText;
    const lastUpdatedDeposit = parseFloat(depositAmount);
    depositTotal.innerText = lastUpdatedDeposit + depositValue;
    //console.log(depositAmount);

    //get current deposit 
    const balanceTotal = document.getElementById('total-balance');
    const depoBalance = balanceTotal.innerText;
    const lastUpadtedBalance = parseFloat(depoBalance);
    balanceTotal.innerText = lastUpadtedBalance + depositValue;

    //clear input field
    depositInput.value = '';


})

// withdraw button handeller


document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw input value
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawValueText = withdrawInput.value;
    const withdrawValue = parseFloat(withdrawValueText);

    //get curent withdraw
    const withdrawTotal = document.getElementById('total-withdraw');
    const withdrawAmount = withdrawTotal.innerText;
    const lastUpdatedWithdraw = parseFloat(withdrawAmount);
    withdrawTotal.innerText = lastUpdatedWithdraw + withdrawValue;
    //console.log(depositAmount);

    //get current deposit 
    const balanceTotal = document.getElementById('total-balance');
    const withdrawBalance = balanceTotal.innerText;
    const lastUpadtedBalance = parseFloat(withdrawBalance);
    balanceTotal.innerText = lastUpadtedBalance - withdrawValue;

    //clear input field
    withdrawInput.value = '';


})