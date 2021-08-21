

// function for cost

function costUpdate(size,number){
     const storageInput = document.getElementById(size + '-cost');
     storageInput.innerText = number;

    calculateTotal();
};

// memory cost

document.getElementById('primary-memory').addEventListener('click',function(){
     costUpdate('memory',0);
});

document.getElementById('extra-memory').addEventListener('click',function(){
     costUpdate('memory',180);
});

// storage cost

document.getElementById('primary-storage').addEventListener('click',function(){
     costUpdate('storage',0);
});

document.getElementById('second-storage').addEventListener('click',function(){
     costUpdate('storage',180);
});

document.getElementById('extra-storage').addEventListener('click',function(){
     costUpdate('storage',360);
});

// delivery cost

document.getElementById('normal-delivery').addEventListener('click',function(){
     costUpdate('delivery',0);
});
document.getElementById('fast-delivery').addEventListener('click',function(){
     costUpdate('delivery',20);
});

// get input value

function getInputCost(size){
     const storageInput = document.getElementById(size + '-cost');
     const costTotal = parseInt(storageInput.innerText);
     return costTotal;
};
// calculate total

function calculateTotal(){
      const bestPrice = document.getElementById('best-price');
     const bestCost = parseInt(bestPrice.innerText);
     const memoryTotal = getInputCost('memory');
     const storageTotal = getInputCost('storage');
     const deliveryTotal = getInputCost('delivery');
     const totalPrice = bestCost + memoryTotal + storageTotal + deliveryTotal;
     document.getElementById('total-price').innerText = totalPrice;
      document.getElementById('total').innerText = totalPrice;
    
     
};

// function for apply promo code
function discount(name){
     const promoCode = document.getElementById('promo-code');
     const totalPrice = document.getElementById('total').innerText;
     if(promoCode.value == name){
          const subTotal = parseInt(totalPrice);
          const discount = subTotal/5; 
          const grandTotal = totalPrice - discount;
           document.getElementById('total').innerText = grandTotal;
     };
};

document.getElementById('code-submit').addEventListener('click', function(){
     discount('stevekaku');
});
