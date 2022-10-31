// --------------------------------------------------Global variable Start------------------------------------------------
let bestPrice = document.getElementById('best-price');
let extraMemoryCost = document.getElementById('extra-memory-cost');
let extraStorageCost = document.getElementById('extra-storage-cost');
let deliveryCharge = document.getElementById('delivery-charge');
let totalPrice = document.getElementById('total-price');
let totalPriceHeigtLight = document.getElementById('total-price-higtlight');
let pomoCode = document.getElementById('pomo-code-input');

// --------------------------------------------------Product selection Start------------------------------------------------
document.querySelector('.components').addEventListener('click', function (Event) {
    let idName = Event.target.id;
    clickButton(idName);
});
function clickButton(id) {
    if (id == '8gb-ram') {
        document.getElementById('extra-memory-cost').innerText = '0';
    }
    else if (id == '16gb-ram') {
        document.getElementById('extra-memory-cost').innerText = '188';
    }
    else if (id == '256gb-storage') {
        document.getElementById('extra-storage-cost').innerText = '0';
    }
    else if (id == '512gb-storage') {
        document.getElementById('extra-storage-cost').innerText = '100';
    }
    else if (id == '1tb-storage') {
        document.getElementById('extra-storage-cost').innerText = '180';
    }
    else if (id == 'first-delivery') {
        document.getElementById('delivery-charge').innerText = '0';
    }
    else if (id == 'normal-delivery') {
        document.getElementById('delivery-charge').innerText = '20';
    }
    sumTotalPrice()
}

//----------------------------------- Price Calculate Code Start----------------------------------//
function sumTotalPrice() {
    let newTotalPrice = parseInt(bestPrice.innerText) + parseInt(extraMemoryCost.innerText) + parseInt(extraStorageCost.innerText) + parseInt(deliveryCharge.innerText);
    totalPrice.innerText = newTotalPrice;
    totalPriceHeigtLight.innerText = newTotalPrice;
}

//----------------------------------- Pomo Code Start----------------------------------//
document.getElementById('pomo-code').addEventListener('click', function () {
    let totalPriceText = parseFloat(totalPriceHeigtLight.innerText);
    if (pomoCode.value == 'stevekaku') {
        let parcentage = totalPriceText / 100 * 20;
        let newPrice = totalPriceText - parcentage;
        totalPriceHeigtLight.innerText = newPrice;
        pomoCode.value = '';
    }
})

