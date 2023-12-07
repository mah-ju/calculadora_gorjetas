const calculateBtn = document.querySelector("#calculateBtn");

function calculateTip() {
    const billAmount = parseFloat(document.querySelector("#billAmount").value);
    const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);

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

calculateBtn.addEventListener("click", calculateTip);
