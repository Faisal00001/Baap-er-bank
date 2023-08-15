

document.getElementById('deposit-btn').addEventListener('click',()=>{
    const depositField=document.getElementById('deposit-field')
    const deposit=depositField.value;

    // Validation fot empty value
    if(deposit===''){
        alert("Please enter your amount in dollar for deposit")
        return;
    }
    
    // Getting deposit total
    const depositTotalElement=document.getElementById('deposit-total')
    const depositTotal=depositTotalElement.innerText;
    const currentDepositTotal=parseFloat(depositTotal)+parseFloat(deposit)
    depositTotalElement.innerText=currentDepositTotal;

    // Updating the bank account
    const balanceTotalElement=document.getElementById('balance-total')
    const balanceTotal=balanceTotalElement.innerText;
    const currentBalanceTotal=parseFloat(balanceTotal)+parseFloat(deposit)
    balanceTotalElement.innerText=currentBalanceTotal
    // Clear the deposit field
    depositField.value=''

    
})
document.getElementById('withdraw-btn').addEventListener('click',()=>{
    const withdrawField=document.getElementById('withdraw-field')
    const currentWithdraw=withdrawField.value;
    if(currentWithdraw===''){
        alert('Please enter your amount in dollar for withdraw ')
        return;
    }
    const withdrawTotalElement=document.getElementById('withdraw-total')
    const previousWithdraw=withdrawTotalElement.innerText;
    const balanceTotalElement=document.getElementById('balance-total')
    const previousBalanceTotal=balanceTotalElement.innerText;
   
    const currentWithdrawTotal=parseFloat(previousWithdraw)+parseFloat(currentWithdraw);
    if(currentWithdrawTotal>previousBalanceTotal){
        alert('Insufficient Balance')
        withdrawField.value='';
        return
    }
    withdrawTotalElement.innerText=currentWithdrawTotal;

    // Update the balance
   
    const currentBalanceTotal=parseFloat(previousBalanceTotal)-parseFloat(currentWithdraw)
    balanceTotalElement.innerText=currentBalanceTotal

    
    // Clear input field
    withdrawField.value='';
})