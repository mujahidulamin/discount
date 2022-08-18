document.getElementById('apply-btn').addEventListener('click', function(){
    const getTotalPrice = document.getElementById('total-price');
    const getTotalPriceString = getTotalPrice.innerText;
    const totalPrice = parseFloat(getTotalPriceString);
    
    // Discount field
    const discountField = document.getElementById('discount-field');
    const getDiscountField = discountField.value;

    if(getDiscountField === 'DOM' && typeof getDiscountField === 'string'){
        const thirtyPercentDiscount = totalPrice - (totalPrice*30/100);
        return (getTotalPrice.innerText = thirtyPercentDiscount);
    }else{
        alert('Your coupon code is invalid');
        return discountField.value = '';
    }

    
});