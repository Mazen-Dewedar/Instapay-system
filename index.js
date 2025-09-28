let balance = 0;
let input = document.querySelector('input')
let value = document.querySelector('span')
let transactions = []
let table = document.querySelector('.container  table tbody')

let showAmount = () => {
    value.innerText = +balance;
}
showAmount();
let deposite = () => {
    let amount = +input.value;
    transactions.push({
        balanceBefore: balance,
        Amount: amount,
        Type: 'Deposite',
        balanceAfter: balance + amount
    })
    balance = balance + amount;
    showAmount();
    input.value = "";

}
let withdraw = () => {
    let amount = +input.value;
    if (balance >= amount) {
        transactions.push({
            balanceBefore: balance,
            Amount: amount,
            Type: 'Withdraw',
            balanceAfter: balance - amount
        })
        balance = balance - amount;
        showAmount();
        input.value = "";
    } else {
        alert("You don't have enugh money ")
        input.value = "";
    }
}

let showTransactions = () => {
    table.innerHTML=''
    transactions.forEach((el, index) => {
        let row = `
        <tr>
            <td>${index + 1}</td>
            <td>${el.balanceBefore}</td>
            <td>${el.Amount}</td>
            <td>${el.Type}</td>
            <td>${el.balanceAfter}</td>
        </tr>`

        table.innerHTML += row
    })
}