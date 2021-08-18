// handle iPhone case 
function updatedProductNumber(product, price, isIncriseing) {
    // incrise case 
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncriseing) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // updated case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;

    // total calculate 
    calculateTotal();

}
//  total calculate 
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on html total 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// handle iPhone event 
document.getElementById('phone-plus').addEventListener('click', function () {
    updatedProductNumber('phone', 1219, true);

})

document.getElementById('phone-minus').addEventListener('click', function () {
    // dicrise phone 
    updatedProductNumber('phone', 1219, false);
})


// handle phone case event 
document.getElementById('case-plus').addEventListener('click', function () {
    // incrise case 
    updatedProductNumber('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click', function () {
    // dicrise case 
    updatedProductNumber('case', 59, false);


})