// got food input
const foodField = document.getElementById("food-field");
// got rent input 
const rentField = document.getElementById("rent-field");
// got clothes input 
const clothesField = document.getElementById("clothes-field");
// got total expenses span tag 
const totalExpenses = document.getElementById("total-expenses");
// got income field 
const incomeField = document.getElementById("income-field");
// got balance span tag 
const balance = document.getElementById("balance");
// got saving amount 
const savingAmount = document.getElementById("saving-amount")
// got saving input 
const savingInput = document.getElementById("save-input");
// got remaining balance input 
const remainingInput = document.getElementById("remaining-balance")

function getTotalCost(food,rent,clothes){
        totalCost =  parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
        return totalCost;
}
document.getElementById("calculate-btn").addEventListener("click",function(){
    const totalCostAmount = getTotalCost(foodField.value,rentField.value,clothesField.value);
    if(incomeField.value < totalCostAmount){
        debugger;
        document.getElementById("income-error").style.display="block";
    }
    else if(foodField.value >= 0 && incomeField.value >= 0 && rentField.value >= 0 && clothesField.value >= 0 && savingInput.value >= 0){
        debugger;
        totalExpenses.innerText = totalCostAmount;
        const incomeTaka = parseFloat(incomeField.value);
        balance.innerText = incomeTaka - totalCostAmount;
        document.getElementById("income-error").style.display="none";
    }
    else{
        document.getElementById("type-error").style.display = "block";
    }
});

function savingCalculate(){
    const savingParcent = parseFloat(savingInput.value);
    const savingMoney = parseFloat(incomeField.value) * savingParcent / 100;
    if(parseFloat(savingMoney) > parseFloat(balance.innerText)){
        document.getElementById("saving-error").style.display = "block";
    }
    else{
        console.log(savingMoney)
        savingAmount.innerText = savingMoney;
        remainingInput.innerText = parseFloat(balance.innerText) - savingMoney;
        document.getElementById("saving-error").style.display = "none";
    }

   



}