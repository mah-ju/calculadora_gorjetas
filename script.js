const calculateBtn = document.querySelector("#calculateBtn");

function calculateTip() {
    const billAmount = parseFloat(document.querySelector("#billAmount").value);
    const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);

    if(!serviceQuality){
        alert("Por favor preencha todos os dados");
        return; 
    }
    if(isNaN(billAmount)) {

        alert("Por favor preencha os dados");
        return; 
    }

    const tipAmount = (billAmount * serviceQuality).toFixed(2);
    const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);

    const tipAmountInput = document.querySelector("#tipAmount");
    const totalAmountInput = document.querySelector("#totalAmount");
  
    tipAmountInput.value = `R$ ${tipAmount}`;
    totalAmountInput.value = `R$ ${totalAmount}`;
}

document.addEventListener("DOMContentLoaded", function () {
   
    const billAmountInput = document.querySelector("#billAmount");
    const serviceQualityInput = document.querySelector("#serviceQuality");
    const tipAmountInput = document.querySelector("#tipAmount");
    const totalAmountInput = document.querySelector("#totalAmount");

    billAmountInput.value = "";
    serviceQualityInput.value = "";
    tipAmountInput.value = "";
    totalAmountInput.value = "";


});

calculateBtn.addEventListener("click", calculateTip);

window.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        calculateTip();
    }
    });

